<template>
  <footer class='footer'>
      <DisplayText>Footer</DisplayText>
      <Button>Primary</Button>
  </footer>
</template>

<script>
import DisplayText from '../components/atoms/topography/DisplayText.vue';
import Button from '../components/atoms/buttons/Button.vue';

export default {
  name: 'Header',
  components: {
    DisplayText,
    Button,
  },
};
</script>

<style>

</style>
