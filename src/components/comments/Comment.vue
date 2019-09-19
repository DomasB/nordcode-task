<template>
  <div class="comment">
    <div
      :style="{ backgroundImage: `url(${getImage(user.image)})` }"
      class="profile-image"
    />
    <div class="text-container">
      <div class="user-name">{{user.name}}</div>
      <div class="comment-text">{{comment.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    user: Object,
    comment: Object,
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
  .comment
    display: flex
    padding: 20px 0px

  .profile-image
    width: $size-profile-image
    min-width: $size-profile-image
    height: $size-profile-image
    border-radius: 50%
    background-position: center center
    background-size: cover

  .text-container
    padding: 10px 20px
    text-align: left

  .user-name
    font-size: 1em
    font-weight: bold
    padding: 10px 0

  .comment-text
    color: $color-grey
    word-break: break-all
</style>
