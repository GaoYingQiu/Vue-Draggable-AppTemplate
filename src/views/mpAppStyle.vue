<template>
  <div class="room-group common-page-style">

    <h2 class="inner-page-title">
      <a class="back" href="javascript:;" @click="routerPop">
        <Icon type="ios-arrow-back" />
        <span>返回</span>
      </a>
     
    </h2>
    <div style="display: flex;align-items: flex-end;margin-bottom: 0.9375rem;">
      <div style="flex: 1;">
      </div>
      <div class="bar-right" style="margin-right: 1.875rem;">
       
        <Button type="success" size="large" @click="mpItemUpdateBatch" style="margin-left: 10px;">
          <span>保存</span>
        </Button>

        <Button size="large" @click="previewHandle" style="margin-left: 10px;">
          <span>真机预览</span>
        </Button>

        <Button size="large" @click="publishAction" style="margin-left: 10px;">
          <span>发布到小程序</span>
        </Button>
      </div>
    </div>

    <!--预览小程序-->
    <!-- <PreviewDecorate ref="PreviewDecorate"></PreviewDecorate> -->

    <!-- 小程序实时预览编辑效果 -->
    <div class="miniProgramApp">
      <div class="drag-box-card">
        <DragList ref="DragList"  :list1.sync="list1" :list2.sync="list2" @on-mpContainerItemAdd="chooseSelectedMPItemLayout"
            :mpContainerBgColor="mpContainerBgColor" @on-mpContainerBgColor-change="refreshMpContainerBgColor"
          :dropConClass="dropConClass" >
          <h3 slot="left-title">组件类型</h3>
          <Card class="drag-item mpComponmentItem"  slot="left" slot-scope="left">{{ left.itemLeft.typeText }}</Card>
          <h3 slot="right-title">{{list2.length == 0?'请拖动左边组件到此区域':'小程序效果'}}</h3>
          <div shadow class="drag-right-item" slot="right" slot-scope="right" v-bind:class="selectedMPItemId==right.itemRight.mpItemId?'MPItemLayoutSelectedShowBorder':'MPItemLayoutNormalShowBorder'"
            @click="chooseSelectedMPItemLayout(right.itemRight)">

            <div class="closeItemView" @click="delMpItemLayoutCompoment(right.itemRight)" v-bind:style="{display:selectedMPItemId==right.itemRight.mpItemId?'':'none'}"><img
                src="../assets/image/mp_close.png"></div>
            <YMmpBanner v-if="right.itemRight.type == '601'" :mpItemData="right.itemRight.mpItemData" :configOptions="right.itemRight.config" />
            <YMmpStoreItem v-else-if="right.itemRight.type == '602'" :mpHeaderTitle="right.itemRight.typeText"
              :mpItemData="right.itemRight.mpItemData" :configOptions="right.itemRight.config" />
            <YMmpNavMenu v-else-if="right.itemRight.type == '603'" :mpItemData="right.itemRight.mpItemData"
              :configOptions="right.itemRight.config" />
            <YMmpVideoItem v-else-if="right.itemRight.type == '501'" :mpHeaderTitle="right.itemRight.typeText"
              :mpItemData="right.itemRight.mpItemData" :configOptions="right.itemRight.config" />
            <YMmpArticleItem v-else-if="right.itemRight.type == '502'|| right.itemRight.type == '503' || right.itemRight.type == '504' "
              :mpHeaderTitle="right.itemRight.typeText" :mpItemData="right.itemRight.mpItemData" :configOptions="right.itemRight.config" />
            <YMmpCouponItem v-else-if="right.itemRight.type == '301'" :mpHeaderTitle="right.itemRight.typeText"
              :mpItemData="right.itemRight.mpItemData" :configOptions="right.itemRight.config" />
            <YMmpActivityItem v-else-if="right.itemRight.type == '302'" :mpHeaderTitle="right.itemRight.typeText"
              :mpItemData="right.itemRight.mpItemData" :configOptions="right.itemRight.config" />
            <YMmpBeautifulBox v-else-if="right.itemRight.type == '701'" :mpItemData="right.itemRight.mpItemData"
              :configOptions="right.itemRight.config" />
            <YMmpDividerLineItem v-else-if="right.itemRight.type == '702'" :configOptions="right.itemRight.config" />
            <YMmpSearchItem v-else-if="right.itemRight.type == '703'" :configOptions="right.itemRight.config" />
            <YMmpProductItem v-else-if="right.itemRight.type == '201'" :mpHeaderTitle="right.itemRight.typeText"
              :mpItemData="right.itemRight.mpItemData" :configOptions="right.itemRight.config" />
            <div class="mpOtherCommponent" v-else>
              {{ right.itemRight.typeText }}
            </div>

          </div>
        </DragList>
      </div>
      <div class="handle-log-box">
        <h3 class="left-title">编辑属性</h3>
        <div class="handle-inner-box">
          <EditConfigOptions ref="EditConfigOptions" @on-options-change="refreshMiniProgramLayout"></EditConfigOptions>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
 
 //页面装修模板有以下接口：
 /*
  queryDecorateGroup, //查询容器列表；
  publishDecorate, //发布
  queryDecorateGroupDataType, //后增加，左侧组件类型。
  queryMpItemSampleDataList, //模板列表
  mpItemUpdateBatch //批量更新
  */
 
  // import PreviewDecorate from 'components/operationtool/decorate-group/PreviewDecorate';

  //图形化操作
  import DragList from '@/components/drag-list/DragList'
  import EditConfigOptions from '@/components/EditConfigOptions';
  import YMmpBanner from '@/components/miniprogram-compoment/YMmpBanner'
  import YMmpNavMenu from '@/components/miniprogram-compoment/YMmpNavMenu'
  import YMmpStoreItem from '@/components/miniprogram-compoment/YMmpStoreItem'
  import YMmpArticleItem from '@/components/miniprogram-compoment/YMmpArticleItem'
  import YMmpCouponItem from '@/components/miniprogram-compoment/YMmpCouponItem'
  import YMmpActivityItem from '@/components/miniprogram-compoment/YMmpActivityItem'
  import YMmpVideoItem from '@/components/miniprogram-compoment/YMmpVideoItem'
  import YMmpBeautifulBox from '@/components/miniprogram-compoment/YMmpBeautifulBox'
  import YMmpProductItem from '@/components/miniprogram-compoment/YMmpProductItem'
  import YMmpSearchItem from '@/components/miniprogram-compoment/YMmpSearchItem'
  import YMmpDividerLineItem from '@/components/miniprogram-compoment/YMmpDividerLineItem'


  export default {
    name: "mpAppStyle",
    components: {
      // PreviewDecorate,

      DragList,
      EditConfigOptions,
      YMmpBanner,
      YMmpNavMenu,
      YMmpStoreItem,
      YMmpArticleItem,
      YMmpCouponItem,
      YMmpActivityItem,
      YMmpVideoItem,
      YMmpBeautifulBox,
      YMmpProductItem,
      YMmpSearchItem,
      YMmpDividerLineItem
    },
    data() {
      return {
        
        list1: [], //拖拽组件
        list2: [], //容器布局部件
        dropConClass: {
          left: ['drop-box', 'left-drop-box'],
          right: ['drop-box', 'right-drop-box']
        },
        pageTitle: '',
        selectedMPItemId: '', //当前在小程序预览界面选中的item布局
        backgroundMpLayoutItem: null, //背景色item
        mpContainerBgColor: '#8BC34A', //背景色
        mpSampleDataList: [], //样板元数据列表
        originItemConfigs:'', //编辑页面进入时候记录小程序的配置项
        pageId: null, //案例id
		config:{}, //演示
 
        //先请求样板数据，再请求list2数据；dragBox 加入属性：mpSampleDataList （样板数据），方便盒子在add组件的时候追加样板属性。
        //1、样板数据：先加载这个列表。在左侧组件拖入的时候，取出对应的元数据追加上去。每一项组件里的属性 统一字段为mpItemData代表样板数据；
        //2、模板二次编辑的时候，根据是否自动加载数据决定显示样板元数据还是自动加载的数据。list2请求完的时候，根据是否为自动加载数据开关控制是否追加 mpItemData 初始样板数据。
        //3、 自动加载数据勾选，mpItemData = nil,  取消勾选：mpItemData 赋值。（为了方便，统一在第2步 list2加载完成，给所有部件item 追加mpItemData。界面显示只是根据开关是否自动加载数据来取原数据还是样板数据。）
      }
    },
    created() {

      this.queryMPItemSampleData(); //先加载完组件样板，再加载list1，2列表；

    },
    mounted() {},

    watch: {
      //监听背景项被设置情况。触发背景样式。
      backgroundMpLayoutItem: {
        handler(newValue, oldValue) {
          if (newValue.config) {
            this.mpContainerBgColor = newValue.config.bgColor;
          }
        },
        deep: true //这样对象的属性发生改变也能够监听到。
      }
    },

    beforeRouteLeave: function (t, e, i) {
      let mpItemsConfigStr = this.getMpLyaoutItemsConfigStr();
      if(mpItemsConfigStr != this.originItemConfigs){

         let that = this;
         this.$Modal.confirm({
           title: '提示',
           width: 280,
           okText:'保存',
           content: '<p>模板已变动，是否需要保存？</p>',
           onOk: () => {
              that.mpItemUpdateBatch("exit");
           },
           onCancel: () => {
               //离开页面；
               i();
           }
         });
         return;
      }
      i();
    },

    methods: {

      refreshMpContainerBgColor: function(color) {
        //对象也要调用设置属性的方法才会触发监听；
        if(this.backgroundMpLayoutItem){
          this.$set(this.backgroundMpLayoutItem, "config", {
            bgColor: color
          });
        }
      },
      refreshMiniProgramLayout: function(mpItemId, options) {



        let findObjIndex = this.list2.findIndex(item => item.mpItemId === mpItemId);
        //list2找到该对象，则处理。找不到，可能删除了就不处理。
        if (findObjIndex != -1) {
          let mpItemLayoutObj = this.list2[findObjIndex];
          mpItemLayoutObj.config = options;
          this.$set(this.list2, findObjIndex, mpItemLayoutObj);
          //需要触发数组的set方法，文档节点才会更新。
        }

        if(this.originItemConfigs.length == 0){
          //记录页面加载进来的原有小程序样式字符串。
          this.originItemConfigs = this.getMpLyaoutItemsConfigStr();
        }

      },

      delMpItemLayoutCompoment: function(data) {

        let that = this;
        this.$Modal.confirm({
          title: '提示',
          width: 280,
          content: '<p>是否删除改组件</p>',
          onOk: () => {

            that.list2.splice(that.list2.findIndex(item => item.mpItemId === data.mpItemId), 1);
          },
          onCancel: () => {

          }
        });
      },

      //获取小程序页面布局所有的部件configs字符串
      getMpLyaoutItemsConfigStr(){
        let t = this;
        //循环所有，进行拼接。
        var configOptionsArr = new Array();

        //追加背景
        if(t.backgroundMpLayoutItem){
            if(t.backgroundMpLayoutItem.config){
              configOptionsArr.push({
                config: t.backgroundMpLayoutItem.config,
                title: '',
                type: t.backgroundMpLayoutItem.type
              });
            }else{
              configOptionsArr.push({
                config: {bgColor:t.mpContainerBgColor},
                title: '',
                type: t.backgroundMpLayoutItem.type
              });
            }
        }

        for (let i = 0; i < t.list2.length; i++) {
          let mpItemObj = t.list2[i];
          configOptionsArr.push({
            config: mpItemObj.config,
            title: '',
            type: mpItemObj.type
          });
        }
        return JSON.stringify(configOptionsArr);
      },

      mpItemUpdateBatch(cmdStr) {
        const t = this
        if (this.$store.commit("SET_LOADING", 1), this.pageId = this.$route.query.id, void 0 === this.pageId || isNaN(
            this.pageId)) {
          return t.$Modal.error({
            title: "错误提示",
            content: "地址栏参数错误，请重试",
            onOk: function() {
              t.$router.go(-1)
            }
          }), !1;
        }

        let itemConfigs = this.getMpLyaoutItemsConfigStr();
         console.log("保存的顺序");
         console.log(itemConfigs);
        const formData = Object.assign({}, config, {
          page_id: t.pageId,
          item_configs: itemConfigs,
          token: t.$store.state.token,
          user_id: localStorage.getItem("TOKEN_STATE")
        })
        t.$store.commit("SET_LOADING", 1)
		
		//模拟 
		t.$Message.success("操作成功");
		t.originItemConfigs = itemConfigs;
		if(cmdStr == "exit"){
			 t.$router.back();
	    }
		
		
		/*  提交到服务器
        mpItemUpdateBatch(formData).then((res) => {
          if (res.status == ERR_OK) {
            t.$Message.success("操作成功");
            t.originItemConfigs = itemConfigs;

            if(cmdStr == "exit"){
              t.$router.replace({
                name: 'settingPage'
              });
            }
          } else {
            t.$Message.error(res.errorMsg)
          }
        });
		*/
      },


      //选中小程序页面部件
      chooseSelectedMPItemLayout: function(e) {

        this.selectedMPItemId = e.mpItemId;
		let that = this;
		this.$nextTick(() => {
			that.$refs.EditConfigOptions.initial(e, 'modify');
		});

        //list1数据源追加唯一id
        //list2数据源如果是已存在的编辑项，追加唯一id.
        //属性详情为从列表选择项后，实时传递到右边属性框中。
      },

      //加载小程序组件样板数据
      queryMPItemSampleData() {
		 
	   this.mpSampleDataList = [{"type":10},
	   {"type":601,"data":[{"img":"https://cdn.linjiakankan.com/image/2d5133dd6fff184932394e96d4174415.jpeg"}]},
	   {"type":603,"data":[{"catName":"智能家居","cover":"https://cdn.linjiakankan.com/image/1dcc09b0fbd31a6f763b13841aff60fc.jpeg"},
	   {"catName":"居家必备","cover":"https://cdn.linjiakankan.com/image/739879fe44a8606e192487dc8b8907b2.jpeg"},
	   {"catName":"测试","cover":"https://cdn.linjiakankan.com/image/aa5545b0f6020bfa80d115802f447885.jpeg"}]},
	   {"type":701,"data":[{"name":"啊啊啊","cover":"https://cdn.linjiakankan.com/image/d2581504dcb2357b9f881f9172c25cea.png"},
	   {"name":"大宁","cover":"https://cdn.linjiakankan.com/image/b24578b90e235d7bedaa1a09663261d2.png"},
	   {"name":"AAA测试长标题测试长标题测试长标题","cover":"https://cdn.linjiakankan.com/image/49722b1ff3476a8302b40f7f91a04098.jpeg"},
	   {"name":"测试","cover":"https://cdn.linjiakankan.com/image/23801d603da9998796a46bc202e6c4fc.jpeg"}]},
	   {"type":702},{"type":703},{"type":101},
	   {"type":201,"data":[{"name":"啊啊啊","cover":"https://cdn.linjiakankan.com/image/d2581504dcb2357b9f881f9172c25cea.png","price":33,"originPrice":99,"payCountText":"已售x件"},
	   {"name":"大宁","cover":"https://cdn.linjiakankan.com/image/b24578b90e235d7bedaa1a09663261d2.png","price":222,"originPrice":333,"payCountText":"已售x件"},
	   {"name":"AAA测试长标题测试长标题测试长标题","cover":"https://cdn.linjiakankan.com/image/49722b1ff3476a8302b40f7f91a04098.jpeg","price":0.1,"originPrice":0.1,"payCountText":"已售x件"},
	   {"name":"测试","cover":"https://cdn.linjiakankan.com/image/23801d603da9998796a46bc202e6c4fc.jpeg","price":150,"originPrice":0,"payCountText":"已售x件"}]},
	   {"type":202},{"type":203},{"type":204},
	   {"type":602,"data":[{"name":"联盟总店","avatar":"https://cdn.linjiakankan.com/image/8f29b9e0065612fc5ab18b18ee837f6e.jpeg","address":"广东省广州市天河区车陂街道车陂美东街东宏装饰材料城"}]},
	   {"type":301,"data":[{"name":"测试代金券","usage":"抵100元","amount":100,"expireTimeText":"2021年2月28日"}]},
	   {"type":302,"data":[{"title":"测试","cover":"https://cdn.linjiakankan.com/image/60edb7e63043d67a82a93a4641017c4b.jpeg","formatTime":"11月7日 00:03 - 3月31日 02:05"}]},
	   {"type":401},{"type":501,"data":[{"title":"示例视频","cover":"https://cdn.linjiakankan.com/image/2899daebbdc55b3df89f2fc4eaaf6e98.jpg","lengthText":"03:00"}]},
	   {"type":502,"data":[{"catName":"","title":"第一个联盟的文章","cover":"https://cdn.linjiakankan.com/image/6b76a2236772583111ee9def2dd6acfa.jpeg"}]},
	   {"type":503,"data":[{"title":"csss","cover":"https://cdn.linjiakankan.com/image/f7f21334bf297d7a788673c521e6dabd.jpeg"}]},
	   {"type":504,"data":[{"name":"示例直播间","cover":"https://cdn.linjiakankan.com/image/2899daebbdc55b3df89f2fc4eaaf6e98.jpg"}]}];
       
	   this.queryDecorateGroup(); //加载已编辑过得部件列表；
       
       this.queryDecorateGroupDataType(); //加载左侧原始组件
	   /*
		if (this.pageId = this.$route.query.id, void 0 === this.pageId || isNaN(this.pageId)) {
          console.log("pageId没有");
        }
        const t = this;
        const formData = Object.assign({}, config, {
          page_id: t.pageId,
          token: t.$store.state.token,
          user_id: localStorage.getItem("TOKEN_STATE")
        })

        queryMpItemSampleDataList(formData).then((res) => {
          if (res.status == ERR_OK) {
            t.mpSampleDataList = res.data.items;
            console.log(JSON.stringify(t.mpSampleDataList));

            t.queryDecorateGroup(); //加载已编辑过得部件列表；

            t.queryDecorateGroupDataType(); //加载左侧原始组件

          } else {
            t.$Message.error(res.errorMsg)
          }
        })
		*/
      },

      //组件类型
      queryDecorateGroupDataType() {
		
		 const t = this;
		/*  
        const formData = Object.assign({}, config, {
          page_id: t.pageId,
          token: t.$store.state.token,
          user_id: localStorage.getItem("TOKEN_STATE")
        })

        queryDecorateGroupDataType(formData).then((res) => {
          if (res.status == ERR_OK) {
            let typesArr = res.data.types;
			*/
			
			let typesArr =[
				{"type":10,"typeText":"页面背景"},
				{"type":601,"typeText":"广告轮播"},
				{"type":603,"typeText":"导航菜单"},
				{"type":701,"typeText":"导航魔方"},
				{"type":702,"typeText":"分割线"},
				{"type":703,"typeText":"商品搜索"},
				{"type":201,"typeText":"商品列表"},
				{"type":602,"typeText":"店铺列表"},
				{"type":301,"typeText":"代金券列表"},
				{"type":302,"typeText":"活动专场列表"},
				{"type":501,"typeText":"视频列表"},
				{"type":502,"typeText":"文章列表"},
				{"type":503,"typeText":"相册列表"},
				{"type":504,"typeText":"直播间列表"}]
			
            //找出背景色,提交的时候，把背景色组件追加末尾。
            let findBackgroundObjItemIndex = typesArr.findIndex(item => item.type === 10);
            if (findBackgroundObjItemIndex != -1) {
              console.log("找到了背景组件");
              t.backgroundMpLayoutItem = typesArr[findBackgroundObjItemIndex];
            }

            //过滤掉背景色；
            //给原始组件配置初始模板数据
            //给每个对象追加mpItemId唯一值
            t.list1 = typesArr.filter(item => item.type != 10).map((item, index) => {

              //找出样板数据sampleItem的data
              let mpItemData = [];
              let findSampleObjItemIndex = t.mpSampleDataList.findIndex(sampleItem => sampleItem.type === item.type);
              if (findSampleObjItemIndex != -1) {
                let sampleObjItem = t.mpSampleDataList[findSampleObjItemIndex];
                if (sampleObjItem.data) {
                  mpItemData = sampleObjItem.data;
                }
              }

              //追加mpItemId 和 mpItemData(显示初始元数据)
              return Object.assign(item, {
                'mpItemData': mpItemData
              });
            });

		/*
          } else {
            t.$Message.error(res.errorMsg)
          }
        })
		*/
      },

      //返回
      routerPop: function() {
        this.$router.back();
      },

      //获取内容分组列表
      queryDecorateGroup() {
		
		/*  
        this.pageTitle = this.$route.query.pageTitle;

        if (this.pageId = this.$route.query.id, void 0 === this.pageId || isNaN(this.pageId)) {
          return t.$Modal.error({
            title: "错误提示",
            content: "地址栏参数错误，请重试",
            onOk: function() {
              t.$router.replace({
                name: 'settingPage'
              })
            }
          }), !1;
        }

        const t = this;
        const formData = Object.assign({}, config, {
          page_id: t.pageId,
          token: t.$store.state.token,
          user_id: localStorage.getItem("TOKEN_STATE")
        })

        queryDecorateGroup(formData).then((res) => {
          if (res.status == ERR_OK) {
			  let mpItemLayoutList = res.data.item;
          */
		  
		    const t = this;
 
            //小程序已编辑保存过的组件项
			let mpConfigOptionsStr = '[{"itemId":174449,"type":10,"typeText":"页面背景","title":"","config":{"bgColor":"#8BC34A"}},{"itemId":174450,"type":601,"typeText":"广告轮播","title":"","config":{"autoLoadData":1,"data":[{"icon":"https://cdn.linjiakankan.com/image/0a35014271909b22a29dc88d04ecbf45.jpeg","isActive":true},{"icon":"https://cdn.linjiakankan.com/image/254dd5220777ae5632730684ad7c32c7.jpeg","isActive":true}]}},{"itemId":174451,"type":603,"typeText":"导航菜单","title":"","config":{"autoLoadData":1,"titleColor":"#5D4037","data":[{"icon":"https://cdn.linjiakankan.com/image/f4445ad8ed5d7c866e549fa850a1d98b.jpeg","isActive":true,"title":""}],"containerBgColor":"#ffffff"}},{"itemId":174452,"type":701,"typeText":"导航魔方","title":"","config":{"autoLoadData":0,"titleColor":"#FFFFFF","data":[{"icon":"https://cdn.linjiakankan.com/image/347644bc658aaa40bf8208e215283215.jpeg","isActive":true}],"containerBgColor":"#ffffff","priceColor":"#9D3939","cardBgColor":"#2D8CF0","purchaseButtonTitleColor":"#000000","style":7006,"purchaseButtonBgColor":"#FFFFFF"}},{"itemId":174453,"type":602,"typeText":"店铺列表","title":"","config":{"moduleTitle":"","containerBgColor":"#E8E8E8","headBgColor":"#AC7A33","cardBgColor":"#ffffff","headTitleColor":"#333333","style":"","headerTitle":"顶级店铺"}},{"itemId":174454,"type":201,"typeText":"商品列表","title":"","config":{"titleColor":"#333333","moduleTitle":"","containerBgColor":"","priceColor":"#EE2C2C","headBgColor":"","cardBgColor":"#ffffff","headTitleColor":"#333333","purchaseButtonTitleColor":"#ffffff","style":2003,"purchaseButtonBgColor":"#EA1A1A","headerTitle":""}},{"itemId":174455,"type":301,"typeText":"代金券列表","title":"","config":{"titleColor":"#19BE6B","timeColor":"#F9E31C","containerBgColor":"#2D8CF0","headBgColor":"#607D8B","priceColor":"#19C919","cardBgColor":"#FFFFFF","headTitleColor":"#000000","purchaseButtonTitleColor":"#ED4014","amountColor":"#EA1A1A","purchaseButtonBgColor":"#FF9900","headerTitle":"代金券列表"}},{"itemId":174456,"type":302,"typeText":"活动专场列表","title":""},{"itemId":174457,"type":502,"typeText":"文章列表","title":"","config":{"moduleTitle":"","containerBgColor":"#E8E8E8","headBgColor":"#CDDC39","cardBgColor":"#ffffff","headTitleColor":"#333333","style":"","headerTitle":"推荐文章"}},{"itemId":174458,"type":702,"typeText":"分割线","title":"","config":{"cardImage":"https://cdn.linjiakankan.com/image/7d05895f282a507567bb7d50eed24c33.jpeg","containerBgColor":"#ffffff","cardTextColor":"#ffffff","cardText":""}}]';
            let mpItemLayoutList = JSON.parse(mpConfigOptionsStr);

            //把背景色组件过滤出来。
            let findBackgroundObjItemIndex = mpItemLayoutList.findIndex(item => item.type === 10);
            if (findBackgroundObjItemIndex != -1) {
              t.backgroundMpLayoutItem = mpItemLayoutList[findBackgroundObjItemIndex];
              t.mpContainerBgColor = t.backgroundMpLayoutItem.config.bgColor;
			  console.log("什么鬼啊啊啊啊");
			  
			  this.$nextTick(() => {
				   t.$refs.DragList.reloadMpContainerBgColor(t.mpContainerBgColor)
			  });
             
            }

            let mpItemArr = mpItemLayoutList.filter(item => item.type != 10); //过滤掉背景色；

            //给每个对象追加mpItemId唯一值
            t.list2 = mpItemArr.map((item, index) => {

              //找出样板数据sampleItem的data
              let mpItemData = [];
              let findSampleObjItemIndex = t.mpSampleDataList.findIndex(sampleItem => sampleItem.type === item.type);
              if (findSampleObjItemIndex != -1) {
                let sampleObjItem = t.mpSampleDataList[findSampleObjItemIndex];
                if (sampleObjItem.data) {
                  mpItemData = sampleObjItem.data;
                }
              }

              //追加mpItemId 和 mpItemData(显示初始元数据)
              return Object.assign(item, {
                'mpItemId': 'mpItem_' + item.itemId,
                'mpItemData': mpItemData
              })
            });

            if(t.list2.length > 0){
               let firstMpItem = t.list2[0];
               t.chooseSelectedMPItemLayout(firstMpItem);
            }

		  /*
          } else {
            this.$Message.error(res.errorMsg)
          }
        })
		*/
      },

      //预览小程序效果
      previewHandle() {

        let mpItemsConfigStr = this.getMpLyaoutItemsConfigStr();
        if(mpItemsConfigStr != this.originItemConfigs){

           let that = this;
           this.$Modal.confirm({
             title: '提示',
             width: 280,
             okText:'保存',
             content: '<p>请先保存再预览</p>',
             onOk: () => {
                that.mpItemUpdateBatch();
             },
             onCancel: () => {

             }
           });

           return ;
        }

        // this.$refs.PreviewDecorate.initial(this.pageId)
      },
      
      //发布
      publishAction() {
        const t = this
        if (this.$store.commit("SET_LOADING", 1), this.pageId = this.$route.query.id, void 0 === this.pageId || isNaN(
            this.pageId)) {
          return t.$Modal.error({
            title: "错误提示",
            content: "地址栏参数错误，请重试",
            onOk: function() {
              t.$router.go(-1)
            }
          }), !1;
        }

        let mpItemsConfigStr = this.getMpLyaoutItemsConfigStr();
        if(mpItemsConfigStr != this.originItemConfigs){

           let that = this;
           this.$Modal.confirm({
             title: '提示',
             width: 280,
             okText:'保存',
             content: '<p>请先保存再预览</p>',
             onOk: () => {
                that.mpItemUpdateBatch();
             },
             onCancel: () => {

             }
           });
           return ;
        }


        t.$Modal.confirm({
          title: '温馨提示',
          content: '<p>是否发布页面模板？</p>',
          onOk: () => {
            const formData = Object.assign({}, config, {
              page_id: t.pageId,
              token: t.$store.state.token,
              user_id: localStorage.getItem("TOKEN_STATE")
            })
            t.$store.commit("SET_LOADING", 1);
			
			t.$Message.success("发布成功");
            
			// publishDecorate(formData).then((res) => {
   //            if (res.status == ERR_OK) {
   //              t.$Message.success("操作成功")
   //            } else {
   //              t.$Message.error(res.errorMsg)
   //            }
   //          })
          },
          onCancel: () => {
            t.$store.commit("SET_LOADING", !1)
          }
        });
      },
    },

  }
