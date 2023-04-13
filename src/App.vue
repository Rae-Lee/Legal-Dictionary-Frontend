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
