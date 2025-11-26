<template>
  <div class="form-wrapper">
    <!-- Back icon (refresh por ahora) -->

    <!-- Encabezado del input -->
    <EntradaFormulario
      v-model="observaciones"
      :mostrarEtiqueta="true"
      etiqueta="Evalua Observaciones"
      :variantInput="'gray1'"
    />

    <!-- Pregunta -->
    <TextoBase as="p" variant="cuerpo" color="gray-2"> ¿Qué te pareció? </TextoBase>

    <!-- Estrellas interactivas -->
    <CalificacionEstrellas v-model="calificacion" titulo="" />

    <!-- Pregunta secundaria -->
    <TextoBase as="h2" variant="titulo" color="gray-2">
      ¿Te gustaría volver a realizarlo?
    </TextoBase>

    <!-- Opciones sí/no (vertical alineadas a la izquierda con interlineado 4px) -->
    <div class="opciones-vertical">
      <OpcionSeleccion v-model="respuesta" :value="'si'" label="Sí" variant="gray-2" />
      <OpcionSeleccion v-model="respuesta" :value="'no'" label="No" variant="gray-2" />
    </div>

    <!-- Nivel (slider) -->
    <NivelConIcono v-model:value="nivel" />

    <!-- Botón aceptar -->
    <div class="accion">
      <ButtonBase width="120px" height="40px" @click="onSubmit"> Aceptar </ButtonBase>
    </div>
  </div>
</template>

<script>
import EntradaFormulario from '@/components/molecules/EntradaFormulario.vue'
import TextoBase from '@/components/atoms/TextoBase.vue'
import CalificacionEstrellas from '@/components/molecules/CalificacionEstrellas.vue'
import OpcionSeleccion from '@/components/molecules/OpcionSeleccion.vue'
import NivelConIcono from '@/components/molecules/NivelConIcono.vue'
import ButtonBase from '@/components/atoms/ButtonBase.vue'

export default {
  name: 'FormularioEvaluativo',
  components: {
    EntradaFormulario,
    TextoBase,
    CalificacionEstrellas,
    OpcionSeleccion,
    NivelConIcono,
    ButtonBase,
  },
  data() {
    return {
      observaciones: '',
      calificacion: 0,
      respuesta: null, // 'si' o 'no'
      nivel: 50, // 0-100
    }
  },
  methods: {
    irAtras() {
      // por ahora refresca
      window.location.reload()
      // en el futuro: this.$router.back() o this.$router.push('/ruta')
    },
    onSubmit() {
      // aquí procesas el envío (o emites evento al padre)
      const payload = {
        observaciones: this.observaciones,
        calificacion: this.calificacion,
        respuesta: this.respuesta,
        nivel: this.nivel,
      }
      console.log('Enviar payload:', payload)

      // ejemplo: resetear campos
      // this.observaciones = ''
      // this.calificacion = 0
      // this.respuesta = null
      // this.nivel = 50

      // podrías también emitir:
      // this.$emit('submit', payload)
    },
  },
}
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
}

/* opciones verticales alineadas a la izquierda con interlineado 4px */
.opciones-vertical {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
}

/* botón centrado */
.accion {
  margin-top: 8px;
  display: flex;
  margin-left: 50px;
  justify-content: left;
}
</style>
