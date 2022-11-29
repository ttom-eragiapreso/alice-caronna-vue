<script>
// Import Swiper Vue.js components
import {store} from '../data/store'
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "/style.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  name: 'PhotoGalleryComponent',
  props: {
    isMobile: Boolean
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      store
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>


<template>

  <div class="em-container" id="ph">
    <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }"
    :modules="modules"
    :navigation="!isMobile"
    class="mySwiper"
    id="swiper"
  >
    <swiper-slide v-for="(img, index) in store.sliderImg" :key="index">
      <img :src="img.url" alt="">
    </swiper-slide>
  </swiper>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


.em-container {
  height: 85vh;
  background-color: $primary-bg-color;
  padding: 1rem 0;
}

#swiper {
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>