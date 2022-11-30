<script>
import {store} from '../data/store'
export default {
  name: 'ComingSoonComponent',
  data(){
    return {
      store
    }
  },
  props: {
    isMobile: Boolean
  }
}
</script>

<template>
  <div class="em-container" id="cs">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-auto">
        <div class="col py-3" v-for="(img, index) in store.mvImgs" :key="index">
            <img :src="img.url" alt="">
        </div>
      </div>
      <div class="spacer"></div>
      <div class="row row-cols-1 row-cols-lg-auto">
        <div class="col" v-for="(video, index) in store.mvVids" :key="index">
          <video :src="video.url" controls :autoplay="isMobile"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


.em-container{
  padding: 3.5rem 0;
}


.spacer {
  width: 100%;
  height: 5px;
  background-color: $accent-bg-color;
  border-radius: 999px;
  margin: 3rem 0;
}

img, video{
  border-radius: 10px;
}

</style>