<template>
  <div id="app">
     <Navbar />
     <WorkSection/>
     <main>
      <router-view/>
     </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Navbar from './components/navbar.vue'
import WorkSection from './components/workSection.vue'
export default {
  components: {
    Navbar,
    WorkSection
  }
}
</script>

<style>
#app{
 background-color: white;
}
</style>
