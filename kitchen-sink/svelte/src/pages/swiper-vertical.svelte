<Page>
  <Navbar title="Swiper Horizontal" backLink="返回"></Navbar>
  <Swiper class="demo-swiper" pagination params={{
    direction: 'vertical',
    pagination: {
      hideOnClick: true,
    }
  }}>
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
    <SwiperSlide>Slide 10</SwiperSlide>
  </Swiper>
</Page>
<script>
  import { Navbar, Page, Swiper, SwiperSlide } from 'framework7-svelte';
</script>
