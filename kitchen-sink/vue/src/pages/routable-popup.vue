<template>
  <f7-popup>
    <f7-page>
      <f7-navbar title="Routable Popup">
        <f7-nav-right>
          <f7-link popup-close>关闭</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block strong>
        <p>This Popup was loaded using route link as standalone component</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      </f7-block>
    </f7-page>
  </f7-popup>
</template>
<script>
  import { f7Popup, f7Navbar, f7NavRight, f7Link, f7Page, f7List, f7ListItem, f7Block } from 'framework7-vue';
  export default {
    components: {
      f7Popup, f7Navbar, f7NavRight, f7Link, f7Page, f7List, f7ListItem, f7Block,
    },
  };
</script>
