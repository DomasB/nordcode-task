<template>
  <form
    @submit="validate"
    class="upload-form"
  >
    <InputField
      v-model="fileName"
      name="file-name"
      label="File name"
      placeholder="Test"
      :errors="formErrors"
      class="input"
    />
    <TextAreaField
      v-model="fileDescription"
      name="file-description"
      label="Description"
      placeholder="Alex"
      :errors="formErrors"
      class="input"
    />
    <FileUpload
      v-model="file"
      name="file-upload"
      label="Upload Photo"
      :errors="formErrors"
      class="input"
    />
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
      if (!this.fileName) this.setError('file-name', 'Name is required');
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
  @import "@/styles/_variables.sass"

  .upload-form
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
