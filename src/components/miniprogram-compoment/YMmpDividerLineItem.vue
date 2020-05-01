<template>
 <div class="navMenuView" v-bind:style="{background:configOptions.containerBgColor ||''}">
    <img v-if="configOptions.cardImage && configOptions.cardImage.length > 0" style="width: 100%;height:auto;" :src="configOptions.cardImage"  />
    <div v-else class="containerText" v-bind:style="{color:configOptions.cardTextColor ||''}">{{configOptions.cardText}}</div>
 </div>
</template>

<script>

  export default {
    name: "YMmpDividerLineItem",
    props: {
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
    padding: 0;
  }

  .containerText{
    width: 100%;
    height: 2.5rem;
    color:black;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
