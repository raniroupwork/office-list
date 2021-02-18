<template>
  <main class='main max-w-full relative mb-6'>
      <AddNewLocation class='relative my-0 mb-7 mx-auto'/>
      <OfficeCard></OfficeCard>
  </main>
</template>

<script>
import AddNewLocation from '../components/molecules/AddNewLocation.vue';
import OfficeCard from '../components/organisms/cards/OfficeCard.vue';

export default {
  name: 'Main',
  components: {
    AddNewLocation,
    OfficeCard,
  },
};
</script>

<style>

</style>
