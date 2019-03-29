<template>
  <button
    class="se-button"
    :class="['se-button--' + type, 'se-button--' + size]"
    :disabled="disabled">
      <slot>确定</slot>
    </button>
</template>

<script>
export default {
  name: 'SeButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
