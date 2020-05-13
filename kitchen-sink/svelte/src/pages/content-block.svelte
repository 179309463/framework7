<Page>
  <Navbar title="Content Block" backLink="返回" />

  <p>This paragraph is outside of content block. Not cool, but useful for any custom elements with custom styling.</p>

  <Block>
    <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
  </Block>

  <Block strong>
    <p>Here comes another text block with additional "block-strong" class. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
  </Block>

  <BlockTitle>Block title</BlockTitle>
  <Block>
    <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
  </Block>

  <BlockTitle>Another ultra long content block title</BlockTitle>
  <Block strong>
    <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
  </Block>

  <BlockTitle>Inset</BlockTitle>
  <Block strong inset>
    <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
  </Block>

  <BlockTitle>Tablet Inset</BlockTitle>
  <Block strong mediumInset>
    <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
  </Block>

  <BlockTitle>With Header & Footer</BlockTitle>
  <Block>
    <BlockHeader>Block Header</BlockHeader>
    <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
    <BlockFooter>Block Footer</BlockFooter>
  </Block>

  <BlockHeader>Block Header</BlockHeader>
  <Block>
    <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
  </Block>
  <BlockFooter>Block Footer</BlockFooter>

  <Block strong>
    <BlockHeader>Block Header</BlockHeader>
    <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
    <BlockFooter>Block Footer</BlockFooter>
  </Block>

  <BlockHeader>Block Header</BlockHeader>
  <Block strong>
    <p>Here comes paragraph within content block. 滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 </p>
  </Block>
  <BlockFooter>Block Footer</BlockFooter>

  <BlockTitle large>Block Title Large</BlockTitle>
  <Block strong>
    <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
  </Block>

  <BlockTitle medium>Block Title Medium</BlockTitle>
  <Block strong>
    <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
  </Block>
</Page>

<script>
  import { Page, Navbar, BlockTitle, BlockHeader, BlockFooter, Block } from 'framework7-svelte';
</script>
