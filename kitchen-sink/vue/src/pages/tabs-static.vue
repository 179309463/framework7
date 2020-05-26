<template>
  <f7-page :page-content="false">
    <f7-navbar title="Static Tabs" back-link="返回"></f7-navbar>
    <f7-toolbar bottom tabbar>
      <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
      <f7-link tab-link="#tab-2">Tab 2</f7-link>
      <f7-link tab-link="#tab-3">Tab 3</f7-link>
    </f7-toolbar>
    <f7-tabs>
      <f7-tab id="tab-1" tab-active ptr :ptr-mousewheel="true" @ptr:refresh="loadMore1">
        <f7-list media-list>
          <f7-list-item
            v-for="(item, index) in items1"
            :key="index"
            :title="item.title"
            :subtitle="item.author">
            <img slot="media" :src="item.cover" width="44" />
          </f7-list-item>

          <f7-block-footer>
            <p>Just pull page down to let the magic happen.<br>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
          </f7-block-footer>
        </f7-list>
      </f7-tab>
      <f7-tab id="tab-2" ptr :ptr-mousewheel="true" @ptr:refresh="loadMore2">
        <f7-list media-list>
          <f7-list-item
            v-for="(item, index) in items2"
            :key="index"
            :title="item.title"
            :subtitle="item.author">
            <img slot="media" :src="item.cover" width="44" />
          </f7-list-item>

          <f7-block-footer>
            <p>Just pull page down to let the magic happen.<br>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
          </f7-block-footer>
        </f7-list>
      </f7-tab>
      <f7-tab id="tab-3" ptr :ptr-mousewheel="true" @ptr:refresh="loadMore3">
        <f7-list media-list>
          <f7-list-item
            v-for="(item, index) in items3"
            :key="index"
            :title="item.title"
            :subtitle="item.author">
            <img slot="media" :src="item.cover" width="44" />
          </f7-list-item>

          <f7-block-footer>
            <p>Just pull page down to let the magic happen.<br>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
          </f7-block-footer>
        </f7-list>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7Block, f7Tabs, f7Tab, f7Link, f7Toolbar, f7List, f7ListItem, f7BlockFooter } from 'framework7-vue';

  export default {
    components: {
      f7Navbar, f7Page, f7Block, f7Tabs, f7Tab, f7Link, f7Toolbar, f7List, f7ListItem, f7BlockFooter
    },
    data() {
      return {
        items1: [
          {
            title: 'Yellow Submarine',
            author: 'Beatles',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-1.jpg',
          },
          {
            title: 'Don\'t Stop Me Now',
            author: 'Queen',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-2.jpg',
          },
          {
            title: 'Billie Jean',
            author: 'Michael Jackson',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-3.jpg',
          },
        ],
        items2: [
          {
            title: 'Yellow Submarine',
            author: 'Beatles',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-1.jpg',
          },
          {
            title: 'Don\'t Stop Me Now',
            author: 'Queen',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-2.jpg',
          },
          {
            title: 'Billie Jean',
            author: 'Michael Jackson',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-3.jpg',
          },
        ],
        items3: [
          {
            title: 'Yellow Submarine',
            author: 'Beatles',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-1.jpg',
          },
          {
            title: 'Don\'t Stop Me Now',
            author: 'Queen',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-2.jpg',
          },
          {
            title: 'Billie Jean',
            author: 'Michael Jackson',
            cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-3.jpg',
          },
        ],
        songs: ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'],
        authors: ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'],
      };
    },
    methods: {
      loadMore1(done) {
        const self = this;

        setTimeout(() => {
          const picURL = `https://cdn.framework7.io/placeholder/abstract-88x88-${(Math.floor(Math.random() * 10) + 1)}.jpg`;
          const song = self.songs[Math.floor(Math.random() * self.songs.length)];
          const author = self.authors[Math.floor(Math.random() * self.authors.length)];

          self.items1.push({
            title: song,
            author,
            cover: picURL,
          });

          done();
        }, 1000);
      },
      loadMore2(done) {
        const self = this;

        setTimeout(() => {
          const picURL = `https://cdn.framework7.io/placeholder/abstract-88x88-${(Math.floor(Math.random() * 10) + 1)}.jpg`;
          const song = self.songs[Math.floor(Math.random() * self.songs.length)];
          const author = self.authors[Math.floor(Math.random() * self.authors.length)];

          self.items2.push({
            title: song,
            author,
            cover: picURL,
          });

          done();
        }, 1000);
      },
      loadMore3(done) {
        const self = this;

        setTimeout(() => {
          const picURL = `https://cdn.framework7.io/placeholder/abstract-88x88-${(Math.floor(Math.random() * 10) + 1)}.jpg`;
          const song = self.songs[Math.floor(Math.random() * self.songs.length)];
          const author = self.authors[Math.floor(Math.random() * self.authors.length)];

          self.items3.push({
            title: song,
            author,
            cover: picURL,
          });

          done();
        }, 1000);
      },
    },
  };
</script>
