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
