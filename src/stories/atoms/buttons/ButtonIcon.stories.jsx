import ButtonIcon from '../../../components/atoms/buttons/ButtonIcon.vue';

export default {
  title: 'atoms/buttons/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    text: { control: 'Button' },

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonIcon },
  template: '<ButtonIcon :text="text"></ButtonIcon>',
});

export const Edit = Template.bind({});
Edit.args = {
  text: 'Edit',
};
