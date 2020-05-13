<!-- svelte-ignore a11y-missing-attribute -->
<Page>
  <Navbar title="Sortable List" backLink="返回">
    <NavRight>
      <Link sortableToggle=".sortable">Toggle</Link>
    </NavRight>
  </Navbar>

  <Block>
    <p>Just click "Toggle" button on navigation bar to enable/disable sorting</p>
  </Block>
  <List sortable>
    <ListItem
      title="1 Jenna Smith"
      after="CEO">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="2 John Doe"
      after="Director">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="3 John Doe"
      after="Developer">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="4 Aaron Darling"
      after="Manager">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="5 Calvin Johnson"
      after="Accounter">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="6 John Smith"
      after="SEO">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="7 Chloe"
      after="Manager">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
  </List>
  <List mediaList sortable>
    <ListItem
      title="Yellow Submarine"
      after="$15"
      subtitle="Beatles"
      text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </ListItem>
    <ListItem
      title="Don't Stop Me Now"
      after="$22"
      subtitle="Queen"
      text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="80" />
    </ListItem>
    <ListItem
      title="Billie Jean"
      after="$16"
      subtitle="Michael Jackson"
      text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
      >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg" width="80" />
    </ListItem>
  </List>

  <BlockTitle>Opposite Side</BlockTitle>
  <List sortable sortableOpposite>
    <ListItem
      title="1 Jenna Smith"
      after="CEO">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="2 John Doe"
      after="Director">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="3 John Doe"
      after="Developer">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="4 Aaron Darling"
      after="Manager">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="5 Calvin Johnson"
      after="Accounter">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="6 John Smith"
      after="SEO">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
    <ListItem
      title="7 Chloe"
      after="Manager">
      <i class="icon icon-f7" slot="media" />
    </ListItem>
  </List>
</Page>
<script>
  import { Navbar, Page, Block, List, ListItem, NavRight, Link, Icon, BlockTitle } from 'framework7-svelte';
</script>
