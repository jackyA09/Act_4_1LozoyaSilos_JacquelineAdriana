<!-- Diseño de Estrella una sola con  propiedad de llena o vacia-->
<template>
  <span class="star" :class="`star--${state}`" role="img" aria-label="star">
    <template v-if="state === 'filled'">★</template>
    <template v-else>☆</template>
  </span>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Star',
  props: {
    state: { type: String, default: 'empty' }, // filled | empty
  },
}
</script>

<style scoped>
.star {
  font-size: 24px;
  line-height: 1;
  display: inline-block;
}

.star--filled {
  color: var(--yellow);
}
.star--empty {
  color: var(--gray-1);
}
</style>
