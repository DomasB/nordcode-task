<template>
  <div>
    <NarrowView>
      <MainText />
    </NarrowView>
    <ImageWithNavigation
      :image="findImage(currentId)"
      :currentId="currentId"
      :maxId="maxImageId"
    />
    <NarrowView>
      <div class="comments-label">
        Comments:
      </div>
      <Comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :user="findUser(comment.userId)"
      />
      <Separator />
      <CommentForm @comment="addComment" />
    </NarrowView>
  </div>
</template>

<script>
import NarrowView from '@/components/common/NarrowView.vue';
import MainText from '@/components/common/MainText.vue';
import ImageWithNavigation from '@/components/comments/ImageWithNavigation.vue';
import Comment from '@/components/comments/Comment.vue';
import Separator from '@/components/common/Separator.vue';
import CommentForm from '@/components/comments/CommentForm.vue';
import mockData from '../../mockData.json';

export default {
  name: 'Comments',
  components: {
    NarrowView,
    MainText,
    ImageWithNavigation,
    Comment,
    Separator,
    CommentForm,
  },
  data() {
    return {
      allComments: mockData.comments,
      users: mockData.users,
    };
  },
  computed: {
    currentId() {
      return parseInt(this.$route.params.id, 10);
    },
    maxImageId() {
      return mockData.images.length;
    },
    comments() {
      return this.allComments
        .filter(({ imageId }) => imageId === this.currentId);
    },
  },
  methods: {
    findImage(currentId) {
      return mockData.images
        .find(({ id }) => id === currentId);
    },
    findUser(userId) {
      return this.users
        .find(({ id }) => id === userId);
    },
    addComment(payload) {
      const userId = this.users.length + 1;
      this.allComments.push({
        id: mockData.comments.length + 1,
        imageId: this.currentId,
        userId,
        text: payload.comment,
      });
      this.users.push({
        id: userId,
        name: payload.userName,
        image: 'profilePictures/unknown.jpg',
      });
    },
  },
};
</script>

<style lang="sass">
  .comments-label
    widht: 100%
    text-align: left
    font-weight: bold
    font-size: 1em
</style>
