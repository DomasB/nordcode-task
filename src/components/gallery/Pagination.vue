<template>
<div>
  <button
    v-for="page in parseInt(totalPages)"
    :key="page"
    :class="{
      'active-button': page == currentPage,
      'pagination-button': true
    }"
  >
    {{page}}
  </button>
</div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    totalPages: Number,
    currentPage: Number,
  },
};
</script>

<style lang="sass">
  @import "@/styles/_variables.scss"
  .pagination-button
    width: 40px
    height: 40px
    border-radius: 20px
  .active-button
    background-color: $color-blue
</style>
