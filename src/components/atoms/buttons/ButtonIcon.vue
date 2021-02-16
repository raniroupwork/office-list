<template>
    <button :disabled='disabled' :text='text' class="btn-icon">
      <slot></slot>
      <BodyText class='text-xs ml-2'>{{ text }}</BodyText>
    </button>
</template>

<script>
import BodyText from '../typography/BodyText.vue'

export default {
  name: 'Button',
  components: {
    BodyText,
  },
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
