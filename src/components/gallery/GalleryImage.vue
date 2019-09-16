<template>
  <div class="gallery-image">
    <router-link :to="`/comments/${image.id}`">
      <div class="image-square" :style="{backgroundImage: `url(${getImage(image.src)})`}" />
      <div class="image-title">{{image.name}}</div>
      <div class="image-description">{{image.description}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'GalleryImage',
  props: {
    image: Object,
  },
  methods: {
    getImage(src) {
      // eslint-disable-next-line
      return require(`@/assets/${src}`);
    },
  },
};
</script>

<style lang="sass">
  .image-square
    width: 10vw
    height: 10vw
    background-position: center center
    background-size: cover
</style>
