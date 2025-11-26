<!-- Texto que puede alternar entre sus variantes y propiedades segun su uso
 dentro del diseño como encabezados, notas, etc-->
<template>
  <component :is="tag" :class="['texto-base', `texto--${variant}`]" :style="inlineStyle">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'TextoBase',
  props: {
    variant: { type: String, default: 'cuerpo' },
    color: { type: String, default: 'blue' },
    as: { type: String, default: 'p' },
  },
  computed: {
    tag() {
      return this.as
    },
    inlineStyle() {
      if (!this.color) return {}
      return {
        color: `var(--${this.color})`,
      }
    },
  },
}
</script>

<style scoped>
.texto-base {
  margin: 0;
}

.texto--titulo {
  font-family: var(--title-font);
  font-size: var(--title-size);
  font-weight: 700;
}

.texto--subtitulo {
  font-family: var(--subtitle-font);
  font-size: var(--subtitle-size);
  font-weight: 600;
}

.texto--cuerpo {
  font-family: var(--body-font);
  font-size: var(--body-size);
  font-weight: 400;
}

.texto--nota {
  font-family: var(--notes-font);
  font-size: var(--notes-size);
  opacity: 0.9;
}
</style>
