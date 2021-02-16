<template>
  <main class='main max-w-full relative mb-6'>
      <AddNewLocation class='relative my-0 mb-7 mx-auto'/>
      <OfficeCard class='relative my-0 mx-auto'></OfficeCard>
  </main>
</template>

<script>
import AddNewLocation from '../components/molecules/AddNewLocation.vue';
import OfficeCard from '../components/organisms/OfficeCard.vue';

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
