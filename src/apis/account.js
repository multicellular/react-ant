import request from './request'

// 获取token
export function app_token() {
    return request({
        url: `/app_login/app_token`,
        method: 'get',
        params: {}
    });
}

// 鉴权登录
export function authorize({ mini_app_id, mini_app_token }) {
    return request({
        url: `/app_login/authorize`,
        method: 'get',
        params: { mini_app_id, mini_app_token }
    });
}

// 退出登录
export function user_logout() {
    return request({
        url: `/members/user_logout`,
        method: 'post',
        signature: true
    });
}

// 邀请关系
export function change_invite({ ref_code }) {
    return request({
        url: `/members/change_invite`,
        method: 'post',
        signature: true,
        data: { ref_code }
    });
}

export function set_pay_password(data) {
    return request({
        url: `/members/set_pay_password`,
        method: 'post',
        signature: true,
        data
    });
}