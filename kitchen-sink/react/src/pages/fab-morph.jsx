import React from 'react';
import { Navbar, Page, BlockTitle, Block, Fab, Link, Toolbar, Icon } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Floating Action Button Morph" backLink="返回"></Navbar>
    <Toolbar tabbar labels bottom className="fab-morph-target">
      <Link tabLink tabLinkActive iconIos="f7:envelope_fill" iconAurora="f7:envelope_fill" iconMd="material:email" text="Inbox"/>
      <Link tabLink iconIos="f7:calendar_fill" iconAurora="f7:calendar_fill" iconMd="material:today" text="Calendar"/>
      <Link tabLink iconIos="f7:cloud_upload_fill" iconAurora="f7:cloud_upload_fill" iconMd="material:file_upload" text="Upload"/>
    </Toolbar>
    <Fab position="right-bottom" morphTo=".toolbar.fab-morph-target">
      <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
    </Fab>
    <Fab position="left-bottom" morphTo=".demo-fab-sheet.fab-morph-target">
      <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
    </Fab>
    <Fab position="center-bottom" morphTo=".demo-fab-fullscreen-sheet.fab-morph-target">
      <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
    </Fab>
    <div className="list links-list demo-fab-sheet fab-morph-target" slot="fixed">
      <ul>
        <li><a href="#" className="fab-close">Link 1</a></li>
        <li><a href="#" className="fab-close">Link 2</a></li>
        <li><a href="#" className="fab-close">Link 3</a></li>
        <li><a href="#" className="fab-close">Link 4</a></li>
      </ul>
    </div>
    <div className="demo-fab-fullscreen-sheet fab-morph-target" slot="fixed">
      <BlockTitle>Choose Something</BlockTitle>
      <div className="list links-list">
        <ul>
          <li><a href="#" className="fab-close">Link 1</a></li>
          <li><a href="#" className="fab-close">Link 2</a></li>
          <li><a href="#" className="fab-close">Link 3</a></li>
          <li><a href="#" className="fab-close">Link 4</a></li>
        </ul>
      </div>
    </div>

    <Block>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </Block>
    <Block>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </Block>
  </Page>
);