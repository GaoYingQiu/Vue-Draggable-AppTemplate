<template>
  <div class="drag-list-wrapper">

    <div class="drag-list-con1">
      <slot name="left-title"></slot>
      <Row :gutter="20">
          <draggable class="drop-box1" :class="dropConClass.left" :options="options1" :value="list1"   @input="handleListChange($event, 'left')" @end="handleEnd($event, 'left')" >
              <!-- 一行一个 -->
              <i-col :xs="24"  v-for="(itemLeft, index) in list1" :key="`drag_li1_${index}`">
                <slot name="left" :itemLeft="itemLeft">{{ itemLeft }}</slot>
              </i-col>
          </draggable>
       </Row>
    </div>

    <div class="drag-list-con2">
        <slot name="right-title"></slot>
        <draggable class="drop-box2" :class="dropConClass.right"   :style="{background: mpContainerBgColor || ''}"  :options="options" :value="list2" @input="handleListChange($event, 'right')" @end="handleEnd($event, 'right')" >
          <div class="drag-list-item" v-for="(itemRight, index) in list2" :key="`drag_li2_${index}`">
              <slot name="right" :itemRight="itemRight">{{ itemRight }}</slot>
          </div>
        </draggable>

        <div class="control-group" style="justify-content: center;align-items: center;" label="小程序页面背景色">
          <div class="control-group-header">
            <span>小程序页面背景色</span>
          </div>
          <div class="control-group-content" style="flex: 0;">
            <ColorPicker v-model="containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>

    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'DragList',
  components: {
    draggable
  },
  props: {
    list1: {
      type: Array,
      required: true
    },
    list2: {
      type: Array,
      default: () => []
    },
    dropConClass: {
      type: Object,
      default: () => ({})
    },

    mpContainerBgColor:{  //小程序背景色
       type: String,
       default:'#666666'
    },
  },
  data () {
    return {

      options1: {group:{name: 'drag_list',pull:'clone',put:false},sort:false}, //clone表示赋值，左侧无需删除节点。
      options: { group: 'drag_list' },
      containerBgColor:'#ffffff'
    }
  },
  created:function(){
    this.containerBgColor = this.mpContainerBgColor; //首次给颜色器填充颜色

  },
  watch:{
    containerBgColor:function(newValue,oldValue){
      // console.log('颜色发生改变,需要传递到父容器');
      this.$emit('on-mpContainerBgColor-change',newValue);
    }
  },
  methods: {
    handleListChange (value, type) {

      if (type === 'left'){
        this.$emit('update:list1', value)
      }
      else
        this.$emit('update:list2', value)
    },
	 initial: function(e) {
		 console.log("什么鬼啊");
	 },

    reloadMpContainerBgColor:function(bgColor){
       this.containerBgColor = bgColor;
    },

    handleEnd (event, type) {

      const srcClassName = (event.srcElement || event.target).classList[0]
      const targetClassName = event.to.classList[0]
      let src = ''
      let target = ''
      if (srcClassName === targetClassName) {
        if (type === 'left') {
          src = 'left'
          target = 'left'
        } else {
          src = 'right'
          target = 'right'
        }
      } else {
        if (type === 'left') {
          src = 'left'
          target = 'right'
        } else {
          src = 'right'
          target = 'left'
        }
      }

      // console.log({
      //   src: src,
      //   target: target,
      //   oldIndex: event.oldIndex,
      //   newIndex: event.newIndex
      // });

      if(src == 'left' && target == 'right'){
         // console.log("从左边组件拖入到小程序盒子");

         //默认从左侧组件取对应的模板数据的。
         let targetCompomentItem = this.list1[event.oldIndex];

         //优先从已有list2中找出是否已有同类型组件，有则拷贝一份。把config属性重复利用。
         // let findMPLayoutObjItemIndex = this.list2.findIndex(mpItem => mpItem.type === targetCompomentItem.type);
         // if (findMPLayoutObjItemIndex != -1){
         //    targetCompomentItem = this.list2[findMPLayoutObjItemIndex];
         // }

         //拷贝一份
         let newRightDic = {};
         Object.keys(targetCompomentItem).forEach(function(key){
            newRightDic[key] = targetCompomentItem[key]; //config的data是引用类型。得注意clone;
         });

         //覆盖谓一值id,区分每个小程序部件的独立性。
         newRightDic['mpItemId'] = 'mpItem_'+ new Date().getTime();

         //重新设置新的拖入位置的对象。
         this.list2[event.newIndex] = newRightDic;
         this.$emit('on-mpContainerItemAdd',this.list2[event.newIndex]);
      }
    },

  }
}
</script>
<style>

.drag-list-wrapper{
  height: 100%;
  display: flex;
  }
  .drag-list-con1{
    width: 200px;
  }
  .drag-list-con2{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }


   .control-group {

      width: 100%;
      display: flex;
      padding: 10px 0;
      justify-content: center;
      align-items: center;
	}

      .control-group-header{
        font-size: 0.9375rem;
      }
      .control-group-content {

        display: -ms-flexbox;
        display: flex;
        margin-left: 1.875rem;
        justify-content: center;
        align-items: center;
	 
      }
    
</style>
