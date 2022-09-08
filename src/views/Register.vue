<template>

<body>
    <div class="container">
        <div class="row main">
            <div class="panel-heading">
               <div class="panel-title text-center">
                       <h1 class="title">Register User</h1>
                       <hr />
                   </div>
            </div> 
            <div class="main-login main-center">
                <form class="form-horizontal" method="post" action="#">
                    
                    <div class="form-group">
                        <label for="name" class="cols-sm-2 control-label">Name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                <input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="last_name" class="cols-sm-2 control-label">Last name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                <input type="text" class="form-control" name="last_name" id="last_name"  placeholder="Enter your Last name"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email" class="cols-sm-2 control-label">Email</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="password" class="cols-sm-2 control-label">Password</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                <input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <button type="button" @click="registerUser()" class="btn btn-primary btn-lg btn-block login-button">Register</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>

</body>
</template>

<script>
    import { mapActions } from 'vuex';
    
    export default {
      name: 'Register',
    
      data() {
        return {
          user: {
            name: '',
            last_name: '',
            email: '',
            password: '',
          }
        }
      },
  
      methods: {

        ...mapActions([
        'register'
        ]),
        
        registerUser() {
        this.register({
            name: document.getElementById("name").value,
            last_name: document.getElementById("last_name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        });
        console.log(this.name)
        this.$router.push({name: 'Crud'})
      }

        
        // registerUser(){
        //     let newUser = {
        //         name : document.getElementById('name').value,
        //         last_name : document.getElementById('last_name').value,
        //         email : document.getElementById('email').value,
        //         password : document.getElementById('password').value,
        //     }

        //     console.log(newUser)
        //     fetch('http://localhost:8000/admin/users/register', {
        //         method: 'POST',
        //         mode: 'no-cors',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(newUser),
        //     }).then(res => res.json())
        //       .then(res => {
        //        console.log(res)
                
        //     })
        // }
        },

//         login(obj) {
      
//       fetch('http://localhost:8000/admin/auth/login', {
//           method: 'POST',
//           mode: 'no-cors',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(obj)
//       }).then(res => res.json())
//         .then(res => {
//           if (res.msg) {alert('Invalid email or password.')}
//           else {
//               setToken(res.token);
//     }
//   })
// }

        
    
    }
  </script>




<style scoped>
body, html{
     height: 100%;
 	background-repeat: no-repeat;
 	background-color: #d3d3d3;
 	font-family: 'Oxygen', sans-serif;
}

.main{
 	margin-top: 70px;
}

h1.title { 
	font-size: 50px;
	font-family: 'Passion One', cursive; 
	font-weight: 400; 
}

hr{
	width: 10%;
	color: #fff;
}

.form-group{
	margin-bottom: 15px;
}

label{
	margin-bottom: 15px;
}

input,
input::-webkit-input-placeholder {
    font-size: 11px;
    padding-top: 3px;
}

.main-login{
 	background-color: #fff;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

}

.main-center{
 	margin-top: 30px;
 	margin: 0 auto;
 	max-width: 330px;
    padding: 40px 40px;

}

.login-button{
	margin-top: 5px;
}

.login-register{
	font-size: 11px;
	text-align: center;
}

</style>