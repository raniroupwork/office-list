<template>
  <label class="block py-4">
    <span class="text-gray-700">Input</span>
    <input class="form-input mt-1 block w-full" :type="type" :placeholder="placeholder">
  </label>
</template>

<script>
export default {
  name: 'TextInput',
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
  },
};

</script>
