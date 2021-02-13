<template>
    <h1 class='text-accent-blue'>
      {{ text }}
    </h1>
</template>

<script>
export default {
  name: 'DisplayText',
  props: {
    text: {
      type: String,
      default: 'Offices',
    },
  },
};
</script>
