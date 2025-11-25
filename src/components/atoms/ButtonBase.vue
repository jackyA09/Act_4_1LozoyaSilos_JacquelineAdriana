<template>
  <button
    class="button-base"
    :class="[`button--${variant}`]"
    :style="{
      width: width,
      height: height,
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonBase',
  props: {
    variant: { type: String, default: 'primario' }, // primario | secundario | gris | etc
    width: { type: String, default: '20%' },
    height: { type: String, default: '20px' },
  },
}
</script>

<style scoped>
.button-base {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  border-radius: var(--radius-input);
  font-family: var(--body-font);
  cursor: pointer;
  border: none;
  transition:
    background 0.2s,
    transform 0.1s;
}

/* Ejemplos de variantes */
.button--primario {
  background: var(--blue);
  color: white;
}

.button--primario:hover {
  background: var(--blue-dark);
}

.button--secundario {
  background: var(--gray-1);
  color: var(--gray-2);
}
</style>
