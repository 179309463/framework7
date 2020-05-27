<template>
  <f7-page :page-content="false">
    <f7-navbar title="Swipeable Tabs" back-link="返回"></f7-navbar>
    <f7-toolbar bottom tabbar>
      <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
      <f7-link tab-link="#tab-2">Tab 2</f7-link>
      <f7-link tab-link="#tab-3">Tab 3</f7-link>
    </f7-toolbar>
    <f7-tabs swipeable>
      <f7-tab id="tab-1" tab-active infinite :infinite-distance="50" :infinite-preloader="showPreloader1" @infinite="loadMore1">
        <f7-block-title>Scroll bottom</f7-block-title>
        <f7-list>
          <f7-list-item v-for="(item, index) in items1" :title="`Item ${item}`" :key="index"></f7-list-item>
        </f7-list>
      </f7-tab>
      <f7-tab id="tab-2" infinite :infinite-distance="50" :infinite-preloader="showPreloader2" @infinite="loadMore2">
        <f7-block-title>Scroll bottom</f7-block-title>
        <f7-list>
          <f7-list-item v-for="(item, index) in items2" :title="`Item ${item}`" :key="index"></f7-list-item>
        </f7-list>
      </f7-tab>
      <f7-tab id="tab-3" infinite :infinite-distance="50" :infinite-preloader="showPreloader3" @infinite="loadMore3">
        <f7-block-title>Scroll bottom</f7-block-title>
        <f7-list>
          <f7-list-item v-for="(item, index) in items3" :title="`Item ${item}`" :key="index"></f7-list-item>
        </f7-list>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7Block, f7BlockTitle, f7Tabs, f7Tab, f7Link, f7Toolbar, f7List, f7ListItem } from 'framework7-vue';

  export default {
    components: {
      f7Navbar, f7Page, f7Block, f7BlockTitle, f7Tabs, f7Tab, f7Link, f7Toolbar, f7List, f7ListItem
    },
    data() {
      return {
        items1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        allowInfinite1: true,
        showPreloader1: true,
        items2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        allowInfinite2: true,
        showPreloader2: true,
        items3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        allowInfinite3: true,
        showPreloader3: true,
      };
    },
    methods: {
      loadMore1() {
        const self = this;
        if (!self.allowInfinite1) return;
        self.allowInfinite1 = false;

        setTimeout(() => {
          if (self.items1.length >= 200) {
            self.showPreloader1 = false;
            return;
          }

          const itemsLength = self.items1.length;

          for (let i = 1; i <= 20; i += 1) {
            self.items1.push(itemsLength + i);
          }

          self.allowInfinite1 = true;
        }, 1000);
      },
      loadMore2() {
        const self = this;
        if (!self.allowInfinite2) return;
        self.allowInfinite2 = false;

        setTimeout(() => {
          if (self.items2.length >= 200) {
            self.showPreloader2 = false;
            return;
          }

          const itemsLength = self.items2.length;

          for (let i = 1; i <= 20; i += 1) {
            self.items2.push(itemsLength + i);
          }

          self.allowInfinite2 = true;
        }, 1000);
      },
      loadMore3() {
        const self = this;
        if (!self.allowInfinite3) return;
        self.allowInfinite3 = false;

        setTimeout(() => {
          if (self.items3.length >= 200) {
            self.showPreloader3 = false;
            return;
          }

          const itemsLength = self.items3.length;

          for (let i = 1; i <= 20; i += 1) {
            self.items3.push(itemsLength + i);
          }

          self.allowInfinite3 = true;
        }, 1000);
      },
    },
  };
</script>
