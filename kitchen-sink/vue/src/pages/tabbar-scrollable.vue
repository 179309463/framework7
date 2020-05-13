<template>
  <f7-page :page-content="false">
    <f7-navbar title="Tabbar Scrollable" back-link="返回">
      <f7-nav-right>
        <f7-link icon-md="material:compare_arrows" icon-ios="f7:arrow_up_arrow_down_circle_fill" icon-aurora="f7:arrow_up_arrow_down_circle_fill" @click="toggleToolbarPosition"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar :position="toolbarPosition" tabbar scrollable>
      <f7-link
        v-for="(tab, index) in tabs"
        :key="tab"
        :tab-link="`#tab-${tab}`"
        :tab-link-active="index === 0"
        >Tab {{tab}}</f7-link>
    </f7-toolbar>
    <f7-tabs>
      <f7-tab
        v-for="(tab, index) in tabs"
        :key="tab"
        :id="`tab-${tab}`"
        class="page-content"
        :tab-active="index === 0"
      >
        <f7-block>
          <p><b>Tab {{tab}} content</b></p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7Block, f7Tabs, f7Tab, f7Link, f7Toolbar, f7NavRight } from 'framework7-vue';

  export default {
    components: {
      f7Navbar, f7Page, f7Block, f7Tabs, f7Tab, f7Link, f7Toolbar, f7NavRight,
    },
    data() {
      return {
        tabs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        toolbarPosition: 'bottom',
      };
    },
    methods: {
      toggleToolbarPosition() {
        this.toolbarPosition = this.position === 'top' ? 'bottom' : 'top';
      },
    },
  };
</script>
