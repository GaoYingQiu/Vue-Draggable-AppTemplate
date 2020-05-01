<template>
 <div class="navMenuView">
    <div class="ymmp_hd" v-bind:style="{background:configOptions.headBgColor ||''}">
       <label class="navTitleLabel" v-bind:style="{color:configOptions.headTitleColor || ''}">{{configOptions.headerTitle || mpHeaderTitle}}</label>
    </div>
    <div style="padding:10px" v-bind:style="{background:configOptions.containerBgColor ||''}">

    <div class="cardContainerItemView" v-bind:style="{background:configOptions.cardBgColor ||''}"  v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index">
        <div><img class="pictureCover" :src="item.cover"/></div>
        <div class="labelItem">{{item.title||item.name}}</div>
    </div>
    </div>
 </div>
</template>

<script>

  export default {
    name: "YMmpArticleItem",
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

 .cardContainerItemView {
    /* margin: 0.625rem; */
    /* margin-top: 0; */
    background-color: white;
    padding: 0.625rem;
    box-sizing: border-box;
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .articleItemView{
    padding: 0.625rem;
    box-sizing: border-box;
    border-bottom: 0.25px solid #eeeeee;
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

  .pictureCover{
    height: 8rem;
    width: 100%;
    background-color: #E8E8E8;
  }

  .labelItem{
    margin-top: 0.4375rem;
    width: 100%;
    height: 1.25rem;
    line-height: 1.25rem;
  }
</style>
