<template>
  <form
    @submit="validateAndSumbit"
    class="comment-form"
  >
    <InputField
      v-model="userName"
      name="user-name"
      label="Name"
      placeholder="Alex"
      :errors="formErrors"
      class="input"
    />
    <InputField
      v-model="email"
      name="user-email"
      label="Email"
      placeholder=""
      :errors="formErrors"
      class="input"
    />
    <TextAreaField
      v-model="comment"
      name="comment-field"
      label="Comment"
      placeholder="Type something here..."
      :errors="formErrors"
      class="input"
    />
    <SubmitButton text="Send" />
  </form>
</template>

<script>
import SubmitButton from '@/components/common/form/SubmitButton.vue';
import InputField from '@/components/common/form/InputField.vue';
import TextAreaField from '@/components/common/form/TextAreaField.vue';

export default {
  name: 'CommentForm',
  components: {
    SubmitButton,
    InputField,
    TextAreaField,
  },
  data() {
    return {
      userName: '',
      email: '',
      comment: '',
      formErrors: {},
    };
  },
  methods: {
    validateAndSumbit(event) {
      const emailRegex = /^[a-zA-Z.]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
      const isEmailValid = emailRegex.test(this.email);
      const isCommentValid = this.comment.length > 20;

      this.formErrors = {};
      if (this.userName && this.email && isEmailValid && isCommentValid) {
        this.submitComment();
        return true;
      }

      if (!this.userName) this.setError('user-name', 'Name is required');
      if (!isEmailValid) this.setError('user-email', 'Valid email address is required');
      if (!this.email) this.setError('user-email', 'Email is required');
      if (!isCommentValid) this.setError('comment-field', 'Comment must be longer than 20 symbols');

      event.preventDefault();
      return false;
    },
    submitComment() {
      this.$emit('comment', {
        userName: this.userName,
        email: this.email,
        comment: this.comment,
      });
      this.userName = '';
      this.email = '';
      this.comment = '';
    },
    setError(fieldName, message) {
      this.formErrors[fieldName] = message;
    },
  },
};
</script>

<style lang="sass">
  @import "@/styles/_variables.sass"

  .comment-form
    display: flex
    flex-direction: column

  .input
    display: flex
    flex-direction: column
    text-align: left
    padding: 5px 0

  .error
    color: $color-red
    font-size: 0.7em
    margin: -6px 5px 6px

  .error-field
    border-color: $color-red
</style>
