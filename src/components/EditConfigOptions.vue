<template>
    <div class="tool-modal" style="width: 100%;">
    <Form autocomplete="off" ref="operationForm" :model="operationForm" :rules="formRules" label-position="left">

      <FormItem prop="title" label="部件名称" >
        <Input type="text" v-model="operationForm.moduleTitle" size="large" clearable placeholder="请输入页面模板部件名称(可选)"
               autocomplete="off"></Input>
      </FormItem>

      <FormItem prop="" label="" v-if="options.length !=0">
        <RadioGroup v-model="operationForm.style" @on-change="handleStyle">
          <Radio v-for="item in options" :key="item.id" :value="item.id" :label="item.id">{{item.name}}</Radio>
        </RadioGroup>
      </FormItem>

      <!--页面背景-->
      <template v-if="payload.type == 10">
        <div class="control-group" label="背景颜色">
          <div class="control-group-header">
            <span>背景颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.bgColor" recommend style="width: 80px"/>
          </div>
        </div>

      </template>

      <!--单卖/拼团 (普通商品列表)-->
      <template v-if="payload.type == 201">

        <div class="control-group" label="头部背景颜色">
          <div class="control-group-header">
            <span>头部背景颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.headBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="头部文字颜色">
          <div class="control-group-header">
            <span>头部文字颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.headTitleColor" recommend style="width: 80px"/>
          </div>
        </div>

        <FormItem prop="headerTitle" label="头部文字名称" class="labelFont15">
          <Input type="text" v-model="operationForm.headerTitle" size="large" clearable placeholder="请填写头部文字名称(可选)"
                 autocomplete="off"></Input>
        </FormItem>

        <div class="control-group" label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="卡片背景色">
          <div class="control-group-header">
            <span>卡片背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.cardBgColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" style="margin-top: 0.625rem;" label="商品名称颜色">
          <div class="control-group-header">
            <span>商品名称颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.titleColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="价格字体颜色">
          <div class="control-group-header">
            <span>价格字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.priceColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>购买按钮背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.purchaseButtonBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>购买按钮字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.purchaseButtonTitleColor" recommend style="width: 80px"/>
          </div>
        </div>
      </template>

      <!--限时折扣-->
      <template v-if="payload.type == 202">
        <div class="control-group" label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="卡片字体颜色">
          <div class="control-group-header">
            <span>卡片字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.cardTextColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="商品名称颜色">
          <div class="control-group-header">
            <span>商品名称颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.titleColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="价格字体颜色">
          <div class="control-group-header">
            <span>价格字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.priceColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>购买按钮背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.purchaseButtonBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>购买按钮字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.purchaseButtonTitleColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>进度条背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.ProgressBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>已完成进度条背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.APProgressBgColor" recommend style="width: 80px"/>
          </div>
        </div>
      </template>

      <!--优惠券-->
      <template v-if="payload.type == 301">

        <div class="control-group" label="头部背景颜色">
          <div class="control-group-header">
            <span>头部背景颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.headBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="头部文字颜色">
          <div class="control-group-header">
            <span>头部文字颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.headTitleColor" recommend style="width: 80px"/>
          </div>
        </div>
        <FormItem prop="headerTitle" label="头部文字名称" class="labelFont15">
          <Input type="text" v-model="operationForm.headerTitle" size="large" clearable placeholder="请填写头部文字名称(可选)"
                 autocomplete="off"></Input>
        </FormItem>


        <div class="control-group"  label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="卡片背景色">
          <div class="control-group-header">
            <span>卡片背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.cardBgColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" style="margin-top: 0.625rem;" label="代金券名称颜色">
          <div class="control-group-header">
            <span>代金券名称颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.titleColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>购买按钮背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.purchaseButtonBgColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" label="购买按钮字体颜色">
          <div class="control-group-header">
            <span>购买按钮字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.purchaseButtonTitleColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" label="价格颜色">
          <div class="control-group-header">
            <span>价格颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.priceColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" label="有效期颜色">
          <div class="control-group-header">
            <span>有效期颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.timeColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" label="原价颜色">
          <div class="control-group-header">
            <span>原价颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.amountColor" recommend style="width: 80px"/>
          </div>
        </div>

      </template>

      <!--活动，文章，相册，视频，店铺列表，-->
      <template v-if="[302,501,502,503,504,602].findIndex(type => type === payload.type) != -1">

        <div class="control-group" label="头部背景颜色">
          <div class="control-group-header">
            <span>头部背景颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.headBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="头部文字颜色">
          <div class="control-group-header">
            <span>头部文字颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.headTitleColor" recommend style="width: 80px"/>
          </div>
        </div>
        <FormItem prop="headerTitle" label="头部文字名称" class="labelFont15">
          <Input type="text"  v-model="operationForm.headerTitle" size="large" clearable placeholder="请填写头部文字名称(可选)"
                 autocomplete="off"></Input>
        </FormItem>


        <div class="control-group" label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="卡片背景色">
          <div class="control-group-header">
            <span>卡片背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.cardBgColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" v-if="payload.type==302" label="活动名称颜色">
          <div class="control-group-header">
            <span>活动名称颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.titleColor" recommend style="width: 80px"/>
          </div>
        </div>
      </template>


      <!--视频-->
      <template v-if="payload.type == 401">
        <div class="control-group" label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="卡片背景色">
          <div class="control-group-header">
            <span>卡片字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.cardTextColor" recommend style="width: 80px"/>
          </div>
        </div>
      </template>

      <!--banner自定义-->
      <template v-if="payload.type == 601">

        <FormItem>
          <Checkbox v-model="operationForm.checkbox" @on-change="handleCheckbox">自动加载数据</Checkbox>
        </FormItem>

        <!--图文列表-->
        <div class="editor-card">
          <div class="editor-card-item" v-for="(item,index) in navigate" :key="index" @click="indexAction(index)">
            <!--删除按钮-->
            <Icon type="md-close-circle" class="card-item-delete" @click="deleteAction(index)"/>

            <div class="image-editor">
              <div class="has-not-choose-image" v-if="!item.isActive" @click="activeUpload(index)">
                <Icon type="md-add" class="icon"/>
                <div>添加图片</div>
              </div>
              <div class="has-choosed-image" v-if="item.isActive">
                <img class="thumb-image" :src="item.icon"  alt=""/>
                <span class="modify-image" @click="activeUpload(index)">更换图片</span>
              </div>
              <div class="has-error" v-if="!item.isActive && isShow">请选择一张图片</div>
            </div>
            <div class="editor-form-content">
              <Form autocomplete="off" ref="operationForm" label-position="left" :label-width="40">
                <FormItem prop="title" label="标题">
                  <Input type="text" v-model="item.title" size="large" clearable placeholder="请输入页面模板标题"
                         autocomplete="off"></Input>
                </FormItem>

                <FormItem prop="title" label="链接" class="no-control-group" style="margin-bottom: 0;">
                  <Button type="dashed" long @click="activeSetting(index)" v-if="!item.linkType">选择跳转目标</Button>

                  <div class="choose-link-menu" v-if="item.linkType">
                    <div class="choose-link-style">
                      <div class="choose-link-content">
                        <span>{{item.linkTypeText}}</span><span
                        v-if="item.linkTargetIdText">{{item.linkTargetIdText}}</span>
                      </div>
                      <Icon type="md-close" @click="deleteSetting(index)"/>
                    </div>
                    <span class="choose-link-modify" style="cursor: pointer;" @click="activeSetting(index)">修改</span>
                  </div>

                </FormItem>
              </Form>
            </div>
          </div>
          <!--添加按钮-->
          <div class="editor-card-create" @click="createAction(601)">
            <Icon type="md-add" class="icon"/>
            <div>添加图文导航</div>
          </div>
        </div>

      </template>

      <!--导航菜单-->
      <template v-if="payload.type == 603">
        <div class="control-group" label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="卡片背景色">
          <div class="control-group-header">
            <span>菜单文字颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.titleColor" recommend style="width: 80px"/>
          </div>
        </div>

        <FormItem>
          <Checkbox v-model="operationForm.checkbox" @on-change="handleCheckbox">自动加载商品分类数据</Checkbox>
        </FormItem>

        <!--图文列表-->
        <div class="editor-card">
          <div class="editor-card-item" v-for="(item,index) in navigation" :key="index" @click="indexAction(index)">
            <!--删除按钮-->
            <Icon type="md-close-circle" class="card-item-delete" @click="deleteAction(index)"/>

            <div class="image-editor">
              <div class="has-not-choose-image" v-if="!item.isActive" @click="activeUpload(index)">
                <Icon type="md-add" class="icon"/>
                <div>添加图片</div>
              </div>
              <div class="has-choosed-image" v-if="item.isActive">
                <img class="thumb-image" :src="item.icon" alt=""/>
                <span class="modify-image" @click="activeUpload(index)">更换图片</span>
              </div>
              <div class="has-error" v-if="!item.isActive && isShow">请选择一张图片</div>
            </div>
            <div class="editor-form-content" >
              <Form autocomplete="off" ref="operationForm" label-position="left" :label-width="40">
                <FormItem prop="title" label="标题">
                  <Input type="text" v-model="item.title" size="large" clearable placeholder="请输入页面模板标题"
                         autocomplete="off"></Input>
                </FormItem>

                <FormItem prop="title" label="链接" class="no-control-group" style="margin-bottom: 0;">

                  <Button type="dashed" long @click="activeSetting(index)" v-if="!item.linkType"> 选择跳转目标</Button>
                  <div class="choose-link-menu" v-if="item.linkType">
                    <div class="choose-link-style">
                      <div class="choose-link-content">
                        <span>{{item.linkTypeText}}</span>
                        <br/>
                        <span style="margin-top: 5px;"
                        v-if="item.linkTargetIdText">{{item.linkTargetIdText}}</span>
                      </div>
                      <Icon type="md-close" @click="deleteSetting(index)"/>
                    </div>
                    <span class="choose-link-modify" style="cursor: pointer;" @click="activeSetting(index)">修改</span>
                  </div>



                </FormItem>
              </Form>
            </div>
          </div>
          <!--添加按钮-->
          <div class="editor-card-create" @click="createAction(603)">
            <Icon type="md-add" class="icon"/>
            <div>添加图文导航</div>
          </div>
        </div>

      </template>

      <!--导航魔方-->
      <template v-if="payload.type == 701">

        <div class="control-group" label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="control-group" label="卡片背景色" style="margin-bottom: 1.25rem;">
          <div class="control-group-header">
            <span>卡片背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.cardBgColor" recommend style="width: 80px"/>
          </div>
        </div>

        <label style="color:red;font-size: 0.75rem;text-align: center;">以下属性设置后的效果需在小程序端方可预览</label>
        <div class="control-group" label="商品名称颜色" style="margin-top: 0.625rem;">
          <div class="control-group-header">
            <span>商品名称颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.titleColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="价格字体颜色">
          <div class="control-group-header">
            <span>价格字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.priceColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>购买按钮背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.purchaseButtonBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="购买按钮背景色">
          <div class="control-group-header">
            <span>购买按钮字体颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.purchaseButtonTitleColor" recommend style="width: 80px"/>
          </div>
        </div>

        <FormItem>
          <Checkbox v-model="operationForm.checkbox" @on-change="handleCheckbox">自动加载商品数据</Checkbox>
        </FormItem>

        <!--图文列表-->
        <div class="editor-card">
          <div class="editor-card-item" v-for="(item,index) in navigator" :key="index" @click="indexAction(index)">
            <!--删除按钮-->
            <Icon type="md-close-circle" class="card-item-delete" @click="deleteAction(index)"/>

            <div class="image-editor">
              <div class="has-not-choose-image" v-if="!item.isActive" @click="activeUpload(index)">
                <Icon type="md-add" class="icon"/>
                <div>添加图片</div>
              </div>
              <div class="has-choosed-image" v-if="item.isActive">
                <img class="thumb-image" :src="item.icon"  alt=""/>
                <span class="modify-image" @click="activeUpload(index)">更换图片</span>
              </div>
              <div class="has-error" v-if="!item.isActive && isShow">请选择一张图片</div>
            </div>
            <div class="editor-form-content">

              <Form autocomplete="off" ref="operationForm" label-position="top" style="justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 10px;">

                <FormItem prop="title" label="链接" class="no-control-group" style="margin-bottom: 0;">
                  <Button type="dashed" long @click="activeSetting(index)" v-if="!item.linkType">选择跳转目标</Button>

                  <div class="choose-link-menu" v-if="item.linkType">
                    <div class="choose-link-style">
                      <div class="choose-link-content">
                        <span>{{item.linkTypeText}}</span>
                        <span
                        v-if="item.linkTargetIdText">{{item.linkTargetIdText}}</span>
                      </div>
                      <Icon type="md-close" @click="deleteSetting(index)"/>
                    </div>
                    <span class="choose-link-modify" style="cursor: pointer;" @click="activeSetting(index)">修改</span>
                  </div>

                </FormItem>
              </Form>
            </div>
          </div>
          <!--添加按钮-->
          <div class="editor-card-create" @click="createAction(701)">
            <Icon type="md-add" class="icon"/>
            <div>添加图文导航</div>
          </div>
        </div>

      </template>

      <template v-if="payload.type == 703">
        <div class="control-group" label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>
       </template>

      <!--分割线类型-->
      <template v-if="payload.type == 702">
        <div class="control-group" label="大容器背景色">
          <div class="control-group-header">
            <span>大容器背景色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.containerBgColor" recommend style="width: 80px"/>
          </div>
        </div>
        <div class="control-group" label="文字颜色">
          <div class="control-group-header">
            <span>文字颜色</span>
          </div>
          <div class="control-group-content">
            <ColorPicker v-model="operationForm.cardTextColor" recommend style="width: 80px"/>
          </div>
        </div>

        <div class="editor-card">

          <div class="editor-card-item">
            <div class="image-editor">
              <!--删除按钮-->
              <Icon type="md-close-circle" class="card-item-delete" @click="deleteDivision"/>

              <div class="has-not-choose-image" v-if="!isShow" @click="activeUpload(0)">
                <Icon type="md-add" class="icon"/>
                <div>添加图片</div>
              </div>
              <div class="has-choosed-image" v-if="isShow">
                <img class="thumb-image" :src="division[0]"  alt=""/>
                <span class="modify-image" @click="activeUpload(0)">更换图片</span>
              </div>
            </div>
            <div class="editor-form-content">

              <Form autocomplete="off" ref="operationForm" label-position="left" :label-width="15">
                <FormItem prop="cardText" label="">
                  <Input type="text" v-model="operationForm.cardText" size="large" clearable placeholder="请输入"
                         autocomplete="off"></Input>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </template>

    </Form>
   
    <!--图片裁剪上传-->
    <!-- <ChoosedImageNoAlert ref="ChoosedImageNoAlert" @uploaded="updateImage"></ChoosedImageNoAlert> -->
    <!--选择链接目标-->
    <!-- <SettingTarget ref="SettingTarget" @setting="settingAction"></SettingTarget> -->
   </div>
