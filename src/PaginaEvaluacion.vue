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
