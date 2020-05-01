<template>
 <Row class="navMenuView" v-bind:style="{background:configOptions.containerBgColor ||''}">
    
    <div v-if="configOptions.data && configOptions.data.length>0 && configOptions.autoLoadData == 0">
        <Col span="6"  v-for="(item,index) in configOptions.data" v-bind:key="'menuItem'+index" >
          <div class="menuItem">
            <img class="coverMenuImg" :src="item.icon"/>
            <label class="labelItem" v-bind:style="{color:configOptions.titleColor ||''}">{{item.title}}</label>
          </div>
        </Col>
    </div>
    <div v-else>
        <Col span="6" v-for="(item,index) in mpItemData" v-bind:key="'menuItem'+index" >
          <div class="menuItem">
            <img class="coverMenuImg" :src="item.cover"/>
            <label class="labelItem" v-bind:style="{color:configOptions.titleColor ||''}">{{item.catName}}</label>
          </div>
        </Col>
    </div>
 </Row>
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
  .menuItem{
    color: black;
    font-size: 0.9375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0.625rem;
  }

  .coverMenuImg{
    height: 3.125rem;
    width: 3.125rem;
    border-radius: 1.5625rem;
    background: #E8E8E8;
  }

  .labelItem{
    font-size: 0.8125rem;
    text-align: center;
    margin-top: 0.625rem;
    height:0.9375rem;
    line-height: 0.9375rem;
  }
</style>
