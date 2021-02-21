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
      <OfficeCardData v-for="office in allOffices" :key="office.id" :data="office" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import AddNewLocation from '../components/molecules/AddNewLocation.vue';
import OfficeCardData from '../components/organisms/cards/OfficeCardData.vue';
import OfficeCardConfig from '../components/organisms/cards/OfficeCardConfig.vue';

export default {
  name: 'Main',
  components: {
    AddNewLocation,
    OfficeCardData,
    OfficeCardConfig,
  },
  data() {
    return {
      isNewConfigOpen: false,
    };
  },
  computed: mapGetters(['allOffices']),
  methods: {
    toggleConfig() {
      this.isNewConfigOpen = !this.isNewConfigOpen;
    },
  },
};
</script>

<style>

</style>
