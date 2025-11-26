<!--usa una cantidad de radio buttons en este caso dos, cada uno con su nota debajo del mismo
permite selccionar y deseleccionar, actuan como excluyentes mutuos-->
<template>
  <div
    class="opcion"
    :class="{ 'opcion--selected': isSelected }"
    @click="select"
    role="radio"
    :aria-checked="isSelected"
  >
    <!-- radio circular -->
    <RadioBase :checked="isSelected" :variant="variant" :size="size" />

    <!-- texto debajo -->
    <TextoBase as="span" variant="cuerpo" :color="variantText">
      {{ label }}
    </TextoBase>
  </div>
</template>

<script>
import RadioBase from '@/components/atoms/RadioBase.vue'
import TextoBase from '@/components/atoms/TextoBase.vue'

export default {
  name: 'OpcionSeleccion',
  components: { RadioBase, TextoBase },
  props: {
    modelValue: { type: [String, Number, Boolean], default: null }, // v-model (valor seleccionado en el padre)
    value: { type: [String, Number, Boolean], required: true }, // el valor de esta opción
    label: { type: String, default: 'Opción' },
    variant: { type: String, default: 'gray-2' }, // color del radio
    size: { type: Number, default: 24 }, // tamaño radio px
    variantText: { type: String, default: 'gray-2' },
    layout: { type: String, default: 'vertical' }, // 'vertical' o 'horizontal'
  },
  emits: ['update:modelValue'],
  computed: {
    isSelected() {
      return this.modelValue === this.value
    },
  },
  methods: {
    select() {
      // cuando se hace click,emite el valor de esta opción
      this.$emit('update:modelValue', this.value)
    },
  },
}
</script>

<style scoped>
.opcion {
  display: flex;
  flex-direction: column; /* radio arriba, texto abajo */
  gap: 4px;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

/* variante cuando está seleccionado */
.opcion--selected {
  transform: none;
}

/*alineacion horizontal: */
.opcion.horizontal {
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
</style>
