
<template>
  <div id="app">
    <div toggleable="lg" type="dark" variant="info">

      <div class="ms-auto">
        <center>
        <router-link to="/">Home</router-link> 
        </center>    
        <center>
        <router-link to="/login">Login</router-link> 
        </center>
        <center>
        <router-link to="/register">Register</router-link> 
        </center>
        <center>
        <router-link to="/crud">CRUD ZEZANJE</router-link> 
        </center>
      </div>
    
      </div>
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
