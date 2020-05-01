import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'mpAppStyle',
    component:() => import('../views/mpAppStyle.vue'),
  	meta: {
  		title: "页面模板装修"
  	}
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    
	if (savedPosition) {
	    return savedPosition
	} else {
	    return { x: 0, y: 0 }
	}
  }
})

//全局

router.beforeEach((to, from, next) => {
  // 必须调用 `next` 根据元数据,判断需要登录的页面;
  next()
})
/*
router.beforeResolve((to, from, next) => {
  // 必须调用 `next`
})

router.afterEach((to, from) => {})
*/

export default router
