<template>
  <div class="main">
   <h1 class="username"> Username:</h1>
    <input class="username" v-model="username" placeholder="Username" type="Text">
    <h1 class="password"> Password:</h1>
    <input class="password" v-model="password" placeholder="Password" type="Text">
    <button @click="signin" class="signin">Sign In</button>
    <button @click="signup" class="signup">Sign up with Google</button>
  </div>
</template>

<script>
import axios from 'axios';
import { auth } from '../components/firebaseConfig.js';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: 'signinComponent',
  data() {
    return { 
      username: '',
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
    async signin() {
      try {
        const response = await axios.post('http://127.0.1:5000/signin', {
          username: this.username,
          password: this.password
        });
        console.log(response.data);
        this.$router.push('/calculator');
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

.username{ 
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

.signin {
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
