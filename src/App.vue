<template>
  <div id="app">
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/developing">Developing</router-link>
    </div> -->

		<transition :name="transitionName"> 
		<keep-alive > 
			<router-view v-if="$route.meta.keepAlive" />
		</keep-alive>
		</transition>
		
		<transition :name="transitionName"> 
			<router-view v-if="!$route.meta.keepAlive"/>
		</transition>
		
		
  </div>
</template>

<style>
	.fade-right-leave-active,
	  .fade-right-enter-active,
	  .fade-left-leave-active,
	  .fade-left-enter-active {
	    transition: all 0.4s ease;
	    position: absolute;
	    left: 0;
	    top: 0;
	  }
	
	  .fade-right-enter {
	    transform: translate3d(-50%, 0, 0);
	    opacity: 0;
	  }
	
	  .fade-right-leave-to {
	    transform: translate3d(50%, 0, 0);
	    opacity: 0;
	  }
	
	  .fade-left-enter {
	    transform: translate3d(50%, 0, 0);
	    opacity: 0;
	  }
	
	  .fade-left-leave-to {
	    transform: translate3d(-50%, 0, 0);
	    opacity: 0;
	  }
</style>

<script>
	export default {
	  name: 'app',
	  data(){
			return{
				transitionName: '',
				//transitionName 如果是同级的，过渡效果也可以根据别名路径的长度。
			}
	  },
	  watch: {
	    '$route' (to, from) {
			/*
				const list = ['home', 'group', 'user']    // 将需要切换效果的路由名称组成一个数组
			    const toName = to.name    // 即将进入的路由名字
			    const fromName = from.name    // 即将离开的路由名字
			    const toIndex = list.indexOf(toName)    // 进入下标
			    const fromIndex = list.indexOf(fromName)   // 离开下标
			    let direction = ''
			
			    if (toIndex > -1 && fromIndex > -1) {   // 如果下标都存在
			      if (toIndex < fromIndex) {          // 如果进入的下标小于离开的下标，那么是左滑
			        direction = 'left'
			      } else {
			        direction = 'right'         // 如果进入的下标大于离开的下标，那么是右滑
			      }
			    }
			*/
			
				
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			this.transitionName = toDepth < fromDepth ? 'fade-right' : 'fade-left'
		 }
	  }
	}
</script>
