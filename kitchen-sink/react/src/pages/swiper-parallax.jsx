import React from 'react';
import { Navbar, Page, Swiper, SwiperSlide } from 'framework7-react';

export default () => (

  <Page>
    <Navbar title="Parallax" backLink="返回"></Navbar>
    <Swiper
      className="demo-swiper-parallax"
      pagination
      navigation
      colorTheme="white"
      params={{
        parallax: true,
        speed: 600,
      }}
    >
      <div
        slot="before-wrapper"
        data-swiper-parallax="-23%"
        style={{backgroundImage: 'url(https://cdn.framework7.io/placeholder/nightlife-1024x1024-2.jpg)'}}
        className="swiper-parallax-bg"
      ></div>
      <SwiperSlide>
        <div data-swiper-parallax="-300" className="swiper-slide-title">Slide 1</div>
        <div data-swiper-parallax="-200" className="swiper-slide-subtitle">Subtitle</div>
        <div data-swiper-parallax="-100" className="swiper-slide-text">
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div data-swiper-parallax="-300" className="swiper-slide-title">Slide 2</div>
        <div data-swiper-parallax="-200" className="swiper-slide-subtitle">Subtitle</div>
        <div data-swiper-parallax="-100" className="swiper-slide-text">
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div data-swiper-parallax="-300" className="swiper-slide-title">Slide 3</div>
        <div data-swiper-parallax="-200" className="swiper-slide-subtitle">Subtitle</div>
        <div data-swiper-parallax="-100" className="swiper-slide-text">
          <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </Page>

);
