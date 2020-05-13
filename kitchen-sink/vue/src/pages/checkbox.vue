<template>
  <f7-page>
    <f7-navbar title="Checkbox" back-link="返回"></f7-navbar>
    <f7-block-title>Inline</f7-block-title>
    <f7-block strong>
      <p>Lorem <f7-checkbox name="checkbox-1"></f7-checkbox> ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo nihil aut eius commodi sint eveniet aliquid eligendi <f7-checkbox name="checkbox-2" checked></f7-checkbox> ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla mollitia!</p>
    </f7-block>

    <f7-block-title>Checkbox Group</f7-block-title>
    <f7-list>
      <f7-list-item checkbox title="Books" name="demo-checkbox" checked></f7-list-item>
      <f7-list-item checkbox title="Movies" name="demo-checkbox"></f7-list-item>
      <f7-list-item checkbox title="Food" name="demo-checkbox"></f7-list-item>
      <f7-list-item checkbox title="Drinks" name="demo-checkbox"></f7-list-item>
    </f7-list>

    <f7-block-title>Indeterminate State</f7-block-title>
    <f7-list>
      <f7-list-item
        checkbox
        title="Movies"
        name="demo-checkbox"
        :checked="movies.length === 2"
        :indeterminate="movies.length === 1"
        @change="onMoviesChange"
      >
        <ul slot="root">
          <f7-list-item
            checkbox
            title="Movie 1"
            name="demo-checkbox"
            value="Movie 1"
            :checked="movies.indexOf('Movie 1') >= 0"
            @change="onMovieChange"
          />
          <f7-list-item
            checkbox
            title="Movie 2"
            name="demo-checkbox"
            value="Movie 2"
            :checked="movies.indexOf('Movie 2') >= 0"
            @change="onMovieChange"
          />
        </ul>
      </f7-list-item>
    </f7-list>

    <f7-block-title>With Media Lists</f7-block-title>
    <f7-list media-list>
      <f7-list-item
        checkbox
        checked
        name="demo-media-checkbox"
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      ></f7-list-item>
      <f7-list-item
        checkbox
        name="demo-media-checkbox"
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      ></f7-list-item>
      <f7-list-item
        checkbox
        name="demo-media-checkbox"
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      ></f7-list-item>
      <f7-list-item
        checkbox
        name="demo-media-checkbox"
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7List, f7ListItem, f7Checkbox } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7List,
      f7ListItem,
      f7Checkbox,
    },
    data: function () {
      return {
        movies: ['Movie 1'],
      };
    },
    methods: {
      onMovieChange: function (e) {
        var self = this;
        var value = e.target.value;
        var movies = self.movies;
        if (e.target.checked) {
          movies.push(value);
        } else {
          movies.splice(movies.indexOf(value), 1);
        }
      },
      onMoviesChange: function (e) {
        var self = this;
        var movies = self.movies;
        if (movies.length === 1 || movies.length === 0) {
          self.movies = ['Movie 1', 'Movie 2'];
        } else if (movies.length === 2) {
          self.movies = [];
        }
      },
    }
  };
</script>
