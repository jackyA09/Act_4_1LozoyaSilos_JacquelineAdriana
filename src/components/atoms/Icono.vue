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
    /** Mapea tus nombres a los nombres reales de oh-vue-icons */
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

    /** oh-vue-icons usa scale, no width/height */
    scaleValue() {
      return Number(this.size) / 30 // 30px = scale 1, 60px = scale 2, etc
    },

    /** Aplica tus tokens */
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
