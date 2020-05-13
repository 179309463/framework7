<template>
  <f7-page>
    <f7-block-title>左侧面板</f7-block-title>
    <f7-block>
      <p>This is a left side panel. You can close it by clicking outsite or on this link: <f7-link panel-close>close me</f7-link>. You can put here anything, even another isolated view like in  <f7-link panel-open="right">Right Panel</f7-link></p>
    </f7-block>
    <f7-block-title>主页面导航</f7-block-title>
    <f7-list>
      <f7-list-item link="/accordion/" title="Accordion" panel-close></f7-list-item>
      <f7-list-item link="/action-sheet/" title="Action Sheet" panel-close></f7-list-item>
      <f7-list-item link="/badge/" title="Badge" panel-close></f7-list-item>
      <f7-list-item link="/buttons/" title="Buttons" panel-close></f7-list-item>
      <f7-list-item link="/cards/" title="Cards" panel-close></f7-list-item>
      <f7-list-item link="/checkbox/" title="Checkbox" panel-close></f7-list-item>
      <f7-list-item link="/chips/" title="Chips/Tags" panel-close></f7-list-item>
      <f7-list-item link="/contacts-list/" title="Contacts List" panel-close></f7-list-item>
      <f7-list-item link="/data-table/" title="Data Table" panel-close></f7-list-item>
    </f7-list>
    <f7-block>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>
  </f7-page>
</template>
<script>
  import { f7Page, f7BlockTitle, f7Block, f7List, f7ListItem, f7Link } from 'framework7-vue';

  export default {
    components: {
      f7Page,
      f7BlockTitle,
      f7Block,
      f7List,
      f7ListItem,
      f7Link,
    },
  };
</script>
