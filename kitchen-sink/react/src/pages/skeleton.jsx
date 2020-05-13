import React from 'react';
import { Page, Navbar, BlockTitle, Block, List, ListItem, Card, SkeletonBlock, Row, Button } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      effect: null,
    };
  }
  render() {
    return (
      <Page>
        <Navbar title="Skeleton Layouts" backLink="返回"></Navbar>
        <Block strong>
          <p>Skeleton (or Ghost) elements designed to improve perceived performance and make app feels faster.</p>
          <p>Framework7 comes with two types of such elements: Skeleton Block and Skeleton Text. Skeleton block is a gray box that can be used as placeholder for any element. Skeleton text uses special built-in skeleton font to render each character of such text as gray rectangle. Skeleton text allows to make such elements responsive and feel more natural.</p>
          <p>It can be used in any places and with any elements.</p>
        </Block>

        <BlockTitle>Skeleton List</BlockTitle>
        <List mediaList className="skeleton-text">
          <ListItem
            title="Title"
            subtitle="Subtitle"
            text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
          >
            <SkeletonBlock style={{ width: '40px', height: '40px', 'border-radius': '50%' }} slot="media" />
          </ListItem>
          <ListItem
            title="Title"
            subtitle="Subtitle"
            text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
          >
            <SkeletonBlock style={{ width: '40px', height: '40px', 'border-radius': '50%' }} slot="media" />
          </ListItem>
        </List>

        <BlockTitle>Skeleton Card</BlockTitle>
        <Card
          className="skeleton-text"
          title="Card Header"
          content="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。 Cras consequat felis at consequat hendrerit."
          footer="Card Footer"
        ></Card>

        <BlockTitle>Loading Effects</BlockTitle>
        <Block strong>
          <p>It supports few loading effects:</p>
          <Row tag="p">
            <Button fill small round className="col" onClick={() => this.load('fade')}>Fade</Button>
            <Button fill small round className="col" onClick={() => this.load('blink')}>Blink</Button>
            <Button fill small round className="col" onClick={() => this.load('pulse')}>Pulse</Button>
          </Row>
        </Block>
        {this.state.loading
          ? (
            <List mediaList v-if="loading">
              {[1,2,3].map(n => (
                <ListItem
                  key={n}
                  className={`skeleton-text skeleton-effect-${this.state.effect}`}
                  title="Full Name"
                  subtitle="Position"
                  text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
                >
                  <SkeletonBlock style={{ width: '40px', height: '40px', 'border-radius': '50%' }} slot="media" />
                </ListItem>
              ))}
            </List>
          )
          : (
            <List mediaList>
              <ListItem
                title="John Doe"
                subtitle="CEO"
                text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
              >
                <img src="https://placeimg.com/80/80/people/1" style={{ width: '40px', height: '40px', 'border-radius': '50%' }} slot="media" />
              </ListItem>
              <ListItem
                title="Jane Doe"
                subtitle="Marketing"
                text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
              >
                <img src="https://placeimg.com/80/80/people/2" style={{ width: '40px', height: '40px', 'border-radius': '50%' }} slot="media" />
              </ListItem>
              <ListItem
                title="Kate Johnson"
                subtitle="Admin"
                text="滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。"
              >
                <img src="https://placeimg.com/80/80/people/3" style={{ width: '40px', height: '40px', 'border-radius': '50%' }} slot="media" />
              </ListItem>
            </List>
          )
        }
      </Page>
    );
  }
  load(effect) {
    var self = this;
    if (self.state.loading) return;
    self.setState({
      effect: effect,
      loading: true,
    });
    setTimeout(() => {
      self.setState({ loading: false });
    }, 3000);
  }
}
