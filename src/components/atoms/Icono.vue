<!-- Iconos Que se usaran para el diseño, con distintas propiedades y Mapeo de nombres para
 mayor simplicidad al momento de modificar alguna propiedad
 Personalmente la parte de la implementacion de iconos fue la mas complicada y la que mas me tomo tiempo,
 primero copiando los svg desde figma del diseño de mis compañeros y solo importarlos
 pero no fue asi de simple, tuve problemas con la importacion con las rutas y vite al no encontrar
 los iconos entraba en ciclo y me mostraba una pantalla en blanco, busque otra opcion
 y encontre que era mejor opcion en mi caso de principiante usar iconos oficiales de vue,
 estos los encontre en la pagina oh-vue-icons.js.org, y asi logre usar y dejar ese problema por la paz -->
<template>
  <v-icon :name="mappedName" :scale="scaleValue" :style="iconStyle" class="icono" />
</template>

<script>
export default {
  name: 'IconAtom',

  props: {
    name: { type: String, default: 'home' }, // home | user | calendar | atras
    size: { type: [String, Number], default: '30' }, // px
    variant: { type: String, default: 'gray-2' }, // tokens de color
  },

  computed: {
    /**Iconos de oh-vue-icons */
    nameMap() {
      return {
        home: 'ri-home-2-fill',
        user: 'hi-solid-emoji-happy',
        calendar: 'fa-calendar-alt',
        atras: 'la-less-than-solid',
      }
    },

    /** Nombre real del ícono en oh-vue-icons */
    mappedName() {
      return this.nameMap[this.name] || this.name
    },

    scaleValue() {
      return Number(this.size) / 30 // 30px = scale 1, 60px = scale 2, etc
    },

    iconStyle() {
      return {
        color: `var(--${this.variant})`,
      }
    },
  },
}
</script>

<style scoped>
.icono {
  display: inline-block;
}
</style>
