<template>
  <div>
    <label class="form-label" :for="name">{{label}}</label>
    <input
      :class="{'text-input': true, 'error-field': errors[name]}"
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
  name: 'InputField',
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
  .form-label
    font-weight: bold
  .text-input
    @include inputGeneric()
</style>
