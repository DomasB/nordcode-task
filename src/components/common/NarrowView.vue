<template>
  <div class="narrow-view">
    <slot />
  </div>
</template>
<style lang="sass">
  .narrow-view
    max-width: 40vw
    min-width: 600px
    margin: 0 auto
</style>
