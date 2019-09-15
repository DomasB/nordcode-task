<template>
  <form class="upload-form">
    <label class="form-label" for="file-name">File name</label>
    <input type="text" id='file-name' placeholder="Test"/>
    <label class="form-label" for="description">Description</label>
    <textarea class="description" id='description' placeholder="Alex"/>
    <label class="form-label" for="file">Upload Photo</label>
    <input type="file" id='file'/>
    <SubmitButton text="Upload" />
  </form>
</template>

<script>
import SubmitButton from '@/components/form/SubmitButton.vue';

export default {
  name: 'UploadForm',
  components: { SubmitButton },
};
</script>

<style lang="sass">
  .description
    resize: none
</style>
