<template>
  <f7-page>
    <f7-navbar title="3D Cube" back-link="返回"></f7-navbar>
    <div data-effect="cube" class="swiper-container swiper-init demo-swiper demo-swiper-cube">
      <div class="swiper-wrapper">
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-1.jpg)" class="swiper-slide">Slide 1</div>
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-2.jpg)" class="swiper-slide">Slide 2</div>
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-3.jpg)" class="swiper-slide">Slide 3</div>
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-4.jpg)" class="swiper-slide">Slide 4</div>
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-5.jpg)" class="swiper-slide">Slide 5</div>
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-6.jpg)" class="swiper-slide">Slide 6</div>
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-7.jpg)" class="swiper-slide">Slide 7</div>
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-8.jpg)" class="swiper-slide">Slide 8</div>
        <div style="background-image:url(https://cdn.framework7.io/placeholder/people-800x800-9.jpg)" class="swiper-slide">Slide 9</div>
      </div>
    </div>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
    },
  };
</script>
