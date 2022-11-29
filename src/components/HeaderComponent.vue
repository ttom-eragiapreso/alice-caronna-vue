<script>
import {store} from '../data/store'
export default {
  name: 'HeaderComponent',
  components: {
  },
  props: {
    img: String,
    artistName: String
  },

  data(){
    return {
      store
    }
  },
  methods: {
    onlyOneActive(item){
      store.navBarLinks.forEach(link => link.current = false)
      item.current = true
    }
  },
  computed: {
    
  }
}
</script>

<template>
  <header>
    
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand fs-3" href="#">{{artistName}}</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item fs-3" v-for="(link, index) in store.navBarLinks" :key="index">
              <a class="nav-link"
              :class="{'active' : link.current}" 
              :href="link.id"
              @click="onlyOneActive(link)"
              >{{link.title}}</a>
            </li>

            <div class="spacer d-block d-lg-none"></div>

            <ul class="d-flex px-0 pt-3 socials-icons px-lg-3 pt-lg-0 align-items-center">
              <li class="nav-item" v-for="(social, index) in store.socialsIcons" :key="index">
                <a :href="social.href" class="pe-4">
                  <font-awesome-icon :icon="social.tag" class="fs-1 align-middle"/>
                </a>
              </li>
            </ul>

          </ul>
        </div>
      </div>
    </nav>
    
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.navbar {
  min-height: $header-height;
  border-bottom: 1px solid rgba(0, 0, 0, 0.647);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $primary-bg-color;
  z-index: 99999;
}

// header {
//   background-color: $primary-bg-color;
// }

.active {
  color: $accent-bg-color;
}

</style>