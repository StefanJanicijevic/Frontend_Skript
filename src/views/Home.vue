<template>
  <div class="home">
    <Movies msg="Movies"/>
  </div>
</template>

<script>
import Movies from '@/components/Movies.vue'

export default {
  name: 'Home',
  components: {
    Movies
  }
}
</script>
