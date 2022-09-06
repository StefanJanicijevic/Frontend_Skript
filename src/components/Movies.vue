<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ movies.length }}</h1>

    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Year of release</th>
      <th scope="col">Rating</th>
      <th scope="col">Is Trending</th>
      <th scope="col">Length</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for = "movieItem in movies">
      <td>{{movieItem.title}}</td>
      <td>{{movieItem.year_of_release}}</td>
      <td>{{movieItem.rating}}</td>
      <td>{{movieItem.isTrending}}</td>
      <td>{{movieItem.length_in_minutes}}</td>
    </tr>
  </tbody>
</table>

  </div>
</template>



<script>

import { mapActions,  mapState } from 'vuex';

export default {
  name: 'Movies',

  props: {
    msg: String
  },

  data() {
    return {
      Movie : {title: '', year_of_release: '', rating: '', isTrending: '', length_in_minutes: '' },
      movies: [],
    }
  },

  methods: {

    // addMovie(){
    //     let newMovie = {
    //       title: this.Movie.title,
    //       year_of_release: this.Movie.year_of_release,
    //       rating: this.Movie.tratingitle,
    //       isTrending: this.Movie.isTrending,
    //       length_in_minutes: this.Movie.length_in_minutes,
    //     }
        
    //     fetch('http://localhost:8000/admin/movies', newMovie ,{
    //       method: "GET",   
    //   })
    // },

    // loadMovie(){

    //   fetch('http://localhost:8000/admin/movies/6310a3e396710b305cfb34b7' , {
    //       method: "GET"
    //     //  mode: 'no-cors',
    //     // headers: {
    //     //     "Content-Type": "application/json",
    //     // },
    //   }).then(response => response.json())
    //     .then(res => {
    //       this.movie = res
    //     });
    // },

    loadAllMovies(){
      fetch('http://localhost:8000/admin/movies', this.movies ,{
          method: "GET",   
      })
      .then(response => response.json())
        .then(res => {  
          this.movies = res;
        })
    }
  },

  mounted() {
    this.loadAllMovies()
  },

}

</script>

