<template>
    <div class='office-card-edit shadow-xl mb-6 p-6 rounded-t-md bg-background-card'>
        <header class='flex flex-row justify-between items-center relative'>
          <BodyText class='text-primary-dark font-bold'>
            Edit Location
          </BodyText>
          <svg @click="closeEdit()" class='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L13 1L1 13ZM1 1L13 13L1 1Z" fill="#989EA7"/>
            <path
              d="M1 1L13 13M1 13L13 1L1 13Z"
              stroke="#989EA7"
              stroke-linecap="round"
              stroke-linejoin="round"/>
          </svg>
        </header>
        <section>

        </section>
        <footer>
          <Button>Save</Button>
        </footer>
    </div>
</template>

<script>
import BodyText from '../../atoms/typography/BodyText.vue';
import Button from '../../atoms/buttons/Button.vue';

export default {
  name: 'OfficeCardEdit',
  components: {
    BodyText,
    Button,
  },
  data() {
    return {
      isOpen: true,
    };
  },
  props: {
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
  },
  methods: {
    closeEdit() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
    .office-card-edit {
        width: 317px;
    }
</style>
