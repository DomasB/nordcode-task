<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass">
  #app
    max-width: 90vw
    min-width: 600px
    margin: 0 auto
    font-family: "Trebuchet MS", Helvetica, sans-serif
    text-align: center
</style>
