<template>
  <form class="upload-form">
    <InputField v-model="fileName" name="file-name" label="File name" placeholder="Test" />
    <TextAreaField
      v-model="fileDescription"
      name="file-description"
      label="Description"
      placeholder="Alex"
    />
    <label class="form-label" for="file">Upload Photo</label>
    <input type="file" id='file'/>
    <SubmitButton text="Upload" />
  </form>
</template>

<script>
import SubmitButton from '@/components/common/form/SubmitButton.vue';
import InputField from '@/components/common/form/InputField.vue';
import TextAreaField from '@/components/common/form/TextAreaField.vue';

export default {
  name: 'UploadForm',
  components: {
    SubmitButton,
    InputField,
    TextAreaField,
  },
  data() {
    return {
      fileName: '',
      fileDescription: '',
    };
  },
};
</script>

<style lang="sass">
  .description
    resize: none
</style>
