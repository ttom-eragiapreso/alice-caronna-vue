<script>
export default {
  name: 'FooterComponent'
}
</script>

<template>
  <div class="em-container d-flex align-items-center justify-content-end">

    <div class="container d-flex justify-content-center justify-content-lg-end">
      <span>Made with 
        <font-awesome-icon icon="fa-regular fa-heart"/> and 
        <font-awesome-icon icon="fa-solid fa-mug-hot"/> by 
        <font-awesome-icon icon="fa-solid fa-t"/>
        <font-awesome-icon icon="fa-solid fa-t"/>
        <font-awesome-icon icon="fa-solid fa-o"/>
        <font-awesome-icon icon="fa-solid fa-m"/>
      </span>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


.em-container {
  background-color: $muted-bg-color;
  height: $header-height;
  color: $vibrant-bg-color;
}



</style>