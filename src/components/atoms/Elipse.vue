<!--usado para representar distintos circulos como
iconos, radiobutton, etc, segun el diseño-->
<template>
  <div class="elipse" :style="elipseStyle">
    <slot />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Elipse',
  props: {
    variant: { type: String, default: 'large' }, // small | medium | large
    size: { type: String, default: null },
    color: { type: String, default: 'gray-2' }, // token 'blue', 'gray-2', etc
  },
  computed: {
    computedSize() {
      if (this.size) return this.size
      if (this.variant === 'small') return '20px'
      if (this.variant === 'medium') return '30px'
      return '38px' // large
    },
    elipseStyle() {
      return {
        width: this.computedSize,
        height: this.computedSize,
        borderRadius: 'var(--radius-ellipse)',
        background: `${this.color}`,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
  },
}
</script>

<style scoped>
.elipse {
  box-sizing: border-box;
}
</style>
