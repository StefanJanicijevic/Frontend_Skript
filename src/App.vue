
<template>
  <div id="app">
    <div toggleable="lg" type="dark" variant="info">

      <div class="ms-auto">
        <center>
        <router-link v-if="!token" to="/">Home</router-link> 
        </center>    
        <center>
        <router-link v-if="!token" to="/login">Login</router-link> 
        </center>
        <center>
        <router-link v-if="!token" to="/register">Register</router-link> 
        </center>
        <center>
        <router-link to="/crud">CRUD</router-link> 
        </center>
        <center>
        <router-link to="/socket">Socket</router-link> 
        </center>
      </div>
    
      </div>
    <router-view />
  </div>
</template>

<script>

  import { mapState, mapMutations } from 'vuex';
  
  
  export default {
    name: 'App',
  
    computed: {
      ...mapState([
        'token',
      ])
    },
  
    mounted() {
  
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
    },
  
    methods: {
      ...mapMutations([
        'setToken'
      ]),
    
    },
  
  
  
  }
  </script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
