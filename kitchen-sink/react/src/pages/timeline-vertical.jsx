import React from 'react';
import { Navbar, Page, BlockTitle } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Vertical Timeline" backLink="返回"></Navbar>
    <BlockTitle>Default</BlockTitle>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-item-date">21 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Some text goes here</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">22 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Another text goes here</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">23 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">24 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">One more text here</div>
        </div>
      </div>
    </div>
    <BlockTitle>Side By Side</BlockTitle>
    <div className="timeline timeline-sides">
      <div className="timeline-item">
        <div className="timeline-item-date">21 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Some text goes here</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">22 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Another text goes here</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">23 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Just plain text</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">24 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">One more text here</div>
        </div>
      </div>
    </div>
    <BlockTitle>Only Tablet Side By Side</BlockTitle>
    <div className="timeline medium-sides">
      <div className="timeline-item">
        <div className="timeline-item-date">21 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Some text goes here</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">22 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Another text goes here</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">23 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Just plain text</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">24 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">One more text here</div>
        </div>
      </div>
    </div>
    <BlockTitle>Forced Sides</BlockTitle>
    <div className="timeline timeline-sides">
      <div className="timeline-item timeline-item-right">
        <div className="timeline-item-date">21 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Some text goes here</div>
        </div>
      </div>
      <div className="timeline-item timeline-item-right">
        <div className="timeline-item-date">22 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Another text goes here</div>
        </div>
      </div>
      <div className="timeline-item timeline-item-left">
        <div className="timeline-item-date">23 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">Just plain text</div>
        </div>
      </div>
      <div className="timeline-item timeline-item-left">
        <div className="timeline-item-date">24 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">One more text here</div>
        </div>
      </div>
    </div>
    <BlockTitle>Rich Content</BlockTitle>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-item-date">21 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">12:56</div>
            <div className="timeline-item-title">Item Title</div>
            <div className="timeline-item-subtitle">Item Subtitle</div>
            <div className="timeline-item-text">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</div>
            <div className="timeline-item-time">15:07</div>
            <div className="timeline-item-title">Item Title</div>
            <div className="timeline-item-subtitle">Item Subtitle</div>
            <div className="timeline-item-text">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</div>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">22 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">
          <div className="timeline-item-inner">
            <div className="timeline-item-time">12:56</div>
            <div className="timeline-item-title">Item Title</div>
            <div className="timeline-item-subtitle">Item Subtitle</div>
            <div className="timeline-item-text">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</div>
          </div>
          <div className="timeline-item-inner">
            <div className="timeline-item-time">15:07</div>
            <div className="timeline-item-title">Item Title</div>
            <div className="timeline-item-subtitle">Item Subtitle</div>
            <div className="timeline-item-text">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</div>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">23 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content card no-safe-areas">
          <div className="card-header">Card Header</div>
          <div className="card-content card-content-padding">Card Content</div>
          <div className="card-footer">Card Footer</div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">24 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content list links-list inset no-safe-areas">
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-date">25 <small>DEC</small></div>
        <div className="timeline-item-divider"></div>
        <div className="timeline-item-content">Plain text</div>
      </div>
    </div>
    <BlockTitle>Inside Content Block</BlockTitle>
    <div className="block block-strong">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-item-date">21 <small>DEC</small></div>
          <div className="timeline-item-divider"></div>
          <div className="timeline-item-content">
            <div className="timeline-item-inner">Some text goes here</div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-date">22 <small>DEC</small></div>
          <div className="timeline-item-divider"></div>
          <div className="timeline-item-content">
            <div className="timeline-item-inner">Another text goes here</div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-date">23 <small>DEC</small></div>
          <div className="timeline-item-divider"></div>
          <div className="timeline-item-content">
            <div className="timeline-item-inner">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-date">24 <small>DEC</small></div>
          <div className="timeline-item-divider"></div>
          <div className="timeline-item-content">
            <div className="timeline-item-inner">One more text here</div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
