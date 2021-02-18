<template>
  <div class='office-card max-w-full relative mb-6'>
      <OfficeCardData class='relative my-0 mx-auto'></OfficeCardData>
      <OfficeCardEdit class='relative my-0 mx-auto'></OfficeCardEdit>
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
};
</script>

<style>

</style>
