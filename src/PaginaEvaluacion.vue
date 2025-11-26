<!--La pagina que usa la Base par ala misma y ademas el Formulario de Evaluacion, incluye un icono que manda
a la pagina anterior-->
<template>
  <BasePagina>
    <FormularioEvaluativo />
  </BasePagina>
</template>

<script>
import BasePagina from './components/organisms/BasePagina.vue'
import FormularioEvaluativo from './components/organisms/FormularioEvaluativo.vue'

export default {
  name: 'PaginaEvaluacion',
  components: { BasePagina, FormularioEvaluativo },
}
</script>
