<template>
  <div class="form-wrapper">
    <!-- Botón Back -->
    <Icono name="RiArrowLeftLine" variant="black" size="28" class="icon-back" @click="irAtras" />

    <!-- Entrada de Evaluación -->
    <EntradaFormulario encabezado="Evalua Observaciones" class="entrada-evaluacion" />

    <!-- Pregunta 1 -->
    <TextoBase variant="parrafo" color="gray-3" class="pregunta"> ¿Qué te pareció? </TextoBase>

    <!-- Estrellas -->
    <CalificacionEstrellas variant="Star0" />

    <!-- Pregunta 2 -->
    <TextoBase variant="subtitulo" class="pregunta"> ¿Te gustaría volver a realizarlo? </TextoBase>

    <!-- Opciones Sí / No -->
    <div class="opciones">
      <OpcionSeleccion texto="Sí" color="gray-2" />
      <OpcionSeleccion texto="No" color="gray-2" />
    </div>

    <!-- Nivel -->
    <NivelConIcono class="nivel" />

    <!-- Botón Aceptar -->
    <ButtonBase class="boton-aceptar"> Aceptar </ButtonBase>
  </div>
</template>

<script>
import Icono from '../atoms/Icono.vue'
import EntradaFormulario from '../molecules/EntradaFormulario.vue'
import TextoBase from '../atoms/TextoBase.vue'
import CalificacionEstrellas from '../molecules/CalificacionEstrellas.vue'
import OpcionSeleccion from '../molecules/OpcionSeleccion.vue'
import NivelConIcono from '../molecules/NivelConIcono.vue'
import ButtonBase from '../atoms/ButtonBase.vue'

export default {
  name: 'FormularioEvaluativo',
  components: {
    Icono,
    EntradaFormulario,
    TextoBase,
    CalificacionEstrellas,
    OpcionSeleccion,
    NivelConIcono,
    ButtonBase,
  },

  methods: {
    irAtras() {
      // POR AHORA refresca la página
      window.location.reload()

      // MÁS ADELANTE:
      // this.$router.push("/otra-pagina")
    },
  },
}
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.icon-back {
  cursor: pointer;
  margin-bottom: 12px;
}

.pregunta {
  text-align: left;
}

.opciones {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}

.nivel {
  margin-top: 12px;
}

.boton-aceptar {
  margin-top: 16px;
}
</style>
