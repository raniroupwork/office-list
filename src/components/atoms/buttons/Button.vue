<template>
    <button :disabled='disabled' :type='type' class="btn" :class="`btn-${type}`" @click="clicked">
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
  methods: {
    clicked() {
      this.$emit('click');
    },
  },
};
</script>
