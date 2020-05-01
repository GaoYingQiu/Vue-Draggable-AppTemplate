<template>

<div class="navMenuView" v-bind:style="{background:configOptions.containerBgColor ||''}">
    <!-- <div class="ymmp_hd">
       <label class="navTitleLabel">魔方</label>
    </div> -->

  <div v-if="configOptions.data && configOptions.data.length>0 && configOptions.autoLoadData == 0">

    <Row v-if="rowType == 1||rowType == 2||rowType == 3">
       <Col :span="24/rowType"  v-for="(item,index) in configOptions.data" v-bind:key="'menuItem'+index" >
         <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
           <img :src="item.icon">
         </div>
       </Col>
    </Row>

    <!-- 1左2右 -->
    <div v-if="rowType == 12">
      <Row >
         <Col span="10">
           <div class="menuItem leftMenuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box1</label> -->
             <img v-if="configOptions.data.length > 0"  :src="configOptions.data[0].icon">
           </div>
         </Col>
         <Col span="14">
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box2</label> -->
             <img v-if="configOptions.data.length > 1"  :src="configOptions.data[1].icon">
           </div>
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box3</label> -->
             <img v-if="configOptions.data.length > 2"  :src="configOptions.data[2].icon">
           </div>
         </Col>
      </Row>
    </div>


    <div v-if="rowType == 22">
      <Row>
         <Col span="24">
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box1</label> -->
              <img v-if="configOptions.data.length > 1" :src="configOptions.data[0].icon">
           </div>
         </Col>
      </Row>
      <Row >
         <Col span="12">
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box2</label> -->
             <img  v-if="configOptions.data.length > 1"  :src="configOptions.data[1].icon">
           </div>
          </Col>
          <Col span="12">
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box3</label> -->
             <img v-if="configOptions.data.length > 2"  :src="configOptions.data[2].icon">
           </div>
         </Col>
      </Row>
    </div>

  </div>

  <div v-else>

    <Row v-if="rowType == 1||rowType == 2||rowType == 3">
       <Col :span="24/rowType"  v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index" >
         <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
           <!-- <label class="labelItem">{{item.title}}</label> -->
           <img :src="item.cover">
         </div>
       </Col>
    </Row>

    <!-- 1左2右 -->
    <div v-if="rowType == 12">
      <Row >
         <Col span="10">
           <div class="menuItem leftMenuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box1</label> -->
             <img :src="mpItemData[0].cover">
           </div>
         </Col>
         <Col span="14">
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box2</label> -->
             <img :src="mpItemData[1].cover">
           </div>
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box3</label> -->
             <img :src="mpItemData[2].cover">
           </div>
         </Col>
      </Row>
    </div>

    <!-- 1上2下 -->
    <div v-if="rowType == 22">
      <Row>
         <Col span="24">
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box1</label> -->
              <img :src="mpItemData[0].cover">
           </div>
         </Col>
      </Row>
      <Row >
         <Col span="12">
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box2</label> -->
             <img :src="mpItemData[1].cover">
           </div>
          </Col>
          <Col span="12">
           <div class="menuItem" v-bind:style="{background:configOptions.cardBgColor ||''}">
             <!-- <label class="labelItem">box3</label> -->
             <img :src="mpItemData[2].cover">
           </div>
         </Col>
      </Row>
    </div>
   </div>
</div>
</template>

<script>

  export default {
    name: "YMmpNavMenu",
    props: {
      mpItemData: {
        type: Array,
        default: () => []
      },
      configOptions: {
        type: Object,
        default: () => ({})
      }
    },
    watch:{
      configOptions:{
         handler(newValue,oldValue){
            this.processRowTypeReload(newValue);
         }
      }
    },
    data() {
      return {
        rowType:12,
        menuDataSource:['box1','box2','box3','box4']
      }
    },
    mounted: function () {
    },
    created:function(){
        this.processRowTypeReload(this.configOptions);
    },
    components: {

    },
    methods: {
      processRowTypeReload: function (e) {
        switch(e.style){
            case 7001:
            case 7003:
                this.rowType = 2; //一行2个 和 两行4个相同；
                break;
            case 7002:
                this.rowType = 3; //一行3个
                break;
            case 7004:
                this.rowType = 12; //左1右2
                break;
            case 7005:
                this.rowType = 22; //上1下2
                break;
            case 7006:
                this.rowType = 1; //一行1个
                break;
            default:
               this.rowType = 12; //默认
               break;
          }
      },
    },
  }

</script>

<style scoped>
  .navMenuView{
    width: 100%;
    /* background: #E8E8E8; */
    padding: 0;
    padding-top: 0.625rem;
    padding-right: 0.625rem;
    box-sizing: border-box;
  }
  .menuItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.625rem;
    margin-left: 0.625rem;
    height: 3.125rem;
    overflow: hidden;
    border-radius: 0.25rem;
  }
  
  .menuItem img{
    width: 100%;
  }


  .ymmp_hd{
    height: 40px;
    background: #E8E8E8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navTitleLabel{
    font-size: 1rem;
    color: black;
  }


  .leftMenuItem{

    height: 6.875rem;  /*110px*/
  }

  .labelItem{
    font-size: 0.8125rem;
    width: 2.5rem;
    text-align: center;
    height:0.9375rem;
    line-height: 0.9375rem;
  }
</style>
