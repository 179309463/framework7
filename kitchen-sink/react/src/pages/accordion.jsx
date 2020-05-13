import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  List,
  ListItem,
  AccordionContent,
  AccordionItem,
  AccordionToggle
} from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Accordion" backLink="返回" />

    <BlockTitle>List View Accordion</BlockTitle>
    <List accordionList>
      <ListItem accordionItem title="随机文字">
        <AccordionContent>
          <Block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Nested List">
        <AccordionContent>
          <List>
            <ListItem title="Item 1"></ListItem>
            <ListItem title="Item 2"></ListItem>
            <ListItem title="Item 3"></ListItem>
            <ListItem title="Item 4"></ListItem>
          </List>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="随机文字">
        <AccordionContent>
          <Block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>

    <BlockTitle>Inset Accordion</BlockTitle>
    <List accordionList inset>
      <ListItem accordionItem title="随机文字">
        <AccordionContent>
          <Block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Nested List">
        <AccordionContent>
          <List>
            <ListItem title="Item 1"></ListItem>
            <ListItem title="Item 2"></ListItem>
            <ListItem title="Item 3"></ListItem>
            <ListItem title="Item 4"></ListItem>
          </List>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="随机文字">
        <AccordionContent>
          <Block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>


    <BlockTitle>Opposite Side</BlockTitle>
    <List accordionList accordionOpposite>
      <ListItem accordionItem title="随机文字">
        <AccordionContent>
          <Block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Nested List">
        <AccordionContent>
          <List>
            <ListItem title="Item 1"></ListItem>
            <ListItem title="Item 2"></ListItem>
            <ListItem title="Item 3"></ListItem>
            <ListItem title="Item 4"></ListItem>
          </List>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="随机文字">
        <AccordionContent>
          <Block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
    </List>

    <BlockTitle>Custom Collapsible</BlockTitle>
    <Block inner accordionList>
      {Array.from(Array(3).keys()).map(n => (
        <AccordionItem key={n}>
          <AccordionToggle><b>Item {n + 1}</b></AccordionToggle>
          <AccordionContent>Content {n + 1}</AccordionContent>
        </AccordionItem>
      ))}
    </Block>
  </Page>
);

