<script>
import {store} from '../data/store'
export default {
  name: 'VideoComponent',
  props: {
    video: Object
  },
  data(){
    return {
      store
    }
  }
}
</script>

<template>

  
<div class="video-container">
  <video :src="video.url" controls></video>
</div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


</style>