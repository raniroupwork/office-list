<template>
  <div
    id="app"
    class='place-items-center relative bg-background-body w-full h-full overflow-y-auto'>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
