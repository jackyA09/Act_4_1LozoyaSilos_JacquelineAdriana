<!--Diseño del perfil, repetitivo usado en casi cada pagina del diseño original
es un rectangulo en azul con la supuesta forto de persil, entre las variantes permite indicar
con texto si contiene o no imagen, por default sin imagen-->
  <template>
  <div class="perfil-wrapper">
    <Rectangulo
      class="perfil-rect"
      color="blue"
      :width="width"
      height="80px"
      radius="var(--radius-rect-default)"
    >
      <div class="perfil-contenido">
        <!-- Cuadrado (avatar vacío) -->
        <Rectangulo
          class="avatar-cuadrado"
          color="white"
          width="50px"
          height="50px"
          radius="var(--radius-input)"
        >
          <TextoBase variant="detalle" color="gray-1">sin imagen</TextoBase>
        </Rectangulo>
      </div>
    </Rectangulo>
  </div>
</template>

<script>
import Rectangulo from '../atoms/Rectangulo.vue'
import TextoBase from '../atoms/TextoBase.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Perfil',
  components: { Rectangulo, TextoBase },
  props: {
    width: { type: String, default: '400px' }, // Solo se puede cambiar el alto
  },
}
</script>

<style scoped>
.perfil-wrapper {
  width: fit-content;
}

/* Rectángulo principal azul */
.perfil-rect {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
}

/* Contenedor del avatar cuadrado */
.perfil-contenido {
  display: flex;
  align-items: center;
}

/* Cuadrado blanco */
.avatar-cuadrado {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
