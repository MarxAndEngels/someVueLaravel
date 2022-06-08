// import vueRouter from 'vue-router';
// import Vue from 'vue';

// Vue.use(vueRouter);

// import Index from './components/Index';
// import Blog from './components/Blog';
// import Blog2 from './components/Blog2';

// const routes = [
//     {
//         path: "/",
//         component: Index
//     },
//     {
//         path: "/blog",
//         component: Blog
//     },
//     {
//         path: "/blog2/:id",
//         component: Blog2
//     },
// ];

// export default new vueRouter({
//     mode:'history',
//     routes
// });

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes: [
    {
        path: "/people", 
        component: ()=>{return  import('./components/Person/Index')},
        name: 'person.index'
    },
    {
        path: "/people/create", 
        component: ()=>{return import('./components/Person/Create')},
        name: 'person.create'
    },
    {
        path: "/people/:id/edit", 
        component: ()=>{return import('./components/Person/Edit')},
        name: 'person.edit'
    },
    {
        path: "/people/:id", 
        component: ()=>{return import('./components/Person/Show')},
        name: 'person.show'
    },
    //slider
    {
        path: "/slider", 
        component: ()=>{return import('./components/Slider/Index')},
        name: 'slider.index'
    },
    //paginate
    {
        path: "/paginate", 
        component: ()=>{return import('./components/Paginate/Index')},
        name: 'paginate.index'
    },
    {
        path: "/paginate/some", 
        component: ()=>{return import('./components/Paginate/SomePaginate')},
        name: 'paginate.some'
    },
    //tabs
    {
        path: "/paginate/tabs", 
        component: ()=>{return import('./components/Paginate/Tabs')},
        name: 'paginate.tabs'
    },
    {
        path: "/task/index", 
        component: ()=>{return import('./components/Task/Index')},
        name: 'task.index'
    },
    {
        path: "/code/index", 
        component: ()=>{return import('./components/Code/Index')},
        name: 'code.index'
    },
    {
        path: "/video/index", 
        component: ()=>{return import('./components/Video/Index')},
        name: 'video.index'
    },
   ]
});


