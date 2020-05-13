<template>
  <f7-page>
    <f7-navbar title="Radio" back-link="返回"></f7-navbar>
    <f7-block-title>Inline</f7-block-title>

    <f7-block strong>
      <p>Lorem <f7-radio name="demo-radio-inline"></f7-radio> ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo nihil aut eius commodi sint eveniet aliquid eligendi <f7-radio name="demo-radio-inline" checked></f7-radio> ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla mollitia!</p>
    </f7-block>

    <f7-block-title>Radio Group</f7-block-title>
    <f7-list>
      <f7-list-item radio radioIcon="start" title="Books" name="demo-radio-start" checked></f7-list-item>
      <f7-list-item radio radioIcon="start" title="Movies" name="demo-radio-start"></f7-list-item>
      <f7-list-item radio radioIcon="start" title="Food" name="demo-radio-start"></f7-list-item>
      <f7-list-item radio radioIcon="start" title="Drinks" name="demo-radio-start"></f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item radio radioIcon="end" title="Books" name="demo-radio-end" checked></f7-list-item>
      <f7-list-item radio radioIcon="end" title="Movies" name="demo-radio-end"></f7-list-item>
      <f7-list-item radio radioIcon="end" title="Food" name="demo-radio-end"></f7-list-item>
      <f7-list-item radio radioIcon="end" title="Drinks" name="demo-radio-end"></f7-list-item>
    </f7-list>


    <f7-block-title>With Media Lists</f7-block-title>
      <f7-list media-list>
        <f7-list-item
          radio
          radioIcon="start"
          checked
          name="demo-media-radio"
          value="1"
          title="Facebook"
          after="17:14"
          subtitle="New messages from John Doe"
          text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
        ></f7-list-item>
        <f7-list-item
          radio
          radioIcon="start"
          name="demo-media-radio"
          value="2"
          title="John Doe (via Twitter)"
          after="17:11"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
        ></f7-list-item>
        <f7-list-item
          radio
          radioIcon="start"
          name="demo-media-radio"
          value="3"
          title="Facebook"
          after="16:48"
          subtitle="New messages from John Doe"
          text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
        ></f7-list-item>
        <f7-list-item
          radio
          radioIcon="start"
          name="demo-media-radio"
          value="4"
          title="John Doe (via Twitter)"
          after="15:32"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
        ></f7-list-item>
      </f7-list>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7List, f7ListItem, f7Radio } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7List,
      f7ListItem,
      f7Radio,
    },
  };
</script>
