<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-6">
                <h3> Add New movie </h3>
                    <div>
                        <label>Title</label>
                        <input class="form-control" id="title" v-model="Movie.title" required>
                    </div>
                    <div>
                        <label>Year of release</label>
                        <input class="form-control" id="year_of_release" v-model="Movie.year_of_release" required>
                    </div>
                    <div>
                        <label>Rating</label>
                        <input class="form-control" id="rating" v-model="Movie.rating" required>
                    </div>
                    <div>
                        <label>Is it trending</label>
                        <input class="form-control" id="is_trending" v-model="Movie.isTrending" required>
                    </div>
                    <div>
                        <label> Length in minutes </label>
                        <input class="form-control" id="length_in_minutes" v-model="Movie.length_in_minutes" required>
                    </div>
                    
                    <br> 
                    <button type="button" @click="addMovie()" class="btn btn-primary">Add movie</button>
            </div>
        </div>

        <div class="posts-list row">
            <div class="card mt-4 col-md-6 bg-ligt" v-for = "movieItem in movies">
                <div class="card-body" v-bind:key = "movieItem.id">
                    <h1 class="card-title">Title: {{movieItem.title}}</h1>
                    <h2 class="card-title">Year: {{movieItem.year_of_release}}</h2>
                    <h3 class="card-title">Rating: {{movieItem.Rating}}</h3>
                    <h4 class="card-title">Trening: {{movieItem.isTrending}}</h4>
                    <h5 class="card-title">Year: {{movieItem.length_in_minutes}}</h5>
                    <button type="button" id="edit-post">Edit</button>
                    <button type="button" id="delete-post" @click="deleteMovie(movieItem._id)">Delete</button>
                </div>
            </div>
        </div>
    </div>

    
</template>


<script>

import axios from 'axios';
import { mapActions,  mapState } from 'vuex';

    
    export default {
      name: 'Crud',
    
      data() {
        return {
          Movie : {title: '', year_of_release: '', rating: '', isTrending: '', length_in_minutes: '' },
         // movies: [],
        }
      },
    
      methods: {

        ...mapActions([
      'loadAllMovies'
      ]),

        refreshPage(){
          window.location.reload();
        }, 

        deleteMovie(id){
          // let id = document.getElementById("delete-post").parentElement.dataset.id;
           console.log(id)


          fetch('http://localhost:8000/admin/movies/' + id ,{
              method: "DELETE",
            }).then(res => res.json())
              .then(() => location.reload())
        },
        
        addMovie(){
            //    let newMovie = {
            //   title: this.Movie.title,
            //   year_of_release: this.Movie.year_of_release,
            //   rating: this.Movie.rating,
            //   isTrending: this.Movie.isTrending,
            //   length_in_minutes: this.Movie.length_in_minutes,
            // }

            let newMovie = {
              title: document.getElementById('title').value,
              year_of_release: document.getElementById('year_of_release').value,
              rating: document.getElementById('rating').value,
              isTrending: document.getElementById('is_trending').value,
              length_in_minutes: document.getElementById('length_in_minutes').value,
            }
            console.log(newMovie);

      //       fetch('http://localhost:8000/admin/movies' , {
      //         method: 'POST',
      //         mode: 'no-cors',
      //           headers: { 'Content-Type': 'application/json' },
      //           body: JSON.stringify(newMovie)
      //         }).then(res => res.json().then(data => newMovie))
        
      // },
      axios.post('http://localhost:8000/admin/movies' , newMovie,{
        mode: 'no-cors',
       // headers: { 'Content-Type': 'application/json' }
      })
              .then((response) => {
                 console.log(response);

              })
              .catch((error) => {
                 console.log(error);
              })
          },


        // loadAllMovies(){

        //   fetch('http://localhost:8000/admin/movies/', this.movies ,{
        //       method: "GET",   
        //       mode: 'no-cors'
        //   })
        //   .then(response => response.json())
        //     .then(res => { 
        //       //console.log(res) 
        //       this.movies = res;
        //     })
        // }
      },

      computed: {

      ...mapState([
        'movies'
      ])  },
    
      mounted() {
        this.loadAllMovies()
      },
    
    }
    
    </script>