<template>
  <div>
    <label class="form-label" :for="name">{{label}}</label>
    <textarea
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :id="name"
      :placeholder="placeholder"
      rows="6"
      :class="{textarea: true, 'error-field': errors[name]}"
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
  @import "@/styles/_mixins.sass"
  .textarea
    @include inputGeneric()
    resize: none
</style>
