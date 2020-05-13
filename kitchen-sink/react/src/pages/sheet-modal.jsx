import React from 'react';
import { Page, Navbar, Sheet, PageContent, Toolbar, BlockTitle, Block, Button, Link, Row, List, ListItem } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sheetOpened: false,
    };
  }
  render() {
    return (
      <Page onPageBeforeOut={this.onPageBeforeOut.bind(this)} onPageBeforeRemove={this.onPageBeforeRemove.bind(this)}>
        <Navbar title="Sheet Modal" backLink="返回"></Navbar>
        <Block strong>
          <p>Sheet Modals slide up from the bottom of the screen to reveal more content. Such modals allow to create custom overlays with custom content.</p>
          <Row tag="p">
            <Button className="col" fill sheetOpen=".demo-sheet">Open Sheet</Button>
            <Button className="col" fill onClick={this.createSheet.bind(this)}>Create Dynamic Sheet</Button>
          </Row>
          <p>
            <Button className="col" fill sheetOpen=".demo-sheet-top">Top Sheet</Button>
          </p>
          <p>
            <Button className="col" fill onClick={() => {this.setState({sheetOpened: true})}}>Open Via Prop Change</Button>
          </p>
        </Block>

        <BlockTitle>Push View</BlockTitle>
        <Block strong>
          <p>Sheet can push view behind on open. By default it has effect only when `safe-area-inset-top` is more than zero (iOS fullscreen webapp or iOS cordova app)</p>
          <p>
            <Button fill sheetOpen=".demo-sheet-push">Sheet Push</Button>
          </p>
        </Block>

        <BlockTitle>Swipeable Sheet</BlockTitle>
        <Block strong>
          <p>Sheet modal can be closed with swipe to top (for top Sheet) or bottom (for default Bottom sheet):</p>
          <p>
            <Button fill sheetOpen=".demo-sheet-swipe-to-close">Swipe To Close</Button>
          </p>
          <p>Also there is swipe-step that can be set on Sheet modal to expand it with swipe:</p>
          <p>
            <Button fill sheetOpen=".demo-sheet-swipe-to-step">Swipe To Step</Button>
          </p>
        </Block>

        <Sheet className="demo-sheet" opened={this.state.sheetOpened} onSheetClosed={() => {this.setState({sheetOpened: false})}}>
          <Toolbar>
            <div className="left"></div>
            <div className="right">
              <Link sheetClose>关闭</Link>
            </div>
          </Toolbar>
          {/*  Scrollable sheet content */}
          <PageContent>
            <Block>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            </Block>
          </PageContent>
        </Sheet>

        <Sheet top className="demo-sheet-top">
          <Toolbar bottom>
            <div className="left"></div>
            <div className="right">
              <Link sheetClose>关闭</Link>
            </div>
          </Toolbar>
          {/*  Scrollable sheet content */}
          <PageContent>
            <Block>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            </Block>
          </PageContent>
        </Sheet>

        <Sheet className="demo-sheet-push" push>
          <Toolbar>
            <div className="left"></div>
            <div className="right">
              <Link sheetClose>关闭</Link>
            </div>
          </Toolbar>
          <PageContent>
            <Block>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            </Block>
          </PageContent>
        </Sheet>

        <Sheet
          className="demo-sheet-swipe-to-close"
          style={{height: 'auto'}}
          swipeToClose
          push
          backdrop
        >
          <div className="swipe-handler"></div>

          <PageContent>
            <BlockTitle large>Hello!</BlockTitle>
            <Block>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
              <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
            </Block>
          </PageContent>
        </Sheet>

        <Sheet
          className="demo-sheet-swipe-to-step"
          style={{height: 'auto'}}
          swipeToClose
          swipeToStep
          push
          backdrop
        >
          <div className="swipe-handler" onClick={() => this.toggleSwipeStep()}></div>
          <div className="sheet-modal-swipe-step">
            <div className="display-flex padding justify-content-space-between align-items-center">
              <div style={{fontSize: '18px'}}><b>Total:</b></div>
              <div style={{fontSize: '22px'}}><b>$500</b></div>
            </div>
            <div className="padding-horizontal padding-bottom">
              <Button large fill>Make Payment</Button>
              <div className="margin-top text-align-center">Swipe up for more details</div>
            </div>
          </div>
          <BlockTitle medium className="margin-top">Your order:</BlockTitle>
          <List noHairlines>
            <ListItem title="Item 1">
              <b slot="after" className="text-color-black">$200</b>
            </ListItem>
            <ListItem title="Item 2">
              <b slot="after" className="text-color-black">$180</b>
            </ListItem>
            <ListItem title="Delivery">
              <b slot="after" className="text-color-black">$120</b>
            </ListItem>
          </List>
        </Sheet>
      </Page>
    );
  }
  toggleSwipeStep() {
    const self = this;
    self.$f7.sheet.stepToggle('.demo-sheet-swipe-to-step');
  }
  createSheet() {
    const self = this;
    const $ = self.$$;
    // Create sheet modal
    if (!self.sheet) {
      self.sheet = self.$f7.sheet.create({
        content: `
          <div className="sheet-modal">
            <div className="toolbar">
              <div className="toolbar-inner justify-content-flex-end">
                <a href="#" className="link sheet-close">关闭</a>
              </div>
            </div>
            <div className="sheet-modal-inner">
              <div className="page-content">
                <div className="block">
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
  }
  onPageBeforeOut() {
    const self = this;
    // Close opened sheets on page out
    self.$f7.sheet.close();
  }
  onPageBeforeRemove() {
    const self = this;
    // Destroy sheet modal when page removed
    if (self.sheet) self.sheet.destroy();
  }
};
