import React from 'react';
import { Navbar, Page, Block } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Lazy Load Images" backLink="返回"></Navbar>
    <Block strong>
      <p>Lazy Load delays loading of images on page while they are outside of viewport until user scrolls to them.</p>
      <p>It will make the page load faster, improve scrolling performance and also save traffic.</p>
    </Block>
    <Block strong>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-1.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 Morbi tempus viverra lectus sit amet lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet, semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel scelerisque dui. Morbi varius nibh eu finibus rutrum.</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-2.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-3.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-4.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-5.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-6.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 Praesent laoreet nisl eget neque blandit lobortis. Sed sagittis risus id vestibulum finibus. Cras vestibulum sem et massa hendrerit maximus. Vestibulum suscipit tristique iaculis. Nam vitae risus non eros auctor tincidunt quis vel nulla. Sed volutpat, libero ac blandit vehicula, est sem gravida lectus, sed imperdiet sapien risus ut neque.</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-7.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-8.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 Morbi tempus viverra lectus sit amet lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet, semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel scelerisque dui. Morbi varius nibh eu finibus rutrum.</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/people-500x500-1.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p> <img data-src="https://cdn.framework7.io/placeholder/nature-500x500-10.jpg" width="1500" height="1500" className="lazy lazy-fadeIn demo-lazy"/></p>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
      <p><b>Using as background image:</b></p>
      <div data-background="https://cdn.framework7.io/placeholder/people-500x500-10.jpg" className="lazy lazy-fadeIn demo-lazy"></div>
      <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
    </Block>
  </Page>
);
