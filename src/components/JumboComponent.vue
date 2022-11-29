<script>
import {store} from '../data/store'
export default {
  name: 'JumboComponent',
  props: {
    landingImg: String,
    artistName: String,
    isMobile: Boolean
  },

  data(){
    return {
      store,
    }
  },
  methods:{

  }
}
</script>

<template>

  <div class="em-container">

      <img :src="landingImg" :alt="artistName">

  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
 height: calc(100vh - $header-height);
 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
}

</style>