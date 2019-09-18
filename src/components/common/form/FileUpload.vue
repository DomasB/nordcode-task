<template>
  <div>
    <label class="form-label" :for="name">{{label}}</label>
      <div class="file-input-container">
        <input
          type="text"
          :value="value"
          :id="name"
          placeholder="No file selected"
          :class="{'file-text': true, 'error-field': errors[name]}"
        />
        <div class="file-button-container">
        <span class="file-button">Browse</span>
        <input
          type="file"
          :value="value"
          @input="$emit('input', $event.target.value)"
          class="file-input"
        />
      </div>
    </div>
    <div v-if="errors[name]" class="error">
      {{errors[name]}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  props: {
    value: String,
    name: String,
    label: String,
    errors: Object,
  },
};
</script>

<style lang="sass">
  @import "@/styles/_mixins.sass"
  .file-input-container
    display: flex
    flex-direction: row
  .file-text
    @include inputGeneric()
    border-radius: 10px 0px 0px 10px
    width: 70%
    text-overflow: ellipsis
  .file-button-container
    width: 30%
    position: relative
    padding: 10px 0
  .file-button
    @include genericButton($color-green)
    position: absolute
    padding: 13px 0px 7px
    border-radius: 0px 10px 10px 0px
    width: 100%
    border-left: none
  .file-input
    cursor: pointer
    width: 100%
    position: absolute
    margin: 0
    padding: 5px 0px
    font-size: 1em
    opacity: 0
</style>
