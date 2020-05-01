<template>

 <div class="navMenuView"  >
    <div class="ymmp_hd" v-bind:style="{background:configOptions.headBgColor ||''}">
       <label class="navTitleLabel" v-bind:style="{color:configOptions.headTitleColor || ''}" >{{configOptions.headerTitle || mpHeaderTitle}}</label> <!-- 新创建的头文字为默认typeText -->
    </div>
    <div style="padding:10px;padding-top: 0;" v-bind:style="{background:configOptions.containerBgColor ||''}">

    <!--  瀑布 -->

       <div  v-if="rowType == 2" style="display: flex; flex-direction: row; flex-wrap: wrap;align-items:flex-start;align-content:center;justify-content: space-between;">
         <div class="menuItem" v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index"   style="padding: 0;padding-bottom: 0.625rem;width:48%;"  v-bind:style="{background:configOptions.cardBgColor ||''}">
           <div><img class="row2CoverPicture" :src="item.cover"/></div>
           <div class="descContainer">
              <label class="labelItem" v-bind:style="{color:configOptions.titleColor || ''}" >{{item.name}}</label>
              <label class="originMonetyLabel" >原价：{{item.originPrice}}</label>
              <label class="priceMoneyLabel" v-bind:style="{color:configOptions.priceColor || ''}"><span style="font-size: 0.9rem;">￥</span>{{item.price}}</label>
              <span class="buyButton" v-bind:style="{background:configOptions.purchaseButtonBgColor || '',color:configOptions.purchaseButtonTitleColor || ''}">购买</span>
           </div>

         </div>
       </div>


    <!-- 卡片 ，默认大图样式 -->
    <Row v-else>
       <Col :span="24"  v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index" >
         <div :class="rowType == 0? 'menuItem menuItemNoPadding':'menuItem'" v-bind:style="{'flex-direction':rowType==0?'column':'row',background:configOptions.cardBgColor ||''}"  >
           <div><img :class="rowType==0?'bigCoverPicture':'coverPicture'" :src="item.cover"/></div>
           <div class="descContainer" >
              <label class="labelItem" v-bind:style="{color:configOptions.titleColor || ''}" >{{item.name}}</label>
              <label class="originMonetyLabel" >原价：{{item.originPrice}}</label>
              <label class="priceMoneyLabel" v-bind:style="{color:configOptions.priceColor || ''}" ><span style="font-size: 0.9rem;">￥</span>{{item.price}}</label>
              <span class="buyButton" v-bind:style="{background:configOptions.purchaseButtonBgColor || '',color:configOptions.purchaseButtonTitleColor || ''}">购买</span>
           </div>
         </div>
       </Col>
    </Row>
</div>
</div>
</template>

<script>

  export default {
    name: "YMmpProductItem",
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
        rowType:1,
      }
    },
    watch:{
      configOptions:{
         handler(newValue,oldValue){
            this.processRowTypeReload(newValue);
         }
      }
    },
    mounted: function () {
    },
    created: function(){
        this.processRowTypeReload(this.configOptions);
    },
    components: {

    },
    methods: {
      processRowTypeReload: function (e) {
        switch(e.style){
            case 2001:
                this.rowType = 0; //大图
                break;
            case 2002:
                this.rowType = 1; //横排
                break;
            case 2003:
                this.rowType = 2; //瀑布
                break;
            default:
               this.rowType = 1; //默认
               break;
          }
      },
    },
  }

</script>

<style scoped>
  .navMenuView{
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
  .menuItem{
    display: flex;
    flex-direction: column;
    margin-top: 0.625rem;
    /* margin-top: 0; */
    border-radius: 0.25rem;
    overflow: hidden;
    padding: 0.625rem;
    box-sizing: border-box;
    background:white;
  }

  .menuItemNoPadding{
    padding:0;
    padding-bottom: 0.625rem;
  }

 .buyButton{
    position: absolute;
    z-index: 100;
    bottom: 0.625rem;
    right: 0.625rem;
  	background-color: #EA1A1A;
  	border-radius: 0.9375rem;
  	font-size: 0.75rem;
  	color: white;
  	width: 3.5rem;
  	line-height: 1.5rem;
  	height: 1.5rem;
  	display: block;
  	text-align: center;
    vertical-align: center;
  }

  .coverPicture{
    height:6rem;
    width: 6rem;
    background-color: #E8E8E8;
  }

  .row2CoverPicture{
    height:5rem;
    width: 100%;
  }

  .bigCoverPicture{
    height:10rem;
    width: 100%;
    background-color: #E8E8E8;
  }

  .descContainer{
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 0.625rem;
    position: relative;
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

  .originMonetyLabel{
     font-size: 0.8125rem;
     color: gray;
     margin-top: 0.4375rem;
     text-decoration:line-through;
   }
  .priceMoneyLabel{
      font-size: 1rem;
      color: #EE2C2C;
      margin-top: 0.3rem;
   }
  .labelItem{
    font-size: 0.9375rem;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
</style>
