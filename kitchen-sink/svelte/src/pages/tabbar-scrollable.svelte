<Page pageContent={false}>
  <Navbar title="Tabbar Scrollable" backLink="返回">
    <NavRight>
      <Link iconMd="material:compare_arrows" iconIos="f7:arrow_up_arrow_down_circle_fill" iconAurora="f7:arrow_up_arrow_down_circle_fill" onClick={toggleToolbarPosition}></Link>
    </NavRight>
  </Navbar>
  <Toolbar tabbar scrollable position={toolbarPosition}>
    {#each tabs as tab, index}
      <Link
        tabLink={`#tab-${tab}`}
        tabLinkActive={index === 0}
      >Tab {tab}</Link>
    {/each}
  </Toolbar>
  <Tabs>
    {#each tabs as tab, index}
      <Tab
        id={`tab-${tab}`}
        class="page-content"
        tabActive={index === 0}
      >
        <Block>
          <p><b>Tab {tab} content</b></p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。. Itaque corrupti, quos asperiores unde aspernatur illum odio, eveniet. Fugiat magnam perspiciatis ex dignissimos, rerum modi ea nesciunt praesentium iusto optio rem?</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </Block>
      </Tab>
    {/each}
  </Tabs>
</Page>
<script>
  import { Navbar, Page, Block, Tabs, Tab, Link, Toolbar, NavRight } from 'framework7-svelte';

  let toolbarPosition = 'bottom';
  let tabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function toggleToolbarPosition() {
    toolbarPosition = toolbarPosition === 'top' ? 'bottom' : 'top';
  }

</script>
