<template>
  <form class="upload-form" @submit="validate">
    <InputField
      v-model="fileName"
      name="file-name"
      label="File name"
      placeholder="Test"
      :errors="formErrors"
    />
    <TextAreaField
      v-model="fileDescription"
      name="file-description"
      label="Description"
      placeholder="Alex"
      :errors="formErrors"
    />
    <FileUpload v-model="file" name="file-upload" label="Upload Photo" :errors="formErrors" />
    <SubmitButton text="Upload" />
  </form>
</template>

<script>
import SubmitButton from '@/components/common/form/SubmitButton.vue';
import InputField from '@/components/common/form/InputField.vue';
import TextAreaField from '@/components/common/form/TextAreaField.vue';
import FileUpload from '@/components/common/form/FileUpload.vue';

export default {
  name: 'UploadForm',
  components: {
    SubmitButton,
    InputField,
    TextAreaField,
    FileUpload,
  },
  data() {
    return {
      fileName: '',
      fileDescription: '',
      file: '',
      formErrors: {},
    };
  },
  methods: {
    validate(event) {
      const fileExtensionRegex = /.*[.jpg|.png]$/;
      const isFileValid = fileExtensionRegex.test(this.file);

      this.formErrors = {};
      if (this.fileName && this.file && isFileValid) return true;

      if (!this.filename) this.setError('file-name', 'Name is required');
      if (!isFileValid) this.setError('file-upload', 'Only .jpg and .png files allowed');
      if (!this.file) this.setError('file-upload', 'Please select the file');

      event.preventDefault();
      return false;
    },
    setError(fieldName, message) {
      this.formErrors[fieldName] = message;
    },
  },
};
</script>

<style lang="sass">
  .description
    resize: none
</style>
