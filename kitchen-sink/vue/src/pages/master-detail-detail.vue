<template>
  <f7-page>
    <f7-navbar :title="`Detail Page ${$f7route.params.id}`" back-link="返回"></f7-navbar>
    <f7-block strong>
      <p><b>Detail Page {{$f7route.params.id}}</b></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。.</p>
    </f7-block>
  </f7-page>
</template>
<script>
  import { f7Page, f7Navbar, f7Block } from 'framework7-vue';

  export default {
    components: {
      f7Page,
      f7Navbar,
      f7Block,
    },
  };
</script>
