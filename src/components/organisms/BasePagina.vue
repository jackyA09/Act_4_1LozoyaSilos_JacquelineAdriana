<!-- -->
<template>
  <div class="base-pagina">
    <!-- Perfil arriba -->
    <div class="perfil-container">
      <Perfil height="70px" />
    </div>

    <!-- Contenido de la página -->
    <div class="contenido">
      <slot></slot>
    </div>

    <!-- Menu al fondo abajo -->
    <div class="menu-container">
      <MenuAccesos :items="items" />
    </div>
  </div>
</template>

<script>
import Perfil from '../molecules/Perfil.vue'
import MenuAccesos from '../molecules/MenuAccesos.vue'

export default {
  name: 'BasePagina',
  components: { Perfil, MenuAccesos },

  props: {
    items: {
      type: Array,
      default: () => [
        { icon: 'home', route: '/', color: 'black', size: '36' },
        { icon: 'calendar', route: '/', color: 'black', size: '36' },
        { icon: 'user', route: '/', color: 'black', size: '36' },
      ],
    },
  },
}
</script>

<style scoped>
.base-pagina {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.perfil-container {
  padding: px;
  flex-shrink: 0;
}

.contenido {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.menu-container {
  flex-shrink: 2;
  width: 400px;
  margin-bottom: 20px;
  margin-left: 60%;
  align-items: center;
  align-self: center;
}
</style>
