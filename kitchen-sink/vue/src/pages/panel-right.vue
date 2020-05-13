<template>
  <f7-page>
    <f7-navbar title="右侧面板"></f7-navbar>
    <f7-block-title>右侧面板</f7-block-title>
    <f7-block>
      <p>This is a right side panel. You can close it by clicking outsite or on this link: <f7-link panel-close>close me</f7-link>. You can put here anything, even another isolated view.</p>
    </f7-block>
    <f7-block-title>面板导航</f7-block-title>
    <f7-list>
      <f7-list-item link="/panel-right-1/" title="右侧面板页面1"></f7-list-item>
      <f7-list-item link="/panel-right-2/" title="右侧面板页面2"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  import { f7Page, f7Navbar, f7BlockTitle, f7Block, f7List, f7ListItem, f7Link } from 'framework7-vue';

  export default {
    components: {
      f7Page,
      f7Navbar,
      f7BlockTitle,
      f7Block,
      f7List,
      f7ListItem,
      f7Link,
    },
  };
</script>
