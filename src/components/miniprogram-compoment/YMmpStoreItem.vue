<template>
 <div class="navMenuView" >
    <div class="ymmp_hd" v-bind:style="{background:configOptions.headBgColor ||''}">
       <label class="navTitleLabel" v-bind:style="{color:configOptions.headTitleColor || ''}" >{{configOptions.headerTitle || mpHeaderTitle}}</label> <!-- 新创建的头文字为默认typeText -->
    </div>
   <div style="padding:10px" v-bind:style="{background:configOptions.containerBgColor ||''}">
    <div class="cardContainerItemView" v-bind:style="{background:configOptions.cardBgColor ||''}"  v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index">
      <Row>
        <Col span="24" style="display: flex;">
         <div><img class="storePicture" :src="item.avatar"/></div>
         <div class="descContainer">
            <label class="labelItem">{{item.name}}</label>
            <label class="labelItem addressLabel">{{item.address}}</label>
         </div>
       </Col>
      </Row>
     </div>
    </div>
 </div>
</template>

<script>

  export default {
    name: "YMmpStoreItem",
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
    mounted: function (){
    },
    created:function(){

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
    display: flex;
    flex-direction: column;
    /* justify-content: ; */
    height:5rem;
  }

  .labelItem{
    width: 100%;
    color: rgb(51,51,51);
    font-size: 0.9375rem;
  }

  .addressLabel{
      margin-top: 0.625rem;
			font-size: 0.75rem;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
		  -webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
  }

</style>
