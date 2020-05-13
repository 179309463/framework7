<Page noToolbar noNavbar noSwipeback loginScreen>
  <LoginScreenTitle>Framework7</LoginScreenTitle>
  <List form>
    <ListInput
      label="Username"
      type="text"
      placeholder="Your username"
      value={username}
      onInput={(e) => username = e.target.value}
    />
    <ListInput
      label="Password"
      type="password"
      placeholder="Your password"
      value={password}
      onInput={(e) => password = e.target.value}
    />
  </List>
  <List>
    <ListButton onClick={signIn}>Sign In</ListButton>
  </List>
  <BlockFooter>Some text about login information.<br />滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</BlockFooter>
</Page>
<script>
  import { f7, Page, LoginScreenTitle, List, ListInput, ListButton, BlockFooter } from 'framework7-svelte';

  export let f7router;

  let username = '';
  let password = '';

  function signIn() {
    f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
      f7router.back();
    });
  }
</script>
