<template>
  <div class="pagination">
    <div
      v-if="currentPage !== 1"
      tabindex="0"
      @click="navigate(-1)"
      @keyup.enter="navigate(-1)"
      class="pagination-left pagination-navigation"
    />
    <button
      v-for="page in totalPages"
      :key="page"
      @click="navigate(0, page)"
      :class="{
        'active-button': page == currentPage,
        'pagination-button': true
      }"
    >
      {{page}}
    </button>
    <div
      v-if="currentPage !== totalPages"
      tabindex="0"
      @click="navigate(1)"
      @keyup.enter="navigate(-1)"
      class="pagination-right pagination-navigation"
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
  methods: {
    navigate(offset, page) {
      if (offset !== 0) return this.$emit('pageChange', this.currentPage + offset);
      return this.$emit('pageChange', page);
    },
  },
};
</script>

<style lang="sass">
  @import "@/styles/_mixins.sass"

  .pagination
    display: flex
    flex-direction: row
    justify-content: center

  .pagination-button
    cursor: pointer
    width: $size-pagination-button
    height: $size-pagination-button
    border-radius: 20px
    background-color: transparent
    color: $color-grey
    font-size: 1.2em
    font-weight: bold
    border: 3px solid $color-light-grey
    margin: 0 5px

  .active-button
    background-color: $color-blue
    border: none
    color: white

  .pagination-navigation
    cursor: pointer
    width: $size-pagination-button
    height: $size-pagination-button

  .pagination-left
    &:before
      @include triangleCommon()
      top: 10px
      left: 15px
      border-width: 10px 20px 10px 0
      border-color: transparent $color-blue transparent transparent

  .pagination-right
    &:before
      @include triangleCommon()
      top: 10px
      left: 20px
      border-width: 10px 0 10px 20px
      border-color: transparent transparent transparent $color-blue
</style>