</template>

<script>
  
  // import ChoosedImageNoAlert from 'components/common/ChoosedImageNoAlert';
  // import SettingTarget from 'components/operationtool/decorate-group/SettingTarget';

  export default {
    name: "EditConfigOptions",
    data() {
      return {
        isEdit: false,
        isVisible: false,
        isActive: false,
        isShow: false,
        pageId: null,
        type: null,
        index: null,  //定义当前操作区域
        payload: {},
        navigate: [],  //601图文导航
        navigator: [],//701图文导航
        navigation: [],  //603图文导航
        formRules: {},
        mpItemId:'', //小程序临时实时预览组件项唯一id
        //101=店铺信息   201=单卖/拼团商品列表   202=限时折扣列表  203=抽奖列表   301=优惠券列表  401=视频列表   701=导航魔方
        typeList: [{
          id: 101,
          name: '店铺信息',
          options: [{
            id: 1001,
            name: '大图样式'
          }, {
            id: 1002,
            name: '横排样式'
          },
          ]
        }, {
          id: 201,
          name: '单卖/拼团商品列表',
          options: [{
            id: 2001,
            name: '大图样式'
          }, {
            id: 2002,
            name: '横排样式'
          }, {
            id: 2003,
            name: '瀑布样式'
          }]
        }, {
          id: 202,
          name: '限时折扣列表',
          options: [{
            id: 2021,
            name: '横排样式'
          },]
        }, {
          id: 203,
          name: '抽奖列表',
          options: []
        }, {
          id: 301,
          name: '优惠券列表',
          options: []
        }, {
          id: 302,
          name: '活动专场列表',
          options: []
        },{
          id: 401,
          name: '视频列表',
          options: [{
            id: 4001,
            name: '视频样式1'
          },]
        }, {
          id: 501,
          name: '视频信息列表',
          options: []
        }, {
          id: 502,
          name: '文章信息列表',
          options: []
        }, {
          id: 503,
          name: '相册信息列表',
          options: []
        },{
          id: 504,
          name: '直播间列表',
          options: []
        }, {
          id: 602,
          name: '首页店铺列表',
          options: []
        }, {
          id: 701,
          name: '模板',
          options: [{
            id: 7001,
            name: '一行两个'
          }, {
            id: 7002,
            name: '一行三个'
          }, {
            id: 7003,
            name: '矩形(四个)'
          }, {
            id: 7004,
            name: '左一右二'
          }, {
            id: 7005,
            name: '上一下二'
          }, {
            id: 7006,
            name: '一行一个'
          },]
        }],
        options: [], //样式选择项
        operationForm: {
          style: '',
          styleName: '',  //商家信息 //优惠券  //
          moduleTitle: null,
          containerBgColor: '', // 大容器背景色
          cardBgColor: '#ffffff', // 卡片背景色
          titleColor: '#333333',  //店铺名称颜色
          cardTextColor: '#ffffff', //卡片字体颜色
          cardBigBgImage: 'https://cdn.linjiakankan.com/image/e7d5a80e8e8843acbe58749f0bdec8ce.png',  // 卡片背景大图
          cardSmallBgImage: 'https://cdn.linjiakankan.com/image/933067084d82b71b1e6a42676dd4042e.png',   // 卡片背景小图
          priceColor: '#ffffff',   //价格颜色
          purchaseButtonBgColor: '#ffffff',  //购买按钮背景色
          purchaseButtonTitleColor: '#ffffff',  //购买按钮字体颜色
          ProgressBgColor: '#ffffff',  //进度条背景色
          APProgressBgColor: '#ffffff',   //已完成进度条背景色
          checkbox: false,  //是否自动加载数据
          cardText: null,   //分割线文字
          headTitleColor: '#ffffff', ///文字颜色
          headTitle:'',
          headBgColor: '#ffffff', ///背景颜色
          bgColor: '#ffffff', ///页面背景组件背景颜色
          timeColor: '#999999',//有效期颜色 -- 代金卷
          amountColor: '#999999', //原价颜色  -- 代金卷
        },
        division: [],//分割线图片
      }
    },
    mounted: function () {
    },
    watch:{
      operationForm:{
          handler(newValue,oldValue){
              if(Object.is(newValue,oldValue)){
                this.validate();
              }
          },
          deep:true  //监听对象每一个属性的变化
      },
      navigation:{
         handler(newValue,oldValue){
           console.log("navigation菜单发生监听变化。");
         },
         deep:true
      },
      navigator:{
        handler(newValue,oldValue){
          console.log("navigator魔方发生监听变化。");
        },
        deep:true
      },
    },
    components: {
      // ChoosedImageNoAlert,
      // SettingTarget,
    },
    methods: {
      initial: function (t, k) {

        this.handleReset(), this.isVisible = true, this.pageId = this.$route.query.id, this.payload = t;
        k == 'modify' ? (this.isEdit = true, this.modifyId = t.itemId, this.detailDecorateGroup(t)) : (this.isEdit = false);
        this.typeList.forEach(e => {
          if (e.id == this.payload.type) {
            this.options = e.options;
          }
        });

        console.log("对象点击属性。。。。");
        this.validate(); //让对象属性config进行回传；
      },
      //自动加载数据选择
      handleCheckbox(e) {

        this.operationForm.checkbox = e;
        this.validate();
      },
      //禁用input输入空格
      handleBan(e) {
        return e.target.value = e.target.value.replace(/\s+/g, '')
      },
      //视图类型
      handleStyle(e) {
        e == 3001 ? (this.operationForm.cardBigBgImage = 'https://cdn.linjiakankan.com/image/23912f93127807a549688f34447f9088.png') : (this.operationForm.cardBigBgImage = 'https://cdn.linjiakankan.com/image/09c49790125eb0ed6b52f32424d1a94c.png');
        this.isActive = false;
        this.operationForm.style = e;
      },
      //获取index
      indexAction(i) {
        this.index = i;
      },
      //点击弹起选择跳转链接目标
      activeSetting() {

        // this.$refs.SettingTarget.initial();
      },
      //设置跳转链接
      settingAction(e) {
        const t = this;
        if (e) {
          if (t.payload.type == 603) {
            let obj = this.navigation[t.index];
            obj.linkType = e.type.value;
            obj.linkTypeText = e.type.label;
            if (e.target) {
              obj.linkTargetId = e.target.value;
              obj.linkTargetIdText = e.target.label
            }
            this.$set(this.navigation,t.index,obj);
          } else if (t.payload.type == 701) {

            let obj = this.navigator[t.index];
            obj.linkType = e.type.value;
            obj.linkTypeText = e.type.label;
            if (e.target) {
              obj.linkTargetId = e.target.value;
              obj.linkTargetIdText = e.target.label
            }
            this.$set(this.navigator,t.index,obj);

          } else if (t.payload.type == 601) {

            let obj = this.navigate[t.index];
            obj.linkType = e.type.value;
            obj.linkTypeText = e.type.label;
            if (e.target) {
              obj.linkTargetId = e.target.value;
              obj.linkTargetIdText = e.target.label
            }
            this.$set(this.navigate,t.index,obj);
          }
        }

        this.validate();
      },
      //  删除当前选择的跳转链接
      deleteSetting(e) {
        console.log("删除。。");
        if (this.payload.type == 603) {

          let obj = this.navigation[e];
          obj.linkType = null
          obj.linkTargetId = null;
          this.$set(this.navigation,e,obj);

        } else if (this.payload.type == 701) {

          let obj = this.navigator[e];
          obj.linkType = null
          obj.linkTargetId = null;
          this.$set(this.navigator,e,obj);

        } else if (this.payload.type == 601) {
          let obj = this.navigate[e];
          obj.linkType = null
          obj.linkTargetId = null;
          this.$set(this.navigate,e,obj);
        }

        this.validate();
      },
      //对齐方式
      handleAlign(e) {
        this.operationForm.align = e;
      },
      //数据类型
      handleDataType(e) {
        this.isActive = false;
        this.operationForm.dataType = e;
      },
      //点击弹起图片选择框
      activeUpload(i) {
        // this.$refs.ChoosedImageNoAlert.isActive(i);
      },
      //更新logo图片
      updateImage(e) {

        if (this.payload.type == 603) {
          let imgObj = this.navigation[e.key];
          imgObj.icon = e.url;
          imgObj.isActive = true;
          this.$set(this.navigation,e.key,imgObj);

          // this.navigation[e.key].icon = e.url, this.navigation[e.key].isActive = true;
        } else if (this.payload.type == 701) {
          let imgObj = this.navigator[e.key];
          imgObj.icon = e.url;
          imgObj.isActive = true;
          this.$set(this.navigator,e.key,imgObj);

          // this.navigator[e.key].icon = e.url, this.navigator[e.key].isActive = true;
        } else if (this.payload.type == 601) {
          let imgObj = this.navigate[e.key];
          imgObj.icon = e.url;
          imgObj.isActive = true;
          this.$set(this.navigate,e.key,imgObj);

          // this.navigate[e.key].icon = e.url, this.navigate[e.key].isActive = true;
        } else if (this.payload.type == 702) {
          this.division.splice(0, 1, e.url), this.isShow = true;
        }
        this.validate();
      },
      //删除图片导航
      deleteAction(item) {
        if (this.payload.type == 603) {
          this.navigation.splice(item, 1)
        } else if (this.payload.type == 701) {
          this.navigator.splice(item, 1)
        } else if (this.payload.type == 601) {
          this.navigate.splice(item, 1)
        }
        this.validate();
      },
      //分割线
      deleteDivision() {
        this.division = [], this.isShow = false;
        this.validate();
      },
      //添加图文导航
      createAction(e) {
        switch (e) {
          case 601:
            this.navigate.push({
              icon: null,
              linkType: null,   //跳转目标类型
              linkTargetId: null,  //跳转目标ID
              isActive: false,    //是否显示图片
            });
            break;
          case 603:
            this.navigation.push({
              icon: null,
              title: null,
              linkType: null,   //跳转目标类型
              linkTargetId: null,  //跳转目标ID
              isActive: false,    //是否显示图片
            });
            break;
          case 701:
            this.navigator.push({
              icon: null,
              linkType: null,   //跳转目标类型
              linkTargetId: null,  //跳转目标ID
              isActive: false,    //是否显示图片
            });
            break;
        }

      },
      //重置
      handleCancel() {
        this.handleReset()
      },

      //获取编辑部件详情
      detailDecorateGroup(t) {

            let o = t;
            this.mpItemId = o.mpItemId;
            console.log(o.type);
            console.log(o.config);

            if (o.config && Object.keys(o.config).length != 0) {

              this.operationForm = {
                style: o.config.style,
                moduleTitle : o.config.moduleTitle,
                styleName: '',  //商家信息 //优惠券  //
                containerBgColor: o.config.containerBgColor || '', // 大容器背景颜色
                cardBgColor: o.config.cardBgColor || '#FFFFFF', // 卡片背景色
                titleColor: o.config.titleColor || '#333333',  //店铺名称颜色
                cardTextColor: o.config.cardTextColor || '#FFFFFF', //卡片字体颜色
                cardBigBgImage: o.config.cardBigBgImage,  // 卡片背景大图
                cardSmallBgImage: o.config.cardSmallBgImage,   // 卡片背景小图
                priceColor: o.config.priceColor || '#FFFFFF',   //价格颜色
                purchaseButtonBgColor: o.config.purchaseButtonBgColor || '#FFFFFF',  //购买按钮背景色
                purchaseButtonTitleColor: o.config.purchaseButtonTitleColor || '#FFFFFF',  //购买按钮字体颜色
                ProgressBgColor: o.config.ProgressBgColor || '#FFFFFF',  //进度条背景色
                APProgressBgColor: o.config.APProgressBgColor || '#FFFFFF',   //已完成进度条背景色
                checkbox: !!o.config.autoLoadData || false,   //是否自动加载数据
                cardText: o.config.cardText || '',
                headTitleColor: o.config.headTitleColor || '#ffffff', ///文字颜色
                headBgColor: o.config.headBgColor || '', ///背景颜色
                headerTitle: o.config.headerTitle || o.typeText,
                bgColor: o.config.bgColor || '#ffffff',   ///页面背景组件背景颜色
                timeColor: o.config.timeColor || '#ffffff',//有效期颜色 -- 代金卷
                amountColor: o.config.amountColor || '#ffffff', //原价颜色  -- 代金卷
              }
              this.isActive = true;
            }



            if (this.payload.type == 603) {
              console.log("编辑后有。。。。。");
              if(o.config){
                  o.config.data ? this.navigation = o.config.data : this.navigation = []
              }else{
                console.log("编辑后发现没有。。。。。");
                 this.navigation = [];
                 this.navigation.push({
                   icon: "https://cdn.linjiakankan.com/image/855ce59347c7c4f25f295b01ab84ffb4.jpeg",
                   title: "菜单一",
                   linkType: null,   //跳转目标类型
                   linkTargetId: null,  //跳转目标ID
                   isActive: true,    //是否显示图片
                   linkTypeText:null,
                   linkTargetIdText:null,
                 });
                 this.navigation.push({
                   icon: "https://cdn.linjiakankan.com/image/ba10335d3c35ddf09164e2686f221b8f.jpeg",
                   title: "菜单二",
                   linkType: null,   //跳转目标类型
                   linkTargetId: null,  //跳转目标ID
                   isActive: true,    //是否显示图片
                   linkTypeText:null,
                   linkTargetIdText:null,
                 });
              }

            } else if (this.payload.type == 701) {
              if(this.operationForm.style && this.operationForm.style > 0){
              }else{
                this.operationForm.style = 7004;
              }
              if(o.config){
                  o.config.data ? this.navigator = o.config.data : this.navigator = []
              }else{
                 this.navigator = [];
                 this.navigator.push({
                   icon: "https://cdn.linjiakankan.com/image/855ce59347c7c4f25f295b01ab84ffb4.jpeg",
                   linkType: null,   //跳转目标类型
                   linkTargetId: null,  //跳转目标ID
                   isActive: true,    //是否显示图片
                 });
                 this.navigator.push({
                   icon: "https://cdn.linjiakankan.com/image/ba10335d3c35ddf09164e2686f221b8f.jpeg",
                   linkType: null,   //跳转目标类型
                   linkTargetId: null,  //跳转目标ID
                   isActive: true,    //是否显示图片
                 });
              }

              // o.config ? (o.config.data ? this.navigator = o.config.data : this.navigator = []) : this.navigator = [];
            } else if (this.payload.type == 601) {
              o.config ? (o.config.data ? this.navigate = o.config.data : this.navigate = []) : this.navigate = [];
            } else if (this.payload.type == 702) {
              o.config ? (o.config.cardImage ? (this.division.splice(0, 1, o.config.cardImage), this.isShow = true) : this.isShow = false) : (this.division = [], this.isShow = false);
            }else if (this.payload.type == 201) {
                if(this.operationForm.style && this.operationForm.style > 0){
                }else{
                  this.operationForm.style = 2002; //商品默认卡片样式；
                }
            }
      },

      //验证表单是否通过
      validate() {
        let t = this, result = {};
        if (typeof t.operationForm.checkbox == "undefined"){
           t.operationForm.checkbox = false;
        }
        switch (t.payload.type) {
          case 10:
            //页面背景组件
            result = {
              bgColor: t.operationForm.bgColor
            }
            this.handleConfirm(result)
            break;
          case 101:
            //商户信息
            result = {
              style: t.operationForm.style,
              containerBgColor: t.operationForm.containerBgColor,
              cardBgColor: t.operationForm.cardBgColor,
              titleColor: t.operationForm.titleColor,
            }
            this.handleConfirm(result)
            break;
          case 201:
            //普通商品列表
            result = {
              style: t.operationForm.style,
              containerBgColor: t.operationForm.containerBgColor,
              cardBgColor: t.operationForm.cardBgColor,
              titleColor: t.operationForm.titleColor,
              priceColor: t.operationForm.priceColor,
              headTitleColor: t.operationForm.headTitleColor,
              headerTitle:t.operationForm.headerTitle,
              headBgColor: t.operationForm.headBgColor,
              purchaseButtonBgColor: t.operationForm.purchaseButtonBgColor,
              purchaseButtonTitleColor: t.operationForm.purchaseButtonTitleColor,
            }
            this.handleConfirm(result)
            break;
          case 202:
            //限时折扣
            result = {
              style: t.operationForm.style,
              containerBgColor: t.operationForm.containerBgColor,
              cardBgColor: t.operationForm.cardBgColor,
              titleColor: t.operationForm.titleColor,
              priceColor: t.operationForm.priceColor,
              purchaseButtonBgColor: t.operationForm.purchaseButtonBgColor,
              purchaseButtonTitleColor: t.operationForm.purchaseButtonTitleColor,
              ProgressBgColor: t.operationForm.ProgressBgColor,
              APProgressBgColor: t.operationForm.APProgressBgColor,
            }
            this.handleConfirm(result)
            break;
          case 203:
            //抽奖列表
            result = {
              style: t.operationForm.style,
              containerBgColor: t.operationForm.containerBgColor,
              cardBgColor: t.operationForm.cardBgColor,
              titleColor: t.operationForm.cardBgColor,
            }
            this.handleConfirm(result)
            break;
          case 301:
            //优惠券
            result = {
              containerBgColor: t.operationForm.containerBgColor,
              headTitleColor: t.operationForm.headTitleColor,
              headBgColor: t.operationForm.headBgColor,
              headerTitle: t.operationForm.headerTitle,
              titleColor: t.operationForm.titleColor,//代金券名称颜色
              purchaseButtonBgColor: t.operationForm.purchaseButtonBgColor,//购买按钮背景色
              purchaseButtonTitleColor: t.operationForm.purchaseButtonTitleColor,//购买按钮字体颜色
              cardBgColor: t.operationForm.cardBgColor,// 卡片背景色
              priceColor: t.operationForm.priceColor,//价格颜色
              timeColor: t.operationForm.timeColor,//有效期颜色
              amountColor: t.operationForm.amountColor,//原价颜色
            }
            this.handleConfirm(result)
            break;

          case 302:
          case 501:
          case 502:
          case 503:
          case 504:
          case 602:
             result = Object.assign({
                style: t.operationForm.style,
                containerBgColor: t.operationForm.containerBgColor,
                cardBgColor: t.operationForm.cardBgColor,
                headTitleColor: t.operationForm.headTitleColor,
                headBgColor: t.operationForm.headBgColor,
                headerTitle: t.operationForm.headerTitle,
              },t.payload.type == 302 ? {titleColor: t.operationForm.titleColor}:{})

            this.handleConfirm(result)
            break;
          case 401:
            //视频
            result = {
              style: t.operationForm.style,
              containerBgColor: t.operationForm.containerBgColor,
              cardTextColor: t.operationForm.cardTextColor,
            }
            this.handleConfirm(result)
            break;

          case 601:
            //导航菜单
            result = {
              autoLoadData: t.operationForm.checkbox * 1,
              data: t.navigate
            }
            console.log(result);

            this.handleConfirm(result)
            break;

          case 603:
            //导航菜单
            result = {
              containerBgColor: t.operationForm.containerBgColor,
              titleColor: t.operationForm.titleColor,
              autoLoadData: t.operationForm.checkbox * 1,
              data: t.navigation
            }
            console.log("导航菜单");
            console.log(t.navigation);
            this.handleConfirm(result)
            break;
          case 701:
            result = {
              style: t.operationForm.style,
              autoLoadData: t.operationForm.checkbox * 1,
              containerBgColor: t.operationForm.containerBgColor,
              cardBgColor: t.operationForm.cardBgColor,
              titleColor: t.operationForm.titleColor,
              priceColor: t.operationForm.priceColor,
              purchaseButtonBgColor: t.operationForm.purchaseButtonBgColor,
              purchaseButtonTitleColor: t.operationForm.purchaseButtonTitleColor,
              data: t.navigator
            }
            console.log("魔方");
            console.log(t.navigator);
            this.handleConfirm(result)
            break;
          //  分割线类型
          case 702:
            result = {
              containerBgColor: t.operationForm.containerBgColor,
              cardTextColor: t.operationForm.cardTextColor,
              cardImage: t.division[0],
              cardText: t.operationForm.cardText,
            }
            this.handleConfirm(result)
            break;
          case 703:
              result = {
                containerBgColor: t.operationForm.containerBgColor
              }
              this.handleConfirm(result)
              break;
          default:
            this.handleConfirm(result)
            break;
        }

      },
      //确认新增
      handleConfirm(result) {

        //属性编辑的实时结果
         Object.assign(result,{moduleTitle:this.operationForm.moduleTitle});
        let optionsStr = JSON.stringify(result);
        console.log(optionsStr);
        console.log("回传了");
        this.$emit('on-options-change', this.mpItemId,result);
      },
      handleReset() {
        this.isActive = false;
        this.options = [];
        this.category = [] //链接类型
        this.target = []  //目标类型
        this.navigation = []  //图文导航
        this.navigator = []  //图文导航
        this.navigate = []  //图文导航
        this.division = []  //分割线图片
        this.key = null;
        this.isShow = false;
        this.operationForm = {

          style: '',
          styleName: '',  //商家信息 //优惠券  //
          containerBgColor: '', // 大容器背景颜色
          cardBgColor: '#ffffff', // 卡片背景色
          moduleTitle: '', //部件名称
          titleColor: '#333333',  //店铺名称颜色
          cardTextColor: '#ffffff', //卡片字体颜色
          priceColor: '#EE2C2C',   //价格颜色
          purchaseButtonBgColor: '#EA1A1A',  //购买按钮背景色
          purchaseButtonTitleColor: '#ffffff',  //购买按钮字体颜色
          ProgressBgColor: '#ffffff',  //进度条背景色
          APProgressBgColor: '#ffffff',   //已完成进度条背景色
          subtitle: null,
          linkType: null,  //
          linkTargetId: null,
          headTitleColor: '#333333', //头部文字颜色
          headBgColor: '', //头部背景色
          headerTitle:'',
          bgColor: '#ffffff',
          timeColor: '#999999',//有效期颜色 -- 代金卷
          amountColor: '#999999', //原价颜色  -- 代金卷
        }
      },
    },
  }
