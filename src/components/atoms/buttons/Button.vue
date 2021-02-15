<template>
    <button :disabled='disabled' :type='type' :class="`btn btn-${type}`">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
