import request from './request'

// 获取token
export function powers() {
    return request({
        url: `/powers`,
        method: 'get'
    });
}

export function powers_outs() {
    return request({
        url: `/powers/outs`,
        method: 'get'
    });
}

export function powers_id(id) {
    return request({
        url: `/powers/${id}`,
        method: 'get'
    });
}

// // 鉴权登录
// export function authorize({ mini_app_id, mini_app_token }) {
//     return request({
//         url: `/app_login/authorize`,
//         method: 'get',
//         params: { mini_app_id, mini_app_token }
//     });
// }

// // 邀请关系
// export function change_invite({ ref_code }) {
//     return request({
//         url: `/members/change_invite`,
//         method: 'post',
//         signature: true,
//         data: { ref_code }
//     });
// }