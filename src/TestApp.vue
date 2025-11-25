<!-- Test de atomos y comoponentes en navegador "directo"-->
<template>
  <!-- Cambia este componente para probar otro -->
  <AvatarBase />
  <CalificacionEstrellas />
  <Perfil />
  <Rectangulo />
  <MenuAccesos />
  <ButtonBase />
</template>

<script setup>
import Perfil from './components/molecules/Perfil.vue'
import CalificacionEstrellas from './components/molecules/CalificacionEstrellas.vue'
import AvatarBase from './components/atoms/AvatarBase.vue'
import Rectangulo from './components/atoms/Rectangulo.vue'
import MenuAccesos from './components/molecules/MenuAccesos.vue'
import ButtonBase from './components/atoms/ButtonBase.vue'
// También puedes probar un átomo:
// import ComponenteEnPrueba from "@/components/atoms/ButtonBase.vue"
</script>
