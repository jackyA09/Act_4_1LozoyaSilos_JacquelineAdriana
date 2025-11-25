<template>
  <span class="star" :class="`star--${state}`" role="img" aria-label="star">
    <!-- Usamos caracteres UTF para placeholder; si luego agregas SVG, lo reemplazamos -->
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
  font-size: 24px; /* tamaño inicial, puedes cambiar */
  line-height: 1;
  display: inline-block;
}

/* colores según token */
.star--filled {
  color: var(--yellow);
}
.star--empty {
  color: var(--gray-1);
}
</style>
