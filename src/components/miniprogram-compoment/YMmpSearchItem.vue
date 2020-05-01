<template>
 <div class="navMenuView" v-bind:style="{background:configOptions.containerBgColor ||''}">
     <Input type="text"  readonly size="large" clearable placeholder="搜索关键字"
             autocomplete="off"></Input>
 </div>
</template>

<script>

  export default {
    name: "YMmpSearchItem",
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
    padding: 0.625rem;
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
    margin-bottom: 0.625rem;
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
