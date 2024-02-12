<template>
  <div class="main">
   <h1 class="username"> Username:</h1>
    <input class="username" v-model="username" placeholder="Username" type="Text">
    <h1 class="password"> Password:</h1>
    <input class="password" v-model="password" placeholder="Password" type="Text">
    <button @click="signin" class="signin">Sign In</button>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data() {
    return { 
      username: '',
      password: ''
    }
  },
  methods:{
    async signin(){
      try{
        const response = await axios.post('http://127.0.1:5000/signin', {
          username: this.username,
          password: this.password
        })
        console.log(response.data)
        this.$router.push('/calculator')
      }
      catch(error){
        console.log(error)
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
  font-family: helvetica system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.password{
  transform-origin: center;
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
