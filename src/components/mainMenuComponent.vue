<template>
  <div>
    <h1>h</h1>
    <button @click="Calculator()">Calculator</button>
  </div>
</template>

<script>
export default {
  name: 'MainMenuComponent',
  // Your Vue component logic goes here
  methods:{
    calcualtor(){
        this.$router.push('/calculator')
    }
  }
}
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
