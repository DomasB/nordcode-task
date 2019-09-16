<template>
  <div>
    <MainText />
    <ImageWithNavigation
      :image="findImage()"
      :currentId="currentId"
      :maxId="maxId"
    />
    <span class="comments-label">Comments:</span>
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      :user="findUser(comment.userId)"
    />
    <Separator />
    <CommentForm />
  </div>
</template>

<script>
import MainText from '@/components/MainText.vue';
import ImageWithNavigation from '@/components/ImageWithNavigation.vue';
import Comment from '@/components/Comment.vue';
import Separator from '@/components/Separator.vue';
import CommentForm from '@/components/CommentForm.vue';
import mockData from '../../mockData.json';

export default {
  name: 'Comments',
  components: {
    MainText,
    ImageWithNavigation,
    Comment,
    Separator,
    CommentForm,
  },
  computed: {
    currentId() {
      return parseInt(this.$route.params.id, 10);
    },
    maxId() {
      return mockData.images.length;
    },
    comments() {
      return mockData.comments.filter(({ imageId }) => imageId === this.currentId);
    },
  },
  methods: {
    findImage() {
      return mockData.images
        .find(({ id }) => parseInt(id, 10) === parseInt(this.$route.params.id, 10));
    },
    findUser(userId) {
      return mockData.users.find(({ id }) => id === userId);
    },
  },
};
</script>

<style lang="sass">

</style>
