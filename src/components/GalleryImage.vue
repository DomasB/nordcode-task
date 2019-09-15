<template>
  <div class="gallery-image">
    <div class="image" :style="{backgroundImage: `url(${getImage(image.src)})`}" />
    <div class="image-title">{{image.name}}</div>
    <div class="image-description">{{image.description}}</div>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    image: Object,
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
  .image
    width: 10vw
    height: 10vw
    background-position: center center
    background-size: cover
</style>
