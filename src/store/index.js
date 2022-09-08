import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      auth_token: '' ,
      movies: []
  },

  mutations: {
    setToken(state, auth_token) {
      state.auth_token = auth_token;
      localStorage.auth_token = auth_token;
    },

    getMovies(state, allMovies) {
      state.movies = allMovies;
    },
  },

  actions: {
    register({ commit }, accreditation) {
        axios.post('http://localhost:8000/admin/users/register', { 
          name: accreditation.name, 
          last_name: accreditation.last_name, 
          email: accreditation.email, 
          password: accreditation.password, 
          })
          .then(res => ({status: res.status, data: res.data}))
          .then(res => {
                    if (res.status != 200) {alert('Invalid email or password.!')}
                    else {
                        commit('setToken', res.data.auth_token);
                    }
                })
    },

    login({ commit }, accreditation) {
        axios.post('http://localhost:8000/admin/auth/login', { 
          username: accreditation.username,
          password: accreditation.password })
            .then(res => {
                if (res.msg) {  
                    alert(res.msg);
                }
                else{
                  console.log(res.data.token);
                    commit('setToken', res.data.auth_token);

                }
            })
    },

    loadAllMovies({commit}){

      fetch('http://localhost:8000/admin/movies/', this.movies ,{
          method: "GET",   
          mode: 'no-cors'
      })
      .then(response => response.json())
        .then(res => { 
          commit('getMovies', res);
          //this.movies = res;
        })
    },

    socket_movies({ commit }) {
      commit('getMovies', this.movies);
    }

},

  modules: {
  }
})
