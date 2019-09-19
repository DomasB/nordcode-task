<template>
  <div>
    <label
      :for="name"
      class="form-label"
    >
      {{label}}
    </label>
    <input
      type="text"
      :value="value"
      :id="name"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :class="{'text-input': true, 'error-field': errors[name]}"
    />
    <div
      v-if="errors[name]"
      class="error"
    >
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
