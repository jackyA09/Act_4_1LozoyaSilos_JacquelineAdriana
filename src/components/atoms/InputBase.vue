<!-- Entrada de texto basica con opcion de inlcuir icono y ser ReadOnly
 igualmente contiene sus variantes y tienenla posibilidad de cambiar el texto
 por el usuario-->
<template>
  <div class="input-wrapper" :class="{ 'has-icon': showIcon }">
    <!-- Icono opcional -->
    <Icono v-if="showIcon" :name="iconName" :size="20" class="input-icon" />

    <input
      :readonly="readOnly"
      :class="['input-base', `input--${variant}`]"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import Icono from '../atoms/Icono.vue'

export default {
  name: 'InputBase',
  components: { Icono },
  props: {
    modelValue: { type: [String, Number], default: '' },
    placeholder: { type: String, default: 'Texto' },
    variant: { type: String, default: 'gray1' }, // gray1 | gray2 | azul
    readOnly: { type: Boolean, default: false },

    // Props del icono
    showIcon: { type: Boolean, default: false },
    iconName: { type: String, default: '' },
  },
}
</script>

<style scoped>
.input-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

/* Ajuste cuando existe icono */
.has-icon .input-base {
  padding-left: 4px;
}

.input-icon {
  flex-shrink: 0;
}

/* Estilos del input */
.input-base {
  flex: 1;
  height: 40px;
  padding: 8px 12px;
  border-radius: var(--radius-input);
  background: transparent;
  box-sizing: border-box;
  font-family: var(--body-font);
  font-size: var(--body-size);
}

.input--gray1 {
  border: var(--border-gray1);
  color: var(--gray-2);
}

.input--gray2 {
  border: var(--border-gray2);
  color: var(--gray-2);
}

.input--azul {
  border: var(--border-blue);
  color: var(--blue);
}

/* focus */
.input-base:focus {
  outline: none;
  border: var(--border-blue);
}
</style>
