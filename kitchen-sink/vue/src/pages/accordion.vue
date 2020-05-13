<template>
  <f7-page>
    <f7-navbar title="Accordion" back-link="返回"></f7-navbar>

    <f7-block-title>List View Accordion</f7-block-title>
    <f7-list accordion-list>
      <f7-list-item accordion-item title="随机文字">
        <f7-accordion-content>
          <f7-block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Nested List">
        <f7-accordion-content>
          <f7-list>
            <f7-list-item title="Item 1"></f7-list-item>
            <f7-list-item title="Item 2"></f7-list-item>
            <f7-list-item title="Item 3"></f7-list-item>
            <f7-list-item title="Item 4"></f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="随机文字">
        <f7-accordion-content>
          <f7-block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Inset Accordion</f7-block-title>
    <f7-list accordion-list inset>
      <f7-list-item accordion-item title="随机文字">
        <f7-accordion-content>
          <f7-block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Nested List">
        <f7-accordion-content>
          <f7-list>
            <f7-list-item title="Item 1"></f7-list-item>
            <f7-list-item title="Item 2"></f7-list-item>
            <f7-list-item title="Item 3"></f7-list-item>
            <f7-list-item title="Item 4"></f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="随机文字">
        <f7-accordion-content>
          <f7-block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Opposite Side</f7-block-title>
    <f7-list accordion-list accordion-opposite>
      <f7-list-item accordion-item title="随机文字">
        <f7-accordion-content>
          <f7-block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Nested List">
        <f7-accordion-content>
          <f7-list>
            <f7-list-item title="Item 1"></f7-list-item>
            <f7-list-item title="Item 2"></f7-list-item>
            <f7-list-item title="Item 3"></f7-list-item>
            <f7-list-item title="Item 4"></f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="随机文字">
        <f7-accordion-content>
          <f7-block>
            <p>
              滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Custom Collapsible</f7-block-title>
    <f7-block inner accordion-list>
      <f7-accordion-item v-for="n in 3" :key="n">
        <f7-accordion-toggle><b>Item {{n}}</b></f7-accordion-toggle>
        <f7-accordion-content>Content {{n}}</f7-accordion-content>
      </f7-accordion-item>
    </f7-block>

  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7AccordionItem, f7AccordionToggle, f7AccordionContent, f7List, f7ListItem } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7AccordionItem,
      f7AccordionToggle,
      f7AccordionContent,
      f7List,
      f7ListItem,
    }
  }
</script>
