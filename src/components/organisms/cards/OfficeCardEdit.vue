<template>
    <div class='office-card-edit shadow-xl mb-6 p-6 rounded-t-md bg-background-card'>
        <header class='flex flex-row justify-between items-center relative mb-10'>
          <BodyText class='text-primary-dark font-bold'>
            Edit Location
          </BodyText>
          <svg
            @click="closeEdit()"
            class='cursor-pointer'
            width="14" height="14"
            viewBox="0 0 14 14" fill="none"
            xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L13 1L1 13ZM1 1L13 13L1 1Z" fill="#989EA7"/>
              <path
                d="M1 1L13 13M1 13L13 1L1 13Z"
                stroke="#989EA7"
                stroke-linecap="round"
                stroke-linejoin="round"/>
          </svg>
        </header>
        <section>
          <GenericInput
            label="Title"
            type="text"
            errorMessage="This field cannot be empty"
            :required="true"
            v-model="title"
            :error="titleErr" />
          <GenericInput
            label="Enter the address"
            type="text"
            errorMessage="This field cannot be empty"
            :required="true"
            v-model="address"
            :error="adrressErr" />
          <MetaText class="uppercase mt-5 mb-3 text-accent-blue">Contact information</MetaText>
          <hr class="mb-4"/>
          <GenericInput
            label="Full name"
            type="text"
            errorMessage="This field cannot be empty"
            :required="true"
            v-model="fullName"
            :error="fullNameErr" />
          <GenericInput
            label="Job Position"
            type="text"
            errorMessage="This field cannot be empty"
            :required="true"
            v-model="jobPosition"
            :error="jobPositionErr" />
          <GenericInput
            label="Email address"
            type="email"
            placeholder="name@example.com"
            :errorMessage="emailErrMsg"
            :required="true"
            v-model="email"
            :error="emailErr" />
          <PhoneInput></PhoneInput>
        </section>
        <footer>
          <Button @click="validate">Save</Button>
        </footer>
    </div>
</template>

<script>
import BodyText from '../../atoms/typography/BodyText.vue';
import MetaText from '../../atoms/typography/MetaText.vue';
import Button from '../../atoms/buttons/Button.vue';
import GenericInput from '../../molecules/inputs/GenericInput.vue';
import PhoneInput from '../../molecules/inputs/PhoneInput.vue';

export default {
  name: 'OfficeCardEdit',
  components: {
    BodyText,
    Button,
    MetaText,
    GenericInput,
    PhoneInput,
  },
  data() {
    return {
      isOpen: true,
      title: '',
      address: '',
      fullName: '',
      jobPosition: '',
      email: '',
      phone: '',
      titleErr: false,
      adrressErr: false,
      fullNameErr: false,
      jobPositionErr: false,
      emailErr: false,
      emailErrMsg: '',
    };
  },
  methods: {
    closeEdit() {
      this.isOpen = !this.isOpen;
    },
    validate() {
      alert('vli');
      console.log(this.title);
      console.log(this.address);
      console.log(this.fullName);
      console.log(this.jobPosition);
      console.log(this.email);
    },
  },
};
</script>

<style>
    .office-card-edit {
        width: 317px;
    }
</style>
