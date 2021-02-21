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
          <PhoneInput
            @validate="(value) => {this.validNumber = value}"
            :required="true"
            :error="phoneErr"
            :errorMessage="phoneErrMsg"
            v-model="phone" />
        </section>
        <footer>
          <Button @clickPrevent="submitForms" :disabled="saveIsDisabled">Save</Button>
        </footer>
    </div>
</template>

<script>
import validadteEmail from '../../../helpers/validateEmail';
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
      saveIsDisabled: false,
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
      phoneErr: false,
      emailErrMsg: '',
      phoneErrMsg: 'Invalid phone number format',
      validNumber: null,
    };
  },
  methods: {
    closeEdit() {
      this.$emit('toggleEdit');
    },
    submitForms() {
      const title = this.title.trim();
      const address = this.address.trim();
      const fullName = this.fullName.trim();
      const jobPosition = this.jobPosition.trim();
      const email = this.email.trim();
      const phone = this.phone.trim();

      this.titleErr = title.length === 0;
      this.adrressErr = address.length === 0;
      this.fullNameErr = fullName.length === 0;
      this.jobPositionErr = jobPosition.length === 0;

      if (email.length === 0) {
        this.emailErr = true;
        this.emailErrMsg = 'This field cannot be empty';
      } else if (!validadteEmail(email)) {
        this.emailErr = true;
        this.emailErrMsg = 'Invalid e-mail format';
      } else {
        this.emailErr = false;
      }

      if (phone.length === 0) {
        this.phoneErr = true;
        this.phoneErrMsg = 'This field cannot be empty';
      } else if (!this.validNumber) {
        this.phoneErr = true;
        this.phoneErrMsg = 'Invalid phone number format';
      } else {
        this.phoneErr = false;
        this.phoneErrMsg = 'Invalid phone number format';
      }

      if (!(this.titleErr
          || this.adrressErr
          || this.fullNameErr
          || this.jobPositionErr
          || this.emailErr
          || this.phoneErr)) {
        alert('valid');
        this.isOpen = false;
        this.saveIsDisabled = false;
      } else {
        alert('invalid');
        this.saveIsDisabled = true;
      }
    },
  },
  computed: {
    changeData() {
      const {
        title, address, fullName, jobPosition, email, phone,
      } = this;
      return {
        title,
        address,
        fullName,
        jobPosition,
        email,
        phone,
      };
    },
  },
  watch: {
    changeData: {
      handler() {
        this.saveIsDisabled = false;
      },
      deep: true,
    },
  },
};
</script>

<style>
    .office-card-edit {
        width: 317px;
    }
</style>
