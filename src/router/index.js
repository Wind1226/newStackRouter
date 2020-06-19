const PageA = () => import('@/views/pageA');

/**
 * warning: 禁用children嵌套路由, 不生效
 */
export default [
    {
        path: '/',
        redirect: '/page_1',
    }, {
        path: '/page_a',
        component: PageA,
        name: 'PageA'
    }
];
