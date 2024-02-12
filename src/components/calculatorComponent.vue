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
import axios from 'axios';
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

<style >
/* Your component's styles go here */
body {
  display: grid;
  place-items: center;
  height: 50vh;
  margin: 0;
  padding: 0;
}
.container{
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  height:50vh;
}

.calculator{
  font-family: 'cascadia code';
  margin: 20px;
  font-size: 2em;
}
.inputs{
  font-family: 'cascadia code';
  margin: 20px;
  font-size: 1em;
}

</style>
