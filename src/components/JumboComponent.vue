<script>
  import { store } from "../data/store";
  export default {
    name: "JumboComponent",
    props: {
      landingImg: String,
      artistName: String,
      isMobile: Boolean
    },

    data() {
      return {
        store
      };
    },
    methods: {}
  };
</script>

<template>
  <div class="em-container">
    <img
      :src="landingImg"
      :alt="artistName"
      :class="{ nudge: isMobile }" />
  </div>
</template>

<style lang="scss" scoped>
  @use "../styles/partials/mixin" as *;
  @use "../styles/partials/variables" as *;

  .em-container {
    height: calc(100vh - $header-height);
    margin-top: $header-height;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .nudge {
    object-position: -365px 0;
  }
</style>
