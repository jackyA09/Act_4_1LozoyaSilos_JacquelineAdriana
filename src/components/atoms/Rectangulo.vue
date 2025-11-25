<template>
  <div class="rectangulo" :style="rectStyle">
    <slot />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Rectangulo',
  props: {
    width: { type: String, default: '80%' },
    height: { type: String, default: '100px' },
    color: { type: String, default: 'blue' }, // token name e.g. 'blue' -> var(--blue)
    radius: { type: String, default: 'var(--radius-rect-default)' },
    bgImage: { type: String, default: null }, // optional: url
  },
  computed: {
    rectStyle() {
      const style = {
        width: this.width,
        height: this.height,
        borderRadius: this.radius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }
      if (this.color) style.background = `var(--${this.color})`
      if (this.bgImage) {
        style.backgroundImage = `url(${this.bgImage})`
        style.backgroundSize = 'cover'
        style.backgroundPosition = 'center'
      }
      return style
    },
  },
}
</script>

<style scoped>
.rectangulo {
  border: none;
}
</style>
