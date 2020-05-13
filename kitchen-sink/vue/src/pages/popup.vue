<template>
  <f7-page @page:beforeremove="onPageBeforeRemove">
    <f7-navbar title="Popup" back-link="返回"></f7-navbar>
    <f7-block strong>
      <p>Popup is a modal window with any HTML content that pops up over App's main content. Popup as all other overlays is part of so called "Temporary Views".</p>
      <p>
        <f7-button fill popup-open=".demo-popup">Open Popup</f7-button>
      </p>
      <p>
        <f7-button fill @click="popupOpened = true">Open Via Prop Change</f7-button>
      </p>
      <p>
        <f7-button fill @click="createPopup">Create Dynamic Popup</f7-button>
      </p>
    </f7-block>

    <f7-block-title>Swipe To Close</f7-block-title>
    <f7-block strong>
      <p>Popup can be closed with swipe to top or bottom:</p>
      <p>
        <f7-button fill popup-open=".demo-popup-swipe">Swipe To Close</f7-button>
      </p>
      <p>Or it can be closed with swipe on special swipe handler and, for example, only to bottom:</p>
      <p>
        <f7-button fill popup-open=".demo-popup-swipe-handler">With Swipe Handler</f7-button>
      </p>
    </f7-block>

    <f7-block-title>Push View</f7-block-title>
    <f7-block strong>
      <p>Popup can push view behind. By default has effect only when `safe-area-inset-top` is more than zero (iOS fullscreen webapp or iOS cordova app)</p>
      <p>
        <f7-button fill popup-open=".demo-popup-push">Popup Push</f7-button>
      </p>
    </f7-block>

    <f7-popup class="demo-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar title="Popup Title">
          <f7-nav-right>
            <f7-link popup-close>关闭</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <p>Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </f7-block>
      </f7-page>
    </f7-popup>

    <f7-popup push class="demo-popup-push">
      <f7-view>
        <f7-page>
          <f7-navbar title="Push Popup" large transparent>
            <f7-nav-right>
              <f7-link popup-close>关闭</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-popup class="demo-popup-swipe" swipe-to-close>
      <f7-page>
        <f7-navbar title="Swipe To Close">
          <f7-nav-right>
            <f7-link popup-close>关闭</f7-link>
          </f7-nav-right>
        </f7-navbar>

        <div style="height: 100%" class="display-flex justify-content-center align-items-center">
          <p>Swipe me up or down</p>
        </div>
      </f7-page>
    </f7-popup>

    <f7-popup class="demo-popup-swipe-handler" swipe-to-close="to-bottom" swipe-handler=".swipe-handler">
      <f7-page>
        <div slot="fixed" class="swipe-handler"></div>
        <f7-block-title large>Hello!</f7-block-title>
        <f7-block strong>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </f7-block>
      </f7-page>
    </f7-popup>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7Popup, f7BlockTitle, f7Block, f7NavRight, f7Link, f7Button, f7View } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7Popup,
      f7BlockTitle,
      f7Block,
      f7NavRight,
      f7Link,
      f7Button,
      f7View,
    },
    data() {
      return {
        popupOpened: false,
      };
    },
    methods: {
      createPopup() {
        const self = this;
        // Create popup
        if (!self.popup) {
          self.popup = self.$f7.popup.create({
            content: `
              <div class="popup">
                <div class="page">
                  <div class="navbar">
                    <div class="navbar-bg"></div>
                    <div class="navbar-inner">
                      <div class="title">Dynamic Popup</div>
                      <div class="right"><a href="#" class="link popup-close">关闭</a></div>
                    </div>
                  </div>
                  <div class="page-content">
                    <div class="block">
                      <p>This popup was created dynamically</p>
                      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
                    </div>
                  </div>
                </div>
              </div>
            `.trim(),
          });
        }
        // Open it
        self.popup.open();
      },
      onPageBeforeRemove() {
        const self = this;
        // Destroy popup when page removed
        if (self.popup) self.popup.destroy();
      },
    },
  };
</script>
