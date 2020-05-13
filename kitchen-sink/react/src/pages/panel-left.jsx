import React from 'react';
import { Page, BlockTitle, Block, List, ListItem, Link } from 'framework7-react';

export default () => (
  <Page>
    <BlockTitle>左侧面板</BlockTitle>
    <Block>
      <p>This is a left side panel. You can close it by clicking outsite or on this link: <Link panelClose>close me</Link>. You can put here anything, even another isolated view like in  <Link panelOpen="right">Right Panel</Link></p>
    </Block>
    <BlockTitle>主页面导航</BlockTitle>
    <List>
      <ListItem link="/accordion/" title="Accordion" panelClose></ListItem>
      <ListItem link="/action-sheet/" title="Action Sheet" panelClose></ListItem>
      <ListItem link="/badge/" title="Badge" panelClose></ListItem>
      <ListItem link="/buttons/" title="Buttons" panelClose></ListItem>
      <ListItem link="/cards/" title="Cards" panelClose></ListItem>
      <ListItem link="/checkbox/" title="Checkbox" panelClose></ListItem>
      <ListItem link="/chips/" title="Chips/Tags" panelClose></ListItem>
      <ListItem link="/contacts-list/" title="Contacts List" panelClose></ListItem>
      <ListItem link="/data-table/" title="Data Table" panelClose></ListItem>
    </List>
    <Block>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </Block>
  </Page>
);