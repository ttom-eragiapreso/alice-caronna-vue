<script>
  import { store } from "../data/store";
  export default {
    name: "BioComponent",
    props: {
      isMobile: Boolean,
    },
    data() {
      return {
        store,
      };
    },
  };
</script>

<template>
  <div class="em-container">
    <div class="container d-flex align-items-center">
      <p :class="{ 'big-padding': !isMobile }">
        {{ this.store.bio }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../styles/partials/mixin" as *;
  @use "../styles/partials/variables" as *;

  .em-container {
    // height: 100vh;
    background-color: $muted-bg-color;
  }

  p {
    border-top: 1px solid $accent-bg-color;
    border-bottom: 1px solid $accent-bg-color;
    color: $primary-bg-color;
    font-size: 1.2rem;
    padding: 2rem 0;
  }

  .big-padding {
    padding: 5rem 0;
    font-size: 2rem;
  }
</style>
