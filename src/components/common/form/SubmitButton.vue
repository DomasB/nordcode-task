<template>
  <button class="submit-button">{{text}}</button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    text: String,
  },
};
</script>

<style lang="sass">
  @import "@/styles/_variables.scss"
  .submit-button
    background-color: $color-blue
</style>
