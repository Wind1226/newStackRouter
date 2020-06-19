import Api from 'axios'
import Store from '@/store'
import Native from '@/libs/native'

import ApiCodeDictionary from './apiCodeDictionary'

Api.defaults.timeout = 1000 * 60;                          // 请求过期时间

// request拦截
Api.interceptors.request.use(
    config => {
        // 设置token
        config.headers['Authorization'] = Store.getters.info.token ||
            'eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJZCI6IkNBIiwibWFpbkFjY291bnQiOiIxMDMiLCJuaWNrbmFtZSI6IueOi-mcuOS5i-e-veiho-absiIsImlkIjoiMTAzIiwiYWNjb3VudCI6IjEwMyIsIm1haW5BY2NvdW50SWQiOiIxMDMiLCJpYXQiOjE1OTI0NTAyNTUsImV4cCI6MTYyMjQ1MDI1NX0.haymyeqqGBjMMeaTpZX-kUDTjcuo5IRltK03cZUyGlQ';
        return config;
    }
);

// response拦截
Api.interceptors.response.use(
    config => {
        // 正常的, 科学的返回
        if (config.data.code) {
            // 如果存在code的话, 那么就从字典中寻找对应的信息报错返回
            return Promise.reject({
                type: 'api-error',
                message: ApiCodeDictionary[config.data.code] || config.data.message
            });
        }
        return config;
    },
    error => {
        // 如果没有response的话, 说明接口调用不成功
        if (!error.response) {
            return Promise.reject({
                type: 'network'
            });
        }
        // 登录过期/token失效
        if (error.response.status === 401) {
            Native.goLogin();
            return Promise.reject({
                type: 'not-login'
            });
        }
        // 除了401 2xx 状态码, 均报此错误
        return Promise.reject({
            type: 'network'
        });
    }
);

export default Api;