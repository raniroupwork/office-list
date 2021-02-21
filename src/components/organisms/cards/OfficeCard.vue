<template>
  <div class='office-card max-w-full relative mb-6'>
      <OfficeCardData
        v-if="!isEditConfigOpen"
        @toggleConfig="toggleConfig"
        class='relative my-0 mx-auto' />
      <OfficeCardConfig
        v-else
        @toggleConfig="toggleConfig"
        class='relative my-0 mx-auto' />
  </div>
</template>

<script>
import OfficeCardData from './OfficeCardData.vue';
import OfficeCardConfig from './OfficeCardConfig.vue';

export default {
  name: 'OfficeCard',
  components: {
    OfficeCardData,
    OfficeCardConfig,
  },
  data() {
    return {
      isEditConfigOpen: false,
    };
  },
  methods: {
    toggleConfig() {
      this.isEditConfigOpen = !this.isEditConfigOpen;
    },
  },
};
</script>

<style>

</style>
