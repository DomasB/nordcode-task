<template>
  <div>
    <router-link :to="`/comments/${image.id}`">
      <div
        :style="{ backgroundImage: `url(${getImage(image.src)})` }"
        class="image-square"
      />
      <div class="image-title">
        {{image.name}}
      </div>
    </router-link>
    <div class="image-description">
      {{image.description}}
    </div>
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
    width: $size-gallery-image
    height: $size-gallery-image
    background-position: center center
    background-size: cover

  a
    text-decoration: none
    color: $color-black

  .image-title
    padding: 0.5em 0
    font-weight: bold
    font-size: 1.08em

  .image-description
    color: $color-grey
    font-size: 0.8em
</style>
