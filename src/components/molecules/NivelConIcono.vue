<!--una barra variable que representa un nivel de satisfaccion
incluye un elipse que no supe bn su funcion, el nivel puede ser modificado en su llenado
por el usuario cuando se mueve el elipse del medio, se actualiza y visualiza con animacion e interaccion-->
<template>
  <div class="nivel-wrapper">
    <!-- Encabezado -->
    <TextoBase variant="titulo" color="black">
      {{ etiqueta }}
    </TextoBase>

    <div class="nivel-contenido">
      <!-- Elipse izquierda -->
      <Elipse :color="cssColor(colorEli)" variant="medium" />

      <!-- Barra interactiva -->
      <div
        class="barra-wrapper"
        @mousedown="startDrag"
        @touchstart="startDrag"
        @click="onBarClick"
        ref="barra"
      >
        <!-- Barra completa -->
        <div
          class="barra-completa"
          :style="{
            background: cssColor(colorFondo),
            border: 'var(--border-default)',
          }"
        ></div>

        <!-- Barra rellenada -->
        <div
          class="barra-rellena"
          :style="{
            width: value + '%',
            background: cssColor(colorBase),
            transition: smooth ? 'width 0.20s ease' : 'none',
          }"
        ></div>

        <!-- Slider -->
        <Elipse
          class="slider"
          variant="medium"
          :color="cssColor(colorSlider)"
          :style="{
            left: `calc(${value}% - 20px)`,
            transition: dragging ? 'none' : smooth ? 'left 0.20s ease' : 'none',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextoBase from '@/components/atoms/TextoBase.vue'
import Rectangulo from '@/components/atoms/Rectangulo.vue'
import Elipse from '@/components/atoms/Elipse.vue'

export default {
  name: 'NivelConIcono',
  // eslint-disable-next-line vue/no-unused-components
  components: { TextoBase, Rectangulo, Elipse },

  props: {
    etiqueta: { type: String, default: 'Nivel de satisfacción' },
    value: { type: Number, default: 50 },

    /* colores */
    colorBase: { type: String, default: 'blue' },
    colorFondo: { type: String, default: 'white' },
    colorEli: { type: String, default: 'gray-2' },
    colorSlider: { type: String, default: 'blue' },

    smooth: { type: Boolean, default: true },
  },

  emits: ['update:value'],

  data() {
    return {
      dragging: false,
    }
  },

  methods: {
    cssColor(token) {
      return token?.startsWith('var(') ? token : `var(--${token})`
    },

    startDrag(e) {
      this.dragging = true
      this.updatePosition(e)

      window.addEventListener('mousemove', this.updatePosition)
      window.addEventListener('touchmove', this.updatePosition)
      window.addEventListener('mouseup', this.stopDrag)
      window.addEventListener('touchend', this.stopDrag)
    },

    stopDrag() {
      this.dragging = false
      window.removeEventListener('mousemove', this.updatePosition)
      window.removeEventListener('touchmove', this.updatePosition)
      window.removeEventListener('mouseup', this.stopDrag)
      window.removeEventListener('touchend', this.stopDrag)
    },

    updatePosition(e) {
      if (!this.dragging) return

      const bar = this.$refs.barra
      const rect = bar.getBoundingClientRect()

      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      let porcentaje = ((clientX - rect.left) / rect.width) * 100

      porcentaje = Math.max(0, Math.min(100, porcentaje))

      this.$emit('update:value', Math.round(porcentaje))
    },

    onBarClick(e) {
      if (this.dragging) return

      const rect = this.$refs.barra.getBoundingClientRect()
      let porcentaje = ((e.clientX - rect.left) / rect.width) * 100

      porcentaje = Math.max(0, Math.min(100, porcentaje))

      this.$emit('update:value', Math.round(porcentaje))
    },
  },
}
</script>

<style scoped>
.nivel-wrapper {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.nivel-contenido {
  display: flex;
  align-items: center;
  gap: 20px;
}

.barra-wrapper {
  position: relative;
  width: 300px;
  height: 20px;
  cursor: pointer;
}

.barra-completa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  border-radius: 20px;
}

.barra-rellena {
  position: absolute;
  top: 0;
  height: 20px;
  border-radius: 20px;
  pointer-events: none;
}

.slider {
  position: absolute;
  top: -5px;
  z-index: 2;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.slider:hover {
  transform: scale(1.08);
  filter: brightness(1.1);
}

.slider:active {
  transform: scale(0.95);
}
</style>
