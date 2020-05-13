<template>
  <f7-page @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <f7-navbar title="Sheet Modal" back-link="返回"></f7-navbar>
    <f7-block strong>
      <p>Sheet Modals slide up from the bottom of the screen to reveal more content. Such modals allow to create custom overlays with custom content.</p>
      <f7-row tag="p">
        <f7-button class="col" fill sheet-open=".demo-sheet">Open Sheet</f7-button>
        <f7-button class="col" fill @click="createSheet">Create Dynamic Sheet</f7-button>
      </f7-row>
      <p>
        <f7-button class="col" fill sheet-open=".demo-sheet-top">Top Sheet</f7-button>
      </p>
      <p>
        <f7-button class="col" fill @click="sheetOpened = true">Open Via Prop Change</f7-button>
      </p>
    </f7-block>

    <f7-block-title>Push View</f7-block-title>
    <f7-block strong>
      <p>Sheet can push view behind on open. By default it has effect only when `safe-area-inset-top` is more than zero (iOS fullscreen webapp or iOS cordova app)</p>
      <p>
        <f7-button fill sheet-open=".demo-sheet-push">Sheet Push</f7-button>
      </p>
    </f7-block>

    <f7-block-title>Swipeable Sheet</f7-block-title>
    <f7-block strong>
      <p>Sheet modal can be closed with swipe to top (for top Sheet) or bottom (for default Bottom sheet):</p>
      <p>
        <f7-button fill sheet-open=".demo-sheet-swipe-to-close">Swipe To Close</f7-button>
      </p>
      <p>Also there is swipe-step that can be set on Sheet modal to expand it with swipe:</p>
      <p>
        <f7-button fill sheet-open=".demo-sheet-swipe-to-step">Swipe To Step</f7-button>
      </p>
    </f7-block>

    <f7-sheet class="demo-sheet" :opened="sheetOpened" @sheet:closed="sheetOpened = false">
      <f7-toolbar>
        <div class="left"></div>
        <div class="right">
          <f7-link sheet-close>关闭</f7-link>
        </div>
      </f7-toolbar>
      <!-- Scrollable sheet content -->
      <f7-page-content>
        <f7-block>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </f7-block>
      </f7-page-content>
    </f7-sheet>

    <f7-sheet top class="demo-sheet-top">
      <f7-toolbar bottom>
        <div class="left"></div>
        <div class="right">
          <f7-link sheet-close>关闭</f7-link>
        </div>
      </f7-toolbar>
      <!-- Scrollable sheet content -->
      <f7-page-content>
        <f7-block>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </f7-block>
      </f7-page-content>
    </f7-sheet>

    <f7-sheet class="demo-sheet-push" push>
      <f7-toolbar>
        <div class="left"></div>
        <div class="right">
          <f7-link sheet-close>关闭</f7-link>
        </div>
      </f7-toolbar>
      <!-- Scrollable sheet content -->
      <f7-page-content>
        <f7-block>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </f7-block>
      </f7-page-content>
    </f7-sheet>

    <f7-sheet
      class="demo-sheet-swipe-to-close"
      style="height:auto"
      swipe-to-close
      push
      backdrop
    >
      <div class="swipe-handler"></div>

      <f7-page-content>
        <f7-block-title large>Hello!</f7-block-title>
        <f7-block>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </f7-block>
      </f7-page-content>
    </f7-sheet>

    <f7-sheet
      class="demo-sheet-swipe-to-step"
      style="height:auto"
      swipe-to-close
      swipe-to-step
      push
      backdrop
    >
      <div class="swipe-handler" @click="toggleSwipeStep"></div>
      <div class="sheet-modal-swipe-step">
        <div class="display-flex padding justify-content-space-between align-items-center">
          <div style="font-size: 18px"><b>Total:</b></div>
          <div style="font-size: 22px"><b>$500</b></div>
        </div>
        <div class="padding-horizontal padding-bottom">
          <f7-button large fill>Make Payment</f7-button>
          <div class="margin-top text-align-center">Swipe up for more details</div>
        </div>
      </div>
      <f7-block-title medium class="margin-top">Your order:</f7-block-title>
      <f7-list no-hairlines>
        <f7-list-item title="Item 1">
          <b slot="after" class="text-color-black">$200</b>
        </f7-list-item>
        <f7-list-item title="Item 2">
          <b slot="after" class="text-color-black">$180</b>
        </f7-list-item>
        <f7-list-item title="Delivery">
          <b slot="after" class="text-color-black">$120</b>
        </f7-list-item>
      </f7-list>
    </f7-sheet>
  </f7-page>
</template>
<script>
import { f7Page, f7Navbar, f7Sheet, f7PageContent, f7Toolbar, f7BlockTitle, f7Block, f7Button, f7Link, f7Row, f7List, f7ListItem } from 'framework7-vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7Sheet,
    f7PageContent,
    f7Toolbar,
    f7BlockTitle,
    f7Block,
    f7Button,
    f7Link,
    f7Row,
    f7List,
    f7ListItem,
  },
  data() {
    return {
      sheetOpened: false,
    };
  },
  methods: {
    toggleSwipeStep() {
      const self = this;
      self.$f7.sheet.stepToggle('.demo-sheet-swipe-to-step');
    },
    createSheet() {
      const self = this;
      const $ = self.$$;
      // Create sheet modal
      if (!self.sheet) {
        self.sheet = self.$f7.sheet.create({
          content: `
            <div class="sheet-modal">
              <div class="toolbar">
                <div class="toolbar-inner justify-content-flex-end">
                  <a href="#" class="link sheet-close">关闭</a>
                </div>
              </div>
              <div class="sheet-modal-inner">
                <div class="page-content">
                  <div class="block">
                    <p>This sheet modal was created dynamically</p>
                    <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
                  </div>
                </div>
              </div>
            </div>
          `.trim(),
        });
      }
      // Close inline sheet
      if ($('.demo-sheet.modal-in').length > 0) self.$f7.sheet.close('.demo-sheet');
      // Open it
      self.sheet.open();
    },
    onPageBeforeOut() {
      const self = this;
      // Close opened sheets on page out
      self.$f7.sheet.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy sheet modal when page removed
      if (self.sheet) self.sheet.destroy();
    },
  },
};
</script>
