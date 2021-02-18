<template>
  <label class="block">
    <BodyText class="text-gray-700">{{ label }}</BodyText>
    <input class="form-input mt-1 block w-full" :type="type" :placeholder="placeholder">
    <BodyText>{{ errorMessage }}</BodyText>
  </label>
</template>

<script>
import BodyText from '../../atoms/typography/BodyText.vue';

export default {
  name: 'TextInput',
  components: {
    BodyText,
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};

</script>
