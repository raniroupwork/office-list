<template>
    <button :disabled='disabled' :text='text' class="btn-icon">
      <slot></slot>
      <span>{{ text }}</span>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
