<template>
  <footer class='footer text-center'>
    <BodyText>This Project is for test purpose only.</BodyText>
    <LinkText
      href="https://www.dogandponystudios.com"
      target="_blank">
        www.dogandponystudios.com
    </LinkText>
  </footer>
</template>

<script>
import BodyText from '../components/atoms/typography/BodyText.vue';
import LinkText from '../components/molecules/LinkText.vue';

export default {
  name: 'Header',
  components: {
    BodyText,
    LinkText,
  },
};
</script>

<style>

</style>
