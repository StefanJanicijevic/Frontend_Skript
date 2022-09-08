<template>


    <div>
        <input type="submit"  @click="submit()"  value="Submit">
    </div>

</template>

<script>

    import { mapActions } from 'vuex';
  
    export default {
      name: 'Socket',
  
      data() {
        return {
            movies: []
        }
      },
  
      methods: {
        ...mapActions([
        ]),
  
        onSubmit() {
          this.$socket.emit('movies', this.movies);
        }
      }
    }
  
  </script>
