<template>
  <div>
    <label class="form-label" :for="name">{{label}}</label>
    <textarea
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :id="name"
      :placeholder="placeholder"
    />
    <div v-if="errors[name]" class="error">
      {{errors[name]}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextAreaField',
  props: {
    value: String,
    name: String,
    label: String,
    placeholder: String,
    errors: Object,
  },
};
</script>

<style lang="sass">
</style>
