<template>
  <div>
    <Navbar></Navbar>
    <b-container class="bv-example-row">
    <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
