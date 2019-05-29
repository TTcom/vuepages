import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { baseurl } from '../../common/js/cache'

Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/',
		  redirect:'/home'
		},
    {
      path: '/home',
      component:Home
    },
    {
      path: '/index',
      beforeEnter() {
				
					var str = window.location.href;
					var arr = str.split("/");
					if(baseurl){
							 window.location = arr[0]+'/'+baseurl+'/'+"index.html#/home";
					}else{
							 window.location = arr[0]+'/'+"index.html#/home";
					}
				
      }
    },
    {
      path: '/page1',
      beforeEnter() {
				
        var str = window.location.href;
        var arr = str.split("/");
        if(baseurl){
        		 window.location = arr[0]+'/'+baseurl+'/'+"page1.html#/home";
        }else{
        		 window.location = arr[0]+'/'+"page1.html#/home";
        }
				
      }
    }
  ]
})
