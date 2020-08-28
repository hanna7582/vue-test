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
      default: loadView('tab/Tab'),
      Footer: loadView('Footer'),
    },
  },
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: loadView('LifeCycle'),
  },
  {
    path: '/Animation',
    name: 'Animation',
    component: loadView('animation/Animation'),
  },
  {
    path: '/Mixin',
    name: 'Mixin',
    component: loadView('Mixin'),
  },
  {
    path: '/CompChange',
    name: 'CompChange',
    component: loadView('compChange/CompChange'),
  },
  {
    path: '/Swiper',
    name: 'Swiper',
    component: loadView('Swiper'),
  },
  {
    path: '/Event',
    name: 'Event',
    component: loadView('event/Event'),
  },
  {
    path: '/Form',
    name: 'Form',
    component: loadView('form/Form'),
  },
  {
    path: '/Data',
    name: 'Data',
    component: loadView('data/Data'),
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