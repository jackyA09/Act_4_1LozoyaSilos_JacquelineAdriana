<template>
  <div class="entrada">
    <!-- Encabezado opcional -->
    <TextoBase v-if="showHeader" variant="subtitulo" color="gray-2">
      {{ etiqueta }}
    </TextoBase>

    <!-- Input con o sin icono -->
    <InputBase
      v-model="localValue"
      :placeholder="placeholder"
      :variant="variant"
      :readOnly="readOnly"
      :showIcon="showIcon"
      :iconName="iconName"
    />
  </div>
</template>

<script>
import TextoBase from '../atoms/TextoBase.vue'
import InputBase from '../atoms/InputBase.vue'

export default {
  name: 'EntradaFormulario',
  components: { TextoBase, InputBase },

  props: {
    modelValue: String,

    // Encabezado
    showHeader: { type: Boolean, default: true },
    etiqueta: { type: String, default: 'Texto' },

    // Input
    placeholder: String,
    variant: { type: String, default: 'gray1' },
    readOnly: { type: Boolean, default: false },

    // Icono
    showIcon: { type: Boolean, default: false },
    iconName: { type: String, default: 'calendar' },
  },

  emits: ['update:modelValue'],

  computed: {
    localValue: {
      get() {
        return this.modelValue
      },
      set(v) {
        this.$emit('update:modelValue', v)
      },
    },
  },
}
</script>

<style scoped>
.entrada {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
