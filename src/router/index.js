import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	redirect:'/login'
    },{
    	path:'/login',
    	component:resolve => require(['../components/pages/login/login.vue'], resolve)
    },{
    	path:'/index',
    	component:resolve => require(['../components/pages/index/index.vue'],resolve),
        children:[{
            path:'/index/company:id',
            component:resolve => require(['../components/pages/company/company.vue'],resolve)
        },{
            path:'/index/address:id/',
            component:resolve=>require(['../components/pages/address/address.vue'],resolve)
        },{
            path:'/index/beamField:id/',
            component:resolve=>require(['../components/pages/BeamField/BeamField.vue'],resolve)
        },{
            path:'/index/BFAdress:id',
            component:resolve=>require(['../components/pages/BFAdress/BFAdress.vue'],resolve)
        },{
            path:'/index/Schart',
            component:resolve=>require(['../components/pages/schart/schart.vue'],resolve)
        },{
            path:'/index/Report',
            component:resolve=>require(['../components/pages/report/report.vue'],resolve)
        },{
            path:'/index/ReportSchart',
            component:resolve=>require(['../components/pages/reportSchart/reportSchart.vue'],resolve)
        }]
    }
  ]
})
