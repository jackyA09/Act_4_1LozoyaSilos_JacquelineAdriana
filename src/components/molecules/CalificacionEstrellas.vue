<template>
  <div class="contenedor">
    <!-- Texto a la izquierda -->
    <TextoBase color="gray-2" variant="detalle">{{ titulo }}</TextoBase>

    <!-- Estrellas a la derecha -->
    <div class="estrellas">
      <Star v-for="n in 5" :key="n" :state="n <= estrellasLlenas ? 'filled' : 'empty'" />
    </div>
  </div>
</template>

<script>
import Star from '../atoms/EstrellaBase.vue'
import TextoBase from '../atoms/TextoBase.vue'

export default {
  name: 'CalificacionEstrellas',

  components: { Star, TextoBase },

  props: {
    titulo: { type: String, default: 'Califica' },

    // variantes: Star0, Star1, Star2, Star3, Star4, Star5
    variant: { type: String, default: 'Star0' },
  },

  computed: {
    estrellasLlenas() {
      const num = Number(this.variant.replace('Star', ''))
      return isNaN(num) ? 0 : Math.min(5, Math.max(0, num))
    },
  },
}
</script>

<style scoped>
.contenedor {
  display: flex;
  align-items: center;
  gap: 12px;
}

.estrellas {
  display: flex;
  gap: 4px;
}
</style>
