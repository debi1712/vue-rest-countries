
<script setup>

  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue';


</script>

<template>

  <div class="bg-veryDarkBlueDark">
   
    <Navbar />
    <router-view />
    <Footer />

  </div>
  
</template>

<style scoped>

</style>
