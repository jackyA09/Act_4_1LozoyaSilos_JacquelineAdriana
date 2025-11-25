<template>
  <Rectangulo :height="height" :radius="radius" :width="width" color="gray-1">
    <div class="accesos">
      <div v-for="(item, i) in items" :key="i" class="acceso">
        <IconAtom :name="item.icon" :variant="item.colorIcon" :size="normalizeSize(item.size)" />
      </div>
    </div>
  </Rectangulo>
</template>

<script>
import Rectangulo from '@/components/atoms/Rectangulo.vue'
import IconAtom from '@/components/atoms/Icono.vue'

export default {
  name: 'MenuAccesos',
  components: { Rectangulo, IconAtom },

  props: {
    items: { type: Array, default: () => [] },
    height: { type: String, default: '40px' },
    width: { type: String, default: '40%' },
    radius: { type: String, default: 'var(--radius-input)' },
  },

  methods: {
    normalizeSize(size) {
      if (!size) return 24
      return String(size).replace('px', '')
    },
  },
}
</script>

<style scoped>
.accesos {
  display: flex;
  flex-direction: row;
  justify-content: last baseline;
  padding: 20px;
  gap: 20px;
  height: 100%;
}

.acceso {
  display: flex;
  justify-content: right;
  cursor: pointer;
}
</style>
