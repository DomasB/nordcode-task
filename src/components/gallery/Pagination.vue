<template>
  <div>
    <div
      v-if="currentPage !== 1"
      class="pagination-left pagination-navigation"
      @click="$emit('pageChange', currentPage - 1)"
    />
    <button
      v-for="page in totalPages"
      :key="page"
      @click="$emit('pageChange', page)"
      :class="{
        'active-button': page == currentPage,
        'pagination-button': true
      }"
    >
      {{page}}
    </button>
    <div
      v-if="currentPage !== totalPages"
      class="pagination-right pagination-navigation"
      @click="$emit('pageChange', currentPage + 1)"
    />
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
  @import "@/styles/_variables.sass"
  @import "@/styles/_mixins.sass"
  .pagination-button
    width: 40px
    height: 40px
    border-radius: 20px
  .active-button
    background-color: $color-blue
  .pagination-navigation
    width: 40px
    height: 40px
  .pagination-left
    &:before
      @include triangleCommon()
      top: 10px
      left: 15px
      border-width: 10.0px 20.0px 10.0px 0
      border-color: transparent $color-blue transparent transparent
  .pagination-right
    &:before
      @include triangleCommon()
      top: 10px
      left: 20px
      border-width: 10.0px 0 10.0px 20.0px
      border-color: transparent transparent transparent $color-blue

</style>