</script>

<style>
  /* @import '~common/scss/common.scss'; */

  .labelFont15 > :first-child{
    font-size: 0.9375rem;
  }
  .tool-modal {
	  }

    .ivu-modal-body {
      background-color: #f7f7f7;
	}
      .ivu-form-label-left .ivu-form-item-label {
        text-align: center;
      }

   
       .ivu-form .ivu-form-item {
          margin-bottom: 15px;
        }

        .no-control-group {
          margin-bottom: 0;
        }
      
    


    .control-group {

      display: flex;
      padding: 10px 0;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
     }
      .control-group-content {
        flex: 1;
        display: -ms-flexbox;
        display: flex;
        justify-content: flex-end;
        align-items: center;

      }
    

    .editor-card {
	}
      .editor-card-item {
        position: relative;
        display: flex;
        background-color: #fff;
        margin: 15px 0;
        padding: 15px;
        border: 1px dashed #e5e5e5;
	}
        .image-editor {

          position: relative;
		}

          .has-not-choose-image {
            position: relative;
            width: 80px;
            height: 80px;
            box-sizing: border-box;
            text-align: center;
            border: 1px dashed #ddd;
            color: #38f;
            cursor: pointer;
            overflow: hidden;
		 }
           .has-not-choose-image .icon {
              font-size: 20px;
              line-height: 48px;
            }
          

          .has-choosed-image {
            position: relative;
            width: 80px;
            height: 80px;
            border: 1px solid #e5e5e5;
            text-align: center;
            overflow: hidden;
		  }
            .thumb-image {
              min-height: 80px;
              box-sizing: border-box;
              vertical-align: bottom;
              max-height: 100%;
              max-width: 100%;
              height: 80px;
              width: 80px;
            }


            .modify-image {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 80px;
              height: 20px;
              line-height: 20px;
              font-size: 12px;
              color: #fff;
              background: rgba(0, 0, 0, .5);
              cursor: pointer;
            }
          

          .has-error {
            margin-top: 5px;
            color: #f44;
          }
        

        .has-choosed-image img{
          width: 100%;
        }

        .editor-form-content {
          width:100%;
          /* margin-left: 10px;*/
          padding-left: 0.625rem;
          padding-right: 0;
          box-sizing: border-box;
		 }

          .choose-link-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
		}

            .choose-link-style {
              display: flex;
              flex: 1;
              padding: .084em .417em;

              justify-content: space-between;
              align-items: center;
              border-color: rgba(51, 136, 255, 0.3);
              background: rgb(226, 243, 255);
              color: rgb(102, 102, 102);
              border-radius: .3em;
			 }

              .choose-link-content {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-right: .417em;
                height: 1.875rem;
                line-height: 1.875rem;
                max-width: 6.25rem;
		      } 
              .choose-link-content > span:nth-child(2) {
                  margin-left: 5px;
                  padding-left: 5px;
                  border-left: 1px solid #bbb;
                }
              
            

            .choose-link-modify {
              width: 40px;
              cursor: pointer;
              text-align: center;
            }
         
        

        .card-item-delete:hover {
          display: block;
        }

        .card-item-delete {
          display: none;
          position: absolute;
          cursor: pointer;
          font-size: 20px;
          right: -10px;
          top: -10px;
          color: #bbb;
          background: #fff;
          border-radius: 50%;
          z-index: 10;
        }
      
    

    .editor-card-create {

      display: flex;
      align-items: center;
      background: #fff;
      margin: 10px 0;
      padding: 10px;
      border: 1px dashed #e5e5e5;
      cursor: pointer;
      color: #38f;
    }

    .picture-wrap {
      cursor: pointer;
      border-radius: 4px;
      overflow: hidden;
      width: 120px;
      margin-left: 10px;
	}
	
      .no-picture {
        text-align: center;
        color: rgb(136, 136, 136);
        padding: 20px 0px;
        border-width: 1px;
        border-style: dashed;
        border-color: rgb(221, 222, 225);
        border-image: initial;
	 }
       .no-picture > p {
          font-size: 14px;
        }
      

      .has-picture {
        display: flex;
        height: 86px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(221, 222, 225);
        border-image: initial;
        text-align: center;
        align-items: center;
        justify-content: center;
	  }
       .has-picture > img {
          min-width: 20%;
          max-width: 100%;
        }
      

</style>
