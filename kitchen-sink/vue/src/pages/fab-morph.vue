<template>
  <f7-page>
    <f7-navbar title="Floating Action Button Morph" back-link="返回"></f7-navbar>
    <f7-toolbar tabbar labels bottom class="fab-morph-target">
      <f7-link tab-link tab-link-active icon-ios="f7:envelope_fill" icon-aurora="f7:envelope_fill" icon-md="material:email" text="Inbox"/>
      <f7-link tab-link icon-ios="f7:calendar_fill" icon-aurora="f7:calendar_fill" icon-md="material:today" text="Calendar"/>
      <f7-link tab-link icon-ios="f7:cloud_upload_fill" icon-aurora="f7:cloud_upload_fill" icon-md="material:file_upload" text="Upload"/>
    </f7-toolbar>
    <f7-fab position="right-bottom" morph-to=".toolbar.fab-morph-target">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
    </f7-fab>
    <f7-fab position="left-bottom" morph-to=".demo-fab-sheet.fab-morph-target">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
    </f7-fab>
    <f7-fab position="center-bottom" morph-to=".demo-fab-fullscreen-sheet.fab-morph-target">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
    </f7-fab>
    <div class="list links-list demo-fab-sheet fab-morph-target" slot="fixed">
      <ul>
        <li><a href="#" class="fab-close">Link 1</a></li>
        <li><a href="#" class="fab-close">Link 2</a></li>
        <li><a href="#" class="fab-close">Link 3</a></li>
        <li><a href="#" class="fab-close">Link 4</a></li>
      </ul>
    </div>
    <div class="demo-fab-fullscreen-sheet fab-morph-target" slot="fixed">
      <f7-block-title>Choose Something</f7-block-title>
      <div class="list links-list">
        <ul>
          <li><a href="#" class="fab-close">Link 1</a></li>
          <li><a href="#" class="fab-close">Link 2</a></li>
          <li><a href="#" class="fab-close">Link 3</a></li>
          <li><a href="#" class="fab-close">Link 4</a></li>
        </ul>
      </div>
    </div>
    <f7-block>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>
    <f7-block>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。. Culpa ipsa debitis sed nihil eaque dolore cum iste quibusdam, accusamus doloribus, tempora quia quos voluptatibus corporis officia at quas dolorem earum!</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7Toolbar, f7Fab, f7Icon, f7Link } from 'framework7-vue';

  export default {
    components: {
      f7Navbar, f7Page, f7BlockTitle, f7Block, f7Toolbar, f7Fab, f7Icon, f7Link,
    },
  };
</script>
