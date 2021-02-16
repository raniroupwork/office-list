<template>
    <a :href='href' class='link-text'>
      <MetaText class='text-accent-blue tracking-wider mt-4'>
        <slot></slot>
      </MetaText>
    </a>
</template>

<script>
import MetaText from '../atoms/typography/MetaText.vue';

export default {
  components: { MetaText },
  name: 'LinkText',
  props: {
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>
