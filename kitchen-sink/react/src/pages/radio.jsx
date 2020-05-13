import React from 'react';
import { Navbar, Page, BlockTitle, Block, List, ListItem, Radio } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Radio" backLink="返回"></Navbar>

    <BlockTitle>Inline</BlockTitle>
    <Block strong>
      <p>Lorem <Radio name="demo-radio-inline" value="inline-1"/> ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo nihil aut eius commodi sint eveniet aliquid eligendi <Radio name="demo-radio-inline" value="inline-2" defaultChecked /> ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla mollitia!</p>
    </Block>

    <BlockTitle>Radio Group</BlockTitle>
    <List>
      <ListItem radio radioIcon="start" title="Books" name="demo-radio-start" value="Books" defaultChecked />
      <ListItem radio radioIcon="start" title="Movies" value="Movies" name="demo-radio-start" />
      <ListItem radio radioIcon="start" title="Food" value="Food" name="demo-radio-start" />
      <ListItem radio radioIcon="start" title="Drinks" value="Drinks" name="demo-radio-start" />
    </List>

    <List>
      <ListItem radio radioIcon="end" title="Books" name="demo-radio-end" value="Books" defaultChecked />
      <ListItem radio radioIcon="end" title="Movies" value="Movies" name="demo-radio-end" />
      <ListItem radio radioIcon="end" title="Food" value="Food" name="demo-radio-end" />
      <ListItem radio radioIcon="end" title="Drinks" value="Drinks" name="demo-radio-end" />
    </List>


    <BlockTitle>With Media Lists</BlockTitle>
    <List mediaList>
      <ListItem
        radio
        radioIcon="start"
        defaultChecked
        name="demo-media-radio"
        value="1"
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      ></ListItem>
      <ListItem
        radio
        radioIcon="start"
        name="demo-media-radio"
        value="2"
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      ></ListItem>
      <ListItem
        radio
        radioIcon="start"
        name="demo-media-radio"
        value="3"
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      ></ListItem>
      <ListItem
        radio
        radioIcon="start"
        name="demo-media-radio"
        value="4"
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      ></ListItem>
    </List>
  </Page>
);
