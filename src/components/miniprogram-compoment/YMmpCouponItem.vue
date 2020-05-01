<template>
  <div class="navMenuView" >
    <div class="ymmp_hd" v-bind:style="{background:configOptions.headBgColor ||''}">
      <label class="navTitleLabel" v-bind:style="{color:configOptions.headTitleColor || ''}">{{configOptions.headerTitle || mpHeaderTitle}}</label>
    </div>
    <div style="padding:10px;padding-top: 0;" v-bind:style="{background:configOptions.containerBgColor ||''}">

    <div class="containerItemView" v-bind:style="{background:configOptions.containerBgColor ||''}" v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index">
      <div class="couponCell" v-bind:style="{background:configOptions.cardBgColor ||''}">
           <div class="couponDesc">
             <div class="leftCouponDesc">
               <label class="couponTitleLabel" v-bind:style="{color:configOptions.titleColor || ''}" >{{item.name}}</label>
               <div class="moneyLabContainer">
                 <label class="couponMoneyLabel" v-bind:style="{color:configOptions.priceColor || ''}" >￥{{item.amount}}</label>
                 <label class="originMonetyLabel" v-bind:style="{color:configOptions.amountColor || ''}">{{item.usage}}</label>
               </div>
             </div>
             <div>
               <span class="couponStatu" v-bind:style="{background:configOptions.purchaseButtonBgColor || '',color:configOptions.purchaseButtonTitleColor || ''}">立即购买</span>
             </div>
           </div>
           <div class="couponFooter">
             <label class="expireTime" v-bind:style="{color:configOptions.timeColor || ''}">有效期至: {{item.expireTimeText}}</label>
           </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YMmpCouponItem",
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
    mounted: function() {},
    components: {

    },
    methods: {
      initial: function(datasource) {},
    },
  }
</script>

<style scoped>
  .navMenuView {
    width: 100%;
  }

  .containerItemView {
    padding: 0;
    padding-top: 0.625rem;
    box-sizing: border-box;
    /* margin-top: 0.625rem; */
    /* ; */
  }

  .ymmp_hd {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navTitleLabel {
    font-size: 1rem;
    color: black;
  }


  .couponCell{
    width: 100%;
  	height: 7.2rem;
  	/* background: url(../../../assets/couponBack.png) no-repeat; */
    background:white;
  	box-sizing: border-box;
    border-radius: 0.25rem;
  	padding: 0.9375rem  0.9375rem 0;
  	display: flex;
  	flex-direction: column;
  }
  .couponDesc{
  	display: flex;
    flex: 1;
  }

  .leftCouponDesc{
    display: flex;
  	flex-direction: column;
    flex: 1;
  }
  .weui-media-box__title{
  	font-size: 0.875rem;
  	color:rgb(51,51,51);
  }

  .expireCouponMoney{
  	color:#999999;
  }

  .couponTitleLabel{
    font-size: 0.9375rem;
    color: black;
  }
  .couponMoneyLabel{
    font-size: 1.5rem;
    /* font-weight: bold; */
    color: #EE2C2C;
  }

  .originMonetyLabel{
    font-size: 0.9375rem;
    margin-left: 1.875rem;
  }

  .couponStatu{
  	margin-top: 0.625rem;
  	background-color: #8B0000;
  	border-radius: 0.9375rem;
  	font-size: 0.8125rem;
  	color: white;
  	width: 4.5rem;
  	line-height: 1.875rem;
  	height: 1.875rem;
  	display: block;
  	text-align: center;
  }

  .moneyLabContainer{
    display: flex;
    align-items: center;
  }

  .expireTime{
  	font-size: 0.75rem;
  	color: #999999;
  }

  .couponFooter{
  	 height: 1.96875rem;
  	 text-align: right;
  	 align-items: center;
  	 display: flex;
  	 justify-content: flex-end;
  	 border-top: 0.03125rem dotted rgb(151, 151, 151);
  }

  .labelItem {
    margin-top: 0.625rem;
    width: 100%;
    height: 1.25rem;
    line-height: 1.25rem;
    background-color: #E8E8E8;
  }
</style>
