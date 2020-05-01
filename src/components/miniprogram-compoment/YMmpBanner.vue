<template>
 <Carousel loop class="bannerClass" v-if="configOptions.autoLoadData && configOptions.autoLoadData == 1">
         <CarouselItem v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index">
             <div class="demo-carousel"><img :src="item.img" style="width: 100%;height:9.375rem;"/></div>
         </CarouselItem>
  </Carousel>

  <Carousel  loop  class="bannerClass" v-else>
          <CarouselItem v-for="(item,index) in configOptions.data" v-bind:key="'menuItem'+index">
              <div class="demo-carousel"><img :src="item.icon" style="width: 100%;height:9.375rem;"/></div>
          </CarouselItem>
   </Carousel>
</template>

<script>

  export default {
    name: "YMmpBanner",
    props: {
      configOptions: {
        type: Object,
        default: () => ({})
      },
      mpItemData: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        value1: 1,
      }
    },
    mounted: function () {
    },
    components: {

    },
    methods: {
      initial: function (datasource) {
      },
    },
  }

</script>

<style>
  .bannerClass{
    width: 100%;
    height: 9.375rem;
    overflow: hidden;
    background-color: #36648B;
  }
  .demo-carousel{
    color: white;
    font-size: 1.125rem;
    text-align: center;
  }
</style>
