<script>
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
  name: 'GigsComponent',
  props: {
    isMobile: Boolean
  },
  data(){
    return {
      store
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
}
</script>

<template>

<div class="em-container" id="vi">
    <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    :navigation="!isMobile"
    class="mySwiper"
    id="swiper"
  >
    <swiper-slide v-for="(video, index) in store.gigsVideos" :key="index">
      <video :src="video.url" controls :autoplay="isMobile"></video>
    </swiper-slide>
  </swiper>
  </div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
  height: 80vh;
  background-color: #333;
  padding: 1.5rem 0;
}

#swiper {
  height: 100%;
}

video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>