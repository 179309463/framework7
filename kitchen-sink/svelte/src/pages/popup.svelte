<Page onPageBeforeRemove={onPageBeforeRemove}>
  <Navbar title="Popup" backLink="返回"></Navbar>
  <Block strong>
    <p>Popup is a modal window with any HTML content that pops up over App's main content. Popup as all other overlays is part of so called "Temporary Views".</p>
    <p>
      <Button fill popupOpen=".demo-popup">Open Popup</Button>
    </p>
    <p>
      <Button fill onClick={() => popupOpened = true}>Open Via Prop Change</Button>
    </p>
    <p>
      <Button fill onClick={createPopup}>Create Dynamic Popup</Button>
    </p>
  </Block>

  <BlockTitle>Swipe To Close</BlockTitle>
  <Block strong>
    <p>Popup can be closed with swipe to top or bottom:</p>
    <p>
      <Button fill popupOpen=".demo-popup-swipe">Swipe To Close</Button>
    </p>
    <p>Or it can be closed with swipe on special swipe handler and, for example, only to bottom:</p>
    <p>
      <Button fill popupOpen=".demo-popup-swipe-handler">With Swipe Handler</Button>
    </p>
  </Block>

  <BlockTitle>Push View</BlockTitle>
  <Block strong>
    <p>Popup can push view behind. By default has effect only when `safe-area-inset-top` is more than zero (iOS fullscreen webapp or iOS cordova app)</p>
    <p>
      <Button fill popupOpen=".demo-popup-push">Popup Push</Button>
    </p>
  </Block>

  <Popup class="demo-popup" opened={popupOpened} onPopupClosed={() => popupOpened = false}>
    <Page>
      <Navbar title="Popup Title">
        <NavRight>
          <Link popupClose>关闭</Link>
        </NavRight>
      </Navbar>
      <Block>
        <p>Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      </Block>
    </Page>
  </Popup>

  <Popup push class="demo-popup-push">
    <View>
      <Page>
        <Navbar title="Push Popup" large transparent>
          <NavRight>
            <Link popupClose>关闭</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </Block>
      </Page>
    </View>
  </Popup>

  <Popup class="demo-popup-swipe" swipeToClose>
    <Page>
      <Navbar title="Swipe To Close">
        <NavRight>
          <Link popupClose>关闭</Link>
        </NavRight>
      </Navbar>

      <div style="height: 100%" class="display-flex justify-content-center align-items-center">
        <p>Swipe me up or down</p>
      </div>
    </Page>
  </Popup>

  <Popup class="demo-popup-swipe-handler" swipeToClose="to-bottom" swipeHandler=".swipe-handler">
    <Page>
      <div slot="fixed" class="swipe-handler"></div>
      <BlockTitle large>Hello!</BlockTitle>
      <Block strong>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      </Block>
    </Page>
  </Popup>
</Page>
<script>
  import { f7, Navbar, Page, Popup, BlockTitle, Block, NavRight, Link, Button, View } from 'framework7-svelte';

  let popupOpened = false;
  let dynamicPopup;

  function createPopup() {
    // Create popup
    if (!dynamicPopup) {
      dynamicPopup = f7.popup.create({
        content: `
          <div class="popup">
            <div class="page">
              <div class="navbar">
                <div class="navbar-inner">
                  <div class="navbar-bg"></div>
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
    dynamicPopup.open();
  }

  function onPageBeforeRemove() {
    // Destroy popup when page removed
    if (dynamicPopup) dynamicPopup.destroy();
  }
</script>
