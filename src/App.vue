<script>
import HeaderComponentVue from './components/HeaderComponent.vue';
import JumboComponentVue from './components/JumboComponent.vue';
import BioComponentVue from './components/BioComponent.vue';
import PhotoGalleryComponentVue from './components/PhotoGalleryComponent.vue';
import SoundCloudComponentVue from './components/SoundCloudComponent.vue';
import GigsComponentVue from './components/GigsComponent.vue';
import ComingSoonComponentVue from './components/ComingSoonComponent.vue';
import FooterComponentVue from './components/FooterComponent.vue';
import {store} from '../src/data/store'
export default {
  name: 'App',
  components: {
    HeaderComponentVue,
    JumboComponentVue,
    BioComponentVue,
    PhotoGalleryComponentVue,
    SoundCloudComponentVue,
    GigsComponentVue,
    ComingSoonComponentVue,
    FooterComponentVue
  },
  data(){
    return {
      store,
      isMobile: false
    }
  },

  computed: {
    photoToggle(){
      let imgPath = ''
      this.isMobile? imgPath = 'src/assets/Media/WA-img/landing-photo.jpeg' : imgPath = 'src/assets/Media/WA-img/AlterantiveLandingImg.jpeg'
      return imgPath
    }
  },

  mounted(){
    store.screenWidth = window.screen.width
    if(store.screenWidth < 1200) this.isMobile = true
  }
}
</script>

<template>
  
<HeaderComponentVue artistName="Alice Caronna"/>

<JumboComponentVue artistName="Alice Caronna" 
:landingImg="photoToggle" :isMobile="this.isMobile"/>


<BioComponentVue :isMobile="this.isMobile"/>
<PhotoGalleryComponentVue :isMobile="this.isMobile"/>
<SoundCloudComponentVue :isMobile="this.isMobile"/>
<GigsComponentVue/>
<ComingSoonComponentVue :isMobile="this.isMobile"/>
<FooterComponentVue/>

</template>




<style lang="scss">
@use './styles/general.scss' as*;


</style>