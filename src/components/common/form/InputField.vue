<template>
  <div>
    <label class="form-label" :for="name">{{label}}</label>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :id="name"
      :placeholder="placeholder"
    />
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
  },
};
</script>

<style lang="sass">
</style>
