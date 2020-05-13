<template>
  <f7-page>
    <f7-navbar title="Login Screen" back-link="返回"></f7-navbar>
    <f7-block>
      <p>Framework7 comes with ready to use Login Screen layout. It could be used inside of page or inside of popup (Embedded) or as a standalone overlay:</p>
    </f7-block>

    <f7-list>
      <f7-list-item link="/login-screen-page/" title="As Separate Page"></f7-list-item>
    </f7-list>

    <f7-block>
      <f7-button raised large fill login-screen-open=".demo-login-screen">As Overlay</f7-button>
    </f7-block>

    <f7-block>
      <f7-button raised large fill @click="loginScreenOpened = true">Open Via Prop Change</f7-button>
    </f7-block>

    <f7-login-screen class="demo-login-screen" :opened="loginScreenOpened" @loginscreen:closed="loginScreenOpened = false">
      <f7-page login-screen>
        <f7-login-screen-title>Framework7</f7-login-screen-title>
        <f7-list form>
          <f7-list-input
            label="Username"
            type="text"
            placeholder="Your username"
            :value="username"
            @input="username = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            label="Password"
            type="password"
            placeholder="Your password"
            :value="password"
            @input="password = $event.target.value"
          ></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-button @click="signIn">Sign In</f7-list-button>
          <f7-block-footer>Some text about login information.<br>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-login-screen>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7Link, f7LoginScreen, f7List, f7ListItem, f7Block, f7Button, f7LoginScreenTitle, f7BlockFooter, f7ListButton, f7ListInput } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7Link,
      f7LoginScreen,
      f7List,
      f7ListItem,
      f7Block,
      f7Button,
      f7LoginScreenTitle,
      f7BlockFooter,
      f7ListButton,
      f7ListInput,
    },
    data() {
      return {
        loginScreenOpened: false,
        username: '',
        password: '',
      };
    },
    methods: {
      signIn() {
        const self = this;
        const app = self.$f7;

        app.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
          app.loginScreen.close();
        });
      },
    },
  };
</script>
