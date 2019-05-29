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
      component: Home
    },
    {
      path: '/page1',
      beforeEnter(to, from, next) {
          
					console.log(baseurl)

						var str = window.location.href;
						var arr = str.split("/");
						if(baseurl){
						     window.location = arr[0]+'/'+baseurl+'/'+"page1.html#/home";
						}else{
							   window.location = arr[0]+'/'+"page1.html#/home";
						}
					
			
				
      }
    },
    {
      path: '/page2',
      beforeEnter(to, from, next) {
				
				 var str = window.location.href;
				 var arr = str.split("/");
				 if(baseurl){
							window.location = arr[0]+'/'+baseurl+'/'+"page1.html#/home";
				 }else{
						 window.location = arr[0]+'/'+"page1.html#/home";
				 }
				
				
      }
    },
  ]
})
