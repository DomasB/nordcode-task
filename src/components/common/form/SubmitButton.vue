<template>
  <button
    type="submit"
    class="submit-button"
  >
    {{text}}
  </button>
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
  @import "@/styles/_mixins.sass"

  .submit-button
    @include genericButton($color-blue)
    cursor: pointer
    border-radius: 10px
    width: 50%
    padding: 10px 0px
    margin-left: auto
</style>
