<template>
<div class="navMenuView">
    <div class="ymmp_hd" v-bind:style="{background:configOptions.headBgColor ||''}">
       <label class="navTitleLabel" v-bind:style="{color:configOptions.headTitleColor || ''}" >{{configOptions.headerTitle || mpHeaderTitle}}</label>
    </div>
    <div style="padding:10px" v-bind:style="{background:configOptions.containerBgColor ||''}">

    <div class="containerItemView" v-bind:style="{background:configOptions.cardBgColor ||''}" v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index">
        <div class="pictureCoverContainer">
          <img style="width: 100%;height: 100%;" :src="item.cover"/>
          <img class="videoPlayIcon"  src="../../assets/image/mp_video_play.png"/>
        </div>
        <div class="labelItem">{{item.title}}</div>
    </div>
    </div>
 </div>
</template>

<script>

  export default {
    name: "YMmpVideoItem",
    props: {
      mpItemData: {
        type: Array,
        default: () => []
      },
      mpHeaderTitle:{
        type:String,
        default:''
      },
      configOptions: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
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

<style scoped>
  .navMenuView{
    width: 100%;
  }

 .containerItemView {
    /* margin: 0.625rem; */
    box-sizing: border-box;
    background: white;
    /* margin-top: 0; */
    border-radius: 0.25rem;
    overflow: hidden;
    height: auto;
    padding-bottom: 0.4375rem;
  }

  .ymmp_hd{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navTitleLabel{
    font-size: 1rem;
    color: black;
  }

  .pictureCoverContainer{
    height: 8rem;
    width: 100%;
    background-color: #36648B;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .videoPlayIcon{
     position: absolute;
     z-index: 100;
     width: 3rem;
     height: 3rem;
  }


  .labelItem{
    margin-left: 0.625rem;
    margin-top: 0.4375rem;
    margin-right: 0.625rem;
    font-size: 0.875rem;
    width: 100%;
  }
</style>
