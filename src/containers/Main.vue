<template>
  <main class='main max-w-full relative mb-6'>
      <AddNewLocation
        v-if="!isNewConfigOpen"
        @clickPrevent="toggleConfig"
        class='relative my-0 mb-7 mx-auto'/>
      <OfficeCardConfig
        v-else
        @toggleConfig="toggleConfig"
        class='relative my-0 mb-7 mx-auto'/>
      <OfficeCard />
  </main>
</template>

<script>
import AddNewLocation from '../components/molecules/AddNewLocation.vue';
import OfficeCard from '../components/organisms/cards/OfficeCard.vue';
import OfficeCardConfig from '../components/organisms/cards/OfficeCardConfig.vue';

export default {
  name: 'Main',
  components: {
    AddNewLocation,
    OfficeCard,
    OfficeCardConfig,
  },
  data() {
    return {
      isNewConfigOpen: false,
    };
  },
  methods: {
    toggleConfig() {
      this.isNewConfigOpen = !this.isNewConfigOpen;
    },
  },
};
</script>

<style>

</style>
