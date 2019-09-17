<template>
  <div>
    <label class="form-label" :for="name">{{label}}</label>
    <input
      type="file"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :id="name"
    />
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
</style>
