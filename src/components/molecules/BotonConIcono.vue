<!--Boton con icono usado como variante, en el diseño no se usa-->
<template>
  <ButtonBase :variant="variant" @click="$emit('click')">
    <div class="contenido">
      <IconAtom v-if="icono" :name="icono" :variant="colorIcon" size="16" />
      <span><slot /></span>
    </div>
  </ButtonBase>
</template>

<script>
import ButtonBase from '../atoms/ButtonBase.vue'
import IconAtom from '../atoms/Icono.vue'

export default {
  name: 'BotonConIcono',
  components: { ButtonBase, IconAtom },
  props: {
    icono: { type: String, default: 'calendar' },
    variant: { type: String, default: 'primario' },
    colorIcon: { type: String, default: 'gray-2' },
  },
}
</script>

<style scoped>
.contenido {
  display: flexbox;
  align-items: first baseline;
  gap: 2px;
}
</style>
