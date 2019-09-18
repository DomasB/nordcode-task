<template>
  <div>
    <router-link :to="`/comments/${image.id}`">
      <div class="image-square" :style="{backgroundImage: `url(${getImage(image.src)})`}" />
      <div class="image-title">{{image.name}}</div>
    </router-link>
    <div class="image-description">{{image.description}}</div>
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
  @import "@/styles/_variables.sass"
  .image-square
    width: 20vw
    height: 20vw
    background-position: center center
    background-size: cover
  a
    text-decoration: none
    color: black
  .image-title
    padding: 0.5em 0
    font-weight: bold
    font-size: 1.08em
  .image-description
    color: $color-grey
    font-size: 0.8em
</style>
