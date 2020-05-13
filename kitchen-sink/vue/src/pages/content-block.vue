<template>
  <f7-page>
    <f7-navbar title="Content Block" back-link="返回"></f7-navbar>
    <p>This paragraph is outside of content block. Not cool, but useful for any custom elements with custom styling.</p>

    <f7-block>
      <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
    </f7-block>

    <f7-block strong>
      <p>Here comes another text block with additional "block-strong" class. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
    </f7-block>

    <f7-block-title>Block title</f7-block-title>
    <f7-block>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>

    <f7-block-title>Another ultra long content block title</f7-block-title>
    <f7-block strong>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>

    <f7-block-title>Inset</f7-block-title>
    <f7-block strong inset>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>

    <f7-block-title>Tablet Inset</f7-block-title>
    <f7-block strong medium-inset>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>

    <f7-block-title>With Header & Footer</f7-block-title>
    <f7-block>
      <f7-block-header>Block Header</f7-block-header>
      <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
      <f7-block-footer>Block Footer</f7-block-footer>
    </f7-block>

    <f7-block-header>Block Header</f7-block-header>
    <f7-block>
      <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
    </f7-block>
    <f7-block-footer>Block Footer</f7-block-footer>

    <f7-block strong>
      <f7-block-header>Block Header</f7-block-header>
      <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
      <f7-block-footer>Block Footer</f7-block-footer>
    </f7-block>

    <f7-block-header>Block Header</f7-block-header>
    <f7-block strong>
      <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
    </f7-block>
    <f7-block-footer>Block Footer</f7-block-footer>

    <f7-block-title large>Block Title Large</f7-block-title>
    <f7-block strong>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>

    <f7-block-title medium>Block Title Medium</f7-block-title>
    <f7-block strong>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </f7-block>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7BlockHeader, f7BlockFooter } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7BlockHeader,
      f7BlockFooter,
    },
  };
</script>
