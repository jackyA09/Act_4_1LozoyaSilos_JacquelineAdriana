<!--Agrupacion de esteellas con interaccion, variantes y adapta las propiedades del atomo-->
<template>
  <div class="calificacion-contenedor">
    <TextoBase color="gray-2" variant="cuerpo" class="titulo">
      {{ titulo }}
    </TextoBase>

    <div
      class="estrellas"
      @mouseleave="hoverIndex = null"
      role="radiogroup"
      aria-label="Calificación"
    >
      <EstrellaBase
        v-for="n in max"
        :key="n"
        :state="n <= displayCount ? 'filled' : 'empty'"
        class="estrella"
        @mouseover="onHover(n)"
        @click="onSelect(n)"
      />
    </div>
  </div>
</template>

<script>
import EstrellaBase from '@/components/atoms/EstrellaBase.vue'
import TextoBase from '@/components/atoms/TextoBase.vue'

export default {
  name: 'CalificacionEstrellas',
  components: { EstrellaBase, TextoBase },

  props: {
    modelValue: { type: Number, default: 0 },
    max: { type: Number, default: 5 },
    titulo: { type: String, default: 'Calificar' },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      hoverIndex: null,
    }
  },

  computed: {
    displayCount() {
      return this.hoverIndex !== null ? this.hoverIndex : Number(this.modelValue || 0)
    },
  },

  methods: {
    // Al pasar el ratón, actualiza el índice (efecto hover)
    onHover(n) {
      this.hoverIndex = n
    },

    // Al hacer click, actualiza el valor y emite el cambio (selección permanente)
    onSelect(n) {
      // Si el usuario hace clic en la estrella ya seleccionada, la desactiva (toggle)
      const newValue = this.modelValue === n ? 0 : n
      this.$emit('update:modelValue', newValue)
      this.hoverIndex = null // Quita el estado hover
    },
  },
}
</script>

<style scoped>
.calificacion-contenedor {
  display: flex;
  align-items: center;
  gap: 12px;
}

.estrellas {
  display: flex;
  gap: 6px;
}

.estrella {
  cursor: pointer;
  transition:
    transform 0.12s ease,
    opacity 0.12s ease;
}

.estrella:hover {
  transform: scale(1.12);
}
</style>
