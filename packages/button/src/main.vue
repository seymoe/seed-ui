<template>
  <button
    class="se-button"
    :class="['se-button--' + type, 'se-button--' + size]"
    :disabled="disabled"
    :type="nativeType"
    :autofocus="autofocus"
    @click="handleClick"
    >
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
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
