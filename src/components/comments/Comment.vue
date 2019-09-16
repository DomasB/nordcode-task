<template>
  <div class="comment">
      <div class="profile-image" :style="{backgroundImage: `url(${getImage(user.image)})`}" />
      <div class="user-name">{{user.name}}</div>
      <div class="comment-text">{{comment.text}}</div>
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
  .profile-image
    width: 100px
    height: 100px
    border-radius: 50%
    background-position: center center
    background-size: cover
</style>
