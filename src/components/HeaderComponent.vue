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
                <a :href="social.href" target="_blank" class="pe-4">
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

.active {
  color: $accent-bg-color;
}


// Hamburgher preso dal sito

#menu_checkbox {
  display: none;
}

label {
  // position: absolute;
  // top: 50%;
  // right: 0;
  // left: 0;
  display: block;
  width: 60px;
  aspect-ratio: 1/1;
  // margin: 0px auto 0 auto;
  cursor: pointer;
}

label:before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f44336;
  transition: 1.2s cubic-bezier(0, 0.96, 1, 0.02) background-color;
}

label div {
  position: relative;
  top: 0;
  height: 3px;
  background-color: #fff;
  margin-bottom: 12px;
  transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width,
    0.3s ease right;
  border-radius: 2px;
}

label div:first-child {
  transform-origin: 0;
}

label div:last-child {
  margin-bottom: 0;
  transform-origin: 60px;
}

label div:nth-child(2) {
  right: 0;
  width: 60px;
}

#menu_checkbox:checked + label:before {
  background-color: #4caf50;
}

#menu_checkbox:checked + label div:first-child {
  top: -6px;
  transform: rotateZ(45deg);
}

#menu_checkbox:checked + label div:last-child {
  top: 6px;
  transform: rotateZ(45deg);
}

#menu_checkbox:checked + label div:nth-child(2) {
  width: 85px;
  top: 0;
  right: 13px;
  transform: rotateZ(-45deg);
}

</style>