</script>

<style>
  .room-group {
    background: #f7f8f9;
    padding-top: 10px;
  }

  .miniProgramApp {
    width: 100%;

    display: flex;
    padding-bottom: 10px;
    box-sizing: border-box;
  }

  .drag-box-card {
    display: inline-block;
    flex: 1;
    height: 100%;
    box-sizing: border-box;
	}

    .drag-item {
      height: auto;
      margin-bottom: 0.625rem;
      cursor: pointer;
      display: flex;
      position: relative;
    }

    .drag-right-item {
      height: auto;
      cursor: pointer;
      display: flex;
      position: relative;
    }

    h3 {
      padding: 10px 15px;
    }

    .drop-box {

      background-color: #f7f8f9;
    }

    .left-drop-box {
      margin-right: 10px;
      margin-left: 0.625rem;
      border: 1px solid #eeeeee;
      border-radius: 0;
      background-color: #E8E8E8;
      overflow-y: auto;
      padding-bottom: 0.625rem;
      padding-top: 0.625rem;
	  height: 40.4375rem;
    }

    .right-drop-box {
      height: 40.4375rem;
      box-sizing: border-box;
      border: 0;
      border-radius: 5px;
      width: 23.4375rem;
      /*375  width: 20rem; 缩放80% */
      background-color: white;
      overflow-y: auto;
    }
  

  .handle-log-box {
    display: inline-block;
    text-align: center;
    width: 20rem;
    box-sizing: border-box;
    /* height: 36.6875rem; */
    margin-left: 0;
  }
	
    h3 {
      padding: 10px 15px;
    }

    .handle-inner-box {
      padding: 0.625rem;
      background: white;
      /* overflow: auto; */
      border: 1px solid #eeeeee;
      /* height: 100%;*/
      width: 100%;
    }
  

  .MPItemLayoutSelectedShowBorder {
    border: 1px solid #00B2EE;
  }

  .MPItemLayoutNormalShowBorder {
    border: 1px dashed #D4D4D4;
  }

  .mpOtherCommponent {
    height: 1.25rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .mpComponmentItem {
    display: flex;
    justify-content: center;
    background: white;
  }

  .res-show-box {
    display: inline-block;
    margin-left: 20px;
    border: 1px solid #eeeeee;
    vertical-align: top;
    width: 350px;
    height: 570px;
  }

  .closeItemView {
    background: rgba(0, 0, 0, 0.6);
    width: 1.25rem;
    height: 1.25rem;
    z-index: 666;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .closeItemView img {
    height: 0.625rem;
    width: 0.625rem;
  }
</style>
