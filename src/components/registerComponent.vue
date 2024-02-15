<template>
  <div class="main">
   <h1 class="email"> Email:</h1>
    <input class="email" v-model="email" placeholder="Email" type="Text">
    <h1 class="name"> Name:</h1>
    <input class="name" v-model="name" placeholder="Name" type="Text">
    <h1 class="password"> Password:</h1>
    <input class="password" v-model="password" placeholder="Password" type="Text">
    <button @click="register" class="register">register</button>
    <button @click="signup" class="signup">Sign up with Google</button>
  </div>
</template>

<script>
import axios from 'axios';
import { auth } from '../../firebaseConfig.mjs';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: 'registerComponent',
  data() {
    return { 
      email: '',
      name:'',
      password: ''
    }
  },
  methods:{
    async signup() {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        // You may add code here to handle successful sign up with Google
        this.$router.push('/mainMenu');
        
      } catch(error) {
        console.log(error);
      }
    },
    async register() {
      try {
        const response = await axios.post('http://localhost:3000/register', {
          email: this.email,
          name:this.name,
          password: this.password
        });
        console.log(response.data);
        this.$router.push('/mainMenu');
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
.username{} transform anything with the class username same for .password{} and .signin{} -->
<style >

.email{ 
  transform-origin: center;
  font-family: cascadia code;
}
.password{
  transform-origin: center;
  font-family: cascadia code;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  font-size: 2em;
}

.register {
  transform: scale(1.5);
  position: relative;
  top: 48px;
}
.signup{
  transform: scale(1.5);
  position: relative;
  top: 66px;

}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
