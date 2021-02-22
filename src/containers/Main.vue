<template>
  <main class='main max-w-full relative mb-6'>
      <AddNewLocation
        v-if="!isNewConfigOpen"
        @clickPrevent="toggleConfig"
        class='relative my-0 mb-7 mx-auto'/>
      <OfficeCardConfig
        v-else
        type="New"
        @toggleConfig="toggleConfig"
        class='relative my-0 mb-7 mx-auto'/>
      <OfficeCard v-for="office in offices" :key="office.fullName" :data="office" />
  </main>
</template>

<script>
import AddNewLocation from '../components/molecules/AddNewLocation.vue';
import OfficeCardConfig from '../components/organisms/cards/OfficeCardConfig.vue';
import OfficeCard from '../components/organisms/cards/OfficeCard.vue';

export default {
  name: 'Main',
  components: {
    AddNewLocation,
    OfficeCardConfig,
    OfficeCard,
  },
  props: {
    offices: {
      type: Array,
    },
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
