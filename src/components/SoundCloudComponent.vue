<script>
import {store} from '../data/store'
export default {
  name: 'SoundCloudComponent',
  props: {
    isMobile: Boolean
  },
  data(){
    return {
      store,
      soundCloudLink: 'https://soundcloud.com/alice-caronna/sets/alice-new/s-cuTxp5mX8hd?si=27110eeb51114fc9946acf4e0e8ae9d1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
    }
  }
}
</script>

<template>
  <div class="em-container" id="sc">

    <div class="container-fluid d-flex flex-column align-items-center justify-content-center">
      <h2 :class="{'font-size' : isMobile}">Ascolta in anteprima i miei prossimi singoli</h2>
    <a :href="this.soundCloudLink" target="_blank"><font-awesome-icon icon="fa-brands fa-soundcloud" id="sound-cloud"/></a>
    </div>
   
    
    
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


.em-container {
  height: 100vh;
  background-color: $soundcloud-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 5rem;
  }
  #sound-cloud {
    font-size: 10rem;
  }
  a {
    color: black;
    transition: all .5s ease;
    &:hover {
      color: rgb(255, 225, 225);
    }
  }
}



h2.font-size {
  font-size: 2.4rem;
  text-align: center;
}

</style>