<template>
  <form class="comment-form">
    <InputField v-model="userName" name="user-name" label="Name" placeholder="Alex" />
    <InputField v-model="email" name="user-email" label="Email" placeholder="" />
    <TextAreaField
      v-model="comment"
      name="comment-field"
      label="Comment"
      placeholder="Type something here..."
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
    };
  },
};
</script>

<style lang="sass">
</style>
