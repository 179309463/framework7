import React from 'react';
import { Page, Navbar, BlockTitle, Block, List, ListItem, Link } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="右侧面板"></Navbar>
    <BlockTitle>右侧面板</BlockTitle>
    <Block>
      <p>This is a right side panel. You can close it by clicking outsite or on this link: <Link panelClose>close me</Link>. You can put here anything, even another isolated view.</p>
    </Block>
    <BlockTitle>面板导航</BlockTitle>
    <List>
      <ListItem link="/panel-right-1/" title="右侧面板页面1"></ListItem>
      <ListItem link="/panel-right-2/" title="右侧面板页面2"></ListItem>
    </List>
  </Page>
);
