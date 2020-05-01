<template>
 <div class="navMenuView">
    <div class="ymmp_hd" v-bind:style="{background:configOptions.headBgColor ||''}">
       <label class="navTitleLabel"  v-bind:style="{color:configOptions.headTitleColor || ''}">{{configOptions.headerTitle || mpHeaderTitle}}</label>
    </div>
    <div style="padding:10px" v-bind:style="{background:configOptions.containerBgColor ||''}">
    
    <div class="containerItemView" v-bind:style="{background:configOptions.cardBgColor ||''}" v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index">
          <Row>
             <Col span="24" style="display: flex;">
               <div><img class="storePicture" :src="item.cover"/></div>
               <div class="descContainer">
                  <label class="labelItem activityTitleLabel"  v-bind:style="{color:configOptions.titleColor || ''}">{{item.title}}</label>
                  <label class="labelItem">{{item.formatTime}}</label>
               </div>
             </Col>
          </Row>
      </div>
    </div>
 </div>
</template>

<script>

  export default {
    name: "YMmpActivityItem",
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
   /* margin: 0.625rem;
    margin-top: 0; */
    background-color: white;
    padding: 0.625rem;
    box-sizing: border-box;
    border-radius: 0.25rem;
    overflow: hidden;
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

  .storePicture{
    height: 5rem;
    width: 5rem;
    background-color: #E8E8E8;
  }

  .descContainer{
    margin-left:0.625rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .labelItem{
    width: 100%;
    height: 1.25rem;
    line-height: 1.25rem;
    margin-bottom: 0.625rem;
  }

  .activityTitleLabel{
    font-size: 0.9375rem;
  }
</style>
