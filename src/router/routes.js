import Home from '../components/Home'

function loadView(view) {
    return () =>
        import (`../components/${view}.vue`);
}

// array
const routes = [{
        path: '/',
        component: Home,
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        children: [{
            path: 'Child',
            component: loadView('Child'),
        }]
    },
    {
        path: '/Tab',
        name: 'Tab',
        components: {
            default: loadView('Tab'),
            Footer: loadView('Footer'),
        },
    },
    {
        path: '/LifeCycle',
        name: 'LifeCycle',
        component: loadView('LifeCycle'),
    },
    {
        path: '/ListItem',
        name: 'ListItem',
        component: loadView('ListItem'),
    },
    {
        path: '/Control',
        name: 'Control',
        component: loadView('Control'),
    },
    {
        path: '/Transition',
        name: 'Transition',
        component: loadView('Transition'),
    },
    {
        path: '/Animate',
        name: 'Animate',
        component: loadView('Animate'),
    },
    {
        path: '/Directive',
        name: 'Directive',
        component: loadView('Directive'),
    },
    {
        path: '/Mixin',
        name: 'Mixin',
        component: loadView('Mixin'),
    },
]

//object
// const routes = {
//     '/': Home,
//     '/todo': Todo
// }

export default routes

// 참고 사이트 
// https://appdividend.com/2018/12/28/vue-router-tutorial-with-example-how-to-use-routing-in-vuejs/