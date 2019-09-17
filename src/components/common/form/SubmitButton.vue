<template>
  <button class="submit-button" type="submit">{{text}}</button>
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
  @import "@/styles/_variables.sass"
  .submit-button
    background-color: $color-blue
</style>
