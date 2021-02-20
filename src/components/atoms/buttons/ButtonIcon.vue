<template>
    <button :disabled='disabled' :text='text' class="btn-icon max-w-24 w-24" @click="clicked">
      <slot></slot>
      <BodyText
        style="color: inherit"
        class='text-xs ml-2'>
          {{ text }}
      </BodyText>
    </button>
</template>

<script>
import BodyText from '../typography/BodyText.vue';

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
  methods: {
    clicked() {
      this.$emit('click');
    },
  },
};
</script>
