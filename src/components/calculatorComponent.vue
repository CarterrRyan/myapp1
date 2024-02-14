<template>
  <div class = container>
   <h1 class = calculator>Calculator:</h1>
   <h3 class = calculator>Number 1:</h3>
   <input class = inputs v-model="number1" placeholder ="Enter first number" type = int>
    <h3 class = calculator>Number 2:</h3>
    <input class = inputs v-model="number2" placeholder="Enter second number" type = int>
    <h3 class = calculator>Operator</h3>
    <input class = inputs v-model="operator" placeholder="+,-,*,/" type = string>
    <button class = inputs @click="calculate">calculate</button>
    <p>Result: {{this.response.result}}</p>
  </div>
  
</template>

<script>
import axios from 'axios'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 firebaseConfig = {
  apiKey: "AIzaSyDY0otgNSPXk3f47sOKrE-5okRuGJpdPYg",
  authDomain: "my-first-firebase-9eddc.firebaseapp.com",
  databaseURL: "https://my-first-firebase-9eddc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-first-firebase-9eddc",
  storageBucket: "my-first-firebase-9eddc.appspot.com",
  messagingSenderId: "905782179773",
  appId: "1:905782179773:web:69bfb5ab4eba1433b284d4",
  measurementId: "G-1NQL6G9RBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default{
  name: 'calculatorComponent',
  data(){
    return{
      number1: '',
      number2:'',
      operator:'',
      response:''
    }
  },
  methods:{
   async calculate(){
    try{
      const response = await axios.post('http://127.0.1:5000/calculator', {
      number1: this.number1,
      number2: this.number2,
      operator: this.operator
    })
    this.response = response.data
    console.log(response.data)
    }
    catch(error){
      console.log(error)
  }
  }
}
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* This makes the container take up the full height of the viewport */
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  font-size: 1em;
}

.calculator, .inputs {
  transform-origin: center;
  font-family: cascadia code;
  margin: 20px;
}

.calculator {
  font-size: 1em;
}

.inputs {
  font-size: 1em;
}

/* When the screen size is 600px or less, decrease the font size and margin */
@media screen and (max-width: 600px) {
  .main {
    font-size: 0.8em;
    margin: 10px;
  }

  .calculator, .inputs {
    margin: 10px;
  }

  .calculator {
    font-size: 0.8em;
  }

  .inputs {
    font-size: 0.8em;
  }
}

/* When the screen size is 400px or less, decrease the font size and margin further */
@media screen and (max-width: 400px) {
  .main {
    font-size: 0.6em;
    margin: 5px;
  }

  .calculator, .inputs {
    margin: 5px;
  }

  .calculator {
    font-size: 0.6em;
  }

  .inputs {
    font-size: 0.6em;
  }
}


</style>
