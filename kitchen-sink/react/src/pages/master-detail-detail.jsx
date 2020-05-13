import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Page>
        <Navbar title={`Detail Page ${this.$f7route.params.id}`} backLink="返回"></Navbar>
        <Block strong>
          <p><b>Detail Page {this.$f7route.params.id}</b></p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 Pellentesque congue turpis et risus fringilla condimentum. Aliquam vestibulum est tempor, sagittis massa nec, dictum massa. Phasellus non viverra dui, eget aliquam sem. Donec eleifend dolor id arcu ultrices, vel ultrices dolor fringilla. Phasellus feugiat consectetur libero, eget luctus felis rhoncus at. Duis scelerisque ligula sit amet purus congue pulvinar. Proin a risus id nibh fermentum auctor. Vestibulum at sem a risus mollis iaculis. In vestibulum malesuada arcu id consectetur.</p>
        </Block>
      </Page>
    );
  }
}