<template>
  <div class="opcion" @click="toggle">
    <RadioBase :checked="checked" :variant="variant" :size="size" />

    <TextoBase as="span" variant="cuerpo" color="gray-2">
      {{ texto }}
    </TextoBase>
  </div>
</template>

<script>
import RadioBase from '../atoms/RadioBase.vue'
import TextoBase from '../atoms/TextoBase.vue'

export default {
  name: 'OpcionSeleccion',
  components: { RadioBase, TextoBase },
  props: {
    checked: { type: Boolean, default: false },
    texto: { type: String, default: 'Opción' }, // ✔ TEXTO DEFAULT
    variant: { type: String, default: 'gray-2' }, // colores del radio
    size: { type: Number, default: 24 }, // ✔ TAMAÑO DEL RADIO
  },
  emits: ['update:checked'],
  methods: {
    toggle() {
      this.$emit('update:checked', !this.checked)
    },
  },
}
</script>

<style scoped>
.opcion {
  display: flex;
  flex-direction: column;
  align-items: center; /* centra horizontalmente */
  gap: 0px; /* puedes ajustar la separación */
  cursor: pointer;
}
</style>
