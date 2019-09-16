<template>
  <div class="image-navigation">
    <div class="image" :style="{backgroundImage: `url(${getImage(image.src)})`}">
      <router-link
        v-if="previousImageId > 0"
        :to="`/comments/${previousImageId}`"
        class="navigate-button navigate-left"
      />
      <router-link
        v-if="nextImageId > 0"
        :to="`/comments/${nextImageId}`"
        class="navigate-button navigate-right"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageWithNavigation',
  props: {
    image: Object,
    currentId: Number,
    maxId: Number,
  },
  computed: {
    previousImageId() {
      return this.image.id === 1 ? 0 : this.image.id - 1;
    },
    nextImageId() {
      return this.image.id === this.maxId ? 0 : this.image.id + 1;
    },
  },
  methods: {
    getImage(src) {
      // eslint-disable-next-line
      return require(`../assets/${src}`);
    },
  },
};
</script>

<style lang="sass">
  @mixin triangleCommon()
    position: relative
    content: ''
    display: block
    width: 0
    height: 0
    top: 20px
    border-style: solid

  .navigate-button
    position: relative
    top: calc(10vw - 30px)
    margin: 10px
    width: 60px
    height: 60px
    background-color: white

  .navigate-left
    &:before
      @include triangleCommon()
      left: 15px
      border-width: 10.0px 20.0px 10.0px 0
      border-color: transparent black transparent transparent

  .navigate-right
    margin-left: auto
    &:before
      @include triangleCommon()
      left: 20px
      border-width: 10.0px 0 10.0px 20.0px
      border-color: transparent transparent transparent black

  .image
    width: 80vw
    height: 20vw
    display: flex
    justify-content: space-between
    background-position: center center
    background-size: cover

</style>
