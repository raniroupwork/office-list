import GenericInput from '../../../components/molecules/inputs/GenericInput.vue';

export default {
  title: 'molecules/inputs/GenericInput',
  component: GenericInput,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GenericInput },
  template: '<GenericInput></GenericInput>',
});

export const Name = Template.bind({});
Name.args = {
};
