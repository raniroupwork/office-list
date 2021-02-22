<template>
  <div class='office-card max-w-full relative mb-6'>
      <OfficeCardData
        v-if="!isEditConfigOpen"
        :data="data"
        @toggleConfig="toggleConfig"
        class='relative my-0 mx-auto' />
      <OfficeCardConfig
        v-else
        :data="data"
        type="Edit"
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
  props: {
    data: {
      type: Object,
      default: () => ({
        id: {
          type: Number,
          default: null,
        },
        title: {
          type: String,
          default: '',
        },
        address: {
          type: String,
          default: '',
        },
        fullName: {
          type: String,
          default: '',
        },
        jobPosition: {
          type: String,
          default: '',
        },
        email: {
          type: String,
          default: '',
        },
        phone: {
          type: String,
          default: '',
        },
      }),
    },
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
