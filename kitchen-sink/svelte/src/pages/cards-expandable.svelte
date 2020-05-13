<Page>
  <Navbar title="Cards Expandable" backLink="返回" />

  <Block>
    <p>In addition to usual <a href="/cards/">Cards</a> there are also Expandable Cards that allow to store more information and illustrations about particular subject.</p>
  </Block>

  <div class="demo-expandable-cards">
    <Card expandable>
      <CardContent padding={false}>
        <div class="bg-color-red" style="height: 300px">
          <CardHeader textColor="white" class="display-block">
            Framework7
            <br />
            <small style="opacity: 0.7">Build Mobile Apps</small>
          </CardHeader>
          <Link cardClose color="white" class="card-opened-fade-in" style="position: absolute; right: 15px; top: 15px" iconF7="xmark_circle_fill" />
        </div>
        <div class="card-content-padding">
          <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel. It is also an indispensable prototyping apps tool to show working app prototype as soon as possible in case you need to. Framework7 is created by Vladimir Kharlampidi (iDangero.us).</p>
          <p>The main approach of the Framework7 is to give you an opportunity to create iOS and Android (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7 is full of freedom. It doesn't limit your imagination or offer ways of any solutions somehow. Framework7 gives you freedom!</p>
          <p>Framework7 is not compatible with all platforms. It is focused only on iOS and Android (Material) to bring the best experience and simplicity.</p>
          <p>Framework7 is definitely for you if you decide to build iOS and Android hybrid app (Cordova or PhoneGap) or web app that looks like and feels as great native iOS or Android (Material) apps.</p>
          <p>
            <Button fill round large cardClose color="red">关闭</Button>
          </p>
        </div>
      </CardContent>
    </Card>

    <Card expandable>
      <CardContent padding={false}>
        <div class="bg-color-yellow" style="height: 300px">
          <CardHeader textColor="black" class="display-block">
            Framework7
            <br/>
            <small style="opacity: 0.7">Build Mobile Apps</small>
          </CardHeader>
          <Link cardClose color="black" class="card-opened-fade-in" style="position: absolute; right: 15px; top: 15px" iconF7="xmark_circle_fill" />
        </div>
        <div class="card-content-padding">
          <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel. It is also an indispensable prototyping apps tool to show working app prototype as soon as possible in case you need to. Framework7 is created by Vladimir Kharlampidi (iDangero.us).</p>
          <p>The main approach of the Framework7 is to give you an opportunity to create iOS and Android (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7 is full of freedom. It doesn't limit your imagination or offer ways of any solutions somehow. Framework7 gives you freedom!</p>
          <p>Framework7 is not compatible with all platforms. It is focused only on iOS and Android (Material) to bring the best experience and simplicity.</p>
          <p>Framework7 is definitely for you if you decide to build iOS and Android hybrid app (Cordova or PhoneGap) or web app that looks like and feels as great native iOS or Android (Material) apps.</p>
          <p>
            <Button fill round large cardClose color="yellow" textColor="black">关闭</Button>
          </p>
        </div>
      </CardContent>
    </Card>

    <Card expandable>
      <CardContent padding={false}>
        <div style="background: url(./img/beach.jpg) no-repeat center bottom; background-size: cover; height: 240px"></div>
        <Link cardClose color="white" class="card-opened-fade-in" style="position: absolute; right: 15px; top: 15px" iconF7="xmark_circle_fill" />
        <CardHeader style={{height: '60px'}}>Beach, Goa</CardHeader>
        <div class="card-content-padding">
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>
            <Button fill round large cardClose>关闭</Button>
          </p>
        </div>
      </CardContent>
    </Card>

    <Card expandable>
      <CardContent padding={false}>
        <div style="background: url(./img/monkey.jpg) no-repeat center top; background-size: cover; height: 400px">
          <CardHeader textColor="white">Monkeys</CardHeader>
          <Link cardClose color="white" class="card-opened-fade-in" style="position: absolute; right: 15px; top: 15px" iconF7="xmark_circle_fill" />
        </div>
        <div class="card-content-padding">
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
          <p>
            <Button fill round large cardClose>关闭</Button>
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</Page>

<script>
  import { Navbar, Page, Block, Card, CardHeader, CardContent, Link, Button } from 'framework7-svelte';
</script>
