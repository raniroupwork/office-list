<template>
  <div class='office-card max-w-full relative mb-6'>
      <OfficeCardData
        v-if="!isOpen"
        @toggleEdit="toggleEdit"
        class='relative my-0 mx-auto' />
      <OfficeCardEdit
        v-else
        @toggleEdit="toggleEdit"
        class='relative my-0 mx-auto' />
  </div>
</template>

<script>
import OfficeCardData from './OfficeCardData.vue';
import OfficeCardEdit from './OfficeCardEdit.vue';

export default {
  name: 'OfficeCard',
  components: {
    OfficeCardData,
    OfficeCardEdit,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleEdit() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>

</style>
