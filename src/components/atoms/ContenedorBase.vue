<template>
  <div
    class="contenedor-base"
    :style="{
      width,
      height,
      padding,
      borderRadius: radius,
      backgroundColor: `var(--color-${color})`,
      border: borde ? '1px solid var(--color-gray-2)' : 'none',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContenedorBase',
  props: {
    width: { type: String, default: '100%' },
    height: { type: String, default: 'auto' },
    padding: { type: String, default: 'var(--spacing-md)' },
    radius: { type: String, default: 'var(--radius-rect-default)' },
    color: { type: String, default: 'white' }, // usa tokens: white, blue, gray-1, gray-2
    borde: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
.contenedor-base {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
