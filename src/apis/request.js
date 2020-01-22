import axios from 'axios'
// import store from '../store'
// import router from '../router'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { message } from 'antd'

const store = {
    state: {
        global: {
            language: 'zh',
            tokens: {}
        }
    }
}

const defaultConfig = {
    baseURL: '/api/v1/',
    headers: {},
    timeout: 20000,
    maxContentLength: 2000,
    retry: 2, // 超时再次请求次数
    retryDelay: 1000 // 超时后再次发起请求的时间间隔
}
const instance = axios.create(defaultConfig);
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return axiosHeaderInterceptor(config);
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const reqConfig = response.config;
    if (reqConfig.needHead) {
        return response.data;
    }
    const resData = response.data;
    const { head, body } = resData;
    if (head && head.code === 1000) {
        return body;
    } else {
        return Promise.reject(resData);
    }
    // return response;
}, function (error) {
    // 对响应错误做点什么
    if (error.response && error.response.status >= 500) {
        message.error('服务器未知错误，请稍后重试!');
        return Promise.reject('服务器未知错误，请稍后重试');
    }
    if (error.response && error.response.data && error.response.data.head) {
        const head = error.response.data.head;
        if (head.code === 1032) {
            const isRequestInfo = error.config.url === '/api/v1/members/user_info';
            const path = useRouteMatch().path;
            if (path === '/login' || isRequestInfo) {
                return Promise.reject(head);
            } else {
                message.warning('请重新登录!');
                useHistory().push({
                    path: "/login",
                    query: {
                        redirect: useRouteMatch().fullPath
                    }
                });
                return Promise.reject(head);
            }
        }
        if (head.msg) {
            message.error(head.msg);
        }
        return Promise.reject(head);
    }
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        axiosRetryInterceptor(error);
    } else {
        return Promise.reject(error);
    }

});

function axiosHeaderInterceptor(config) {
    // eslint-disable-next-line
    // 自定义请求拦截逻辑，可以处理权限，请求发送监控等
    let tokenObj = store.state.global.tokens || {};
    if (!tokenObj.app_token) tokenObj = false;
    if (config.signature && tokenObj) {
        config.headers['Authorization'] = tokenObj.app_token
    }
    let languageStr;
    switch (store.state.global.language) {
        case "jap":
            languageStr = 'ja-JP';
            break;
        case "kor":
            languageStr = 'ko';
            break;
        default:
            languageStr = store.state.global.language;
    }
    config.headers['Accept-Language'] = languageStr;
    if (config.method === "post" || config.method === "delete" || config.method === 'patch') {
        const _data = config.data;
        if (_data && Object.keys(_data).length) {
            let formData = new FormData();
            Object.keys(_data).forEach(v => {
                formData.append(v, _data[v]);
            });
            config.data = formData;
        }
    }
    return config;
}

function axiosRetryInterceptor(err) {
    var config = err.config;
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err);

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    var backoff = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, config.retryDelay || 1);
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function () {
        //  // url会因为baseURL不停的叠加
        config.url = config.url.replace(config.baseURL, '')
        //  if (_isJSON(config.data)) {
        //    // axios默认把data JSON化了，重新请求时会导致签名算法读取的是字符串，导致出错
        //    config.data = JSON.parse(config.data)
        //  }
        return axios(config);
    });
}

export default instance;