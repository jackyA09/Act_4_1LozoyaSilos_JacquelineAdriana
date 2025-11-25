<template>
  <div
    class="radio-base"
    :class="[`radio--${variant}`, { 'radio--checked': checked }]"
    :style="radioStyle"
    @click="onToggle"
    role="radio"
    :aria-checked="checked"
  >
    <div class="radio-dot" v-if="checked" :style="dotStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'RadioBase',
  props: {
    checked: { type: Boolean, default: false },
    variant: { type: String, default: 'gray-2' }, // gray1 | gray2 | azul
    size: { type: Number, default: 32 }, // DINÁMICO
  },
  computed: {
    radioStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
      }
    },
    dotStyle() {
      return {
        width: this.size * 0.5 + 'px',
        height: this.size * 0.5 + 'px',
      }
    },
  },
  methods: {
    onToggle() {
      this.$emit('update:checked', !this.checked)
      this.$emit('change', !this.checked)
    },
  },
}
</script>

<style scoped>
.radio-base {
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid var(--gray-2);
  background: transparent;
}

/* variantes */
.radio--gray1 {
  border: var(--border-gray1);
}
.radio--gray2 {
  border: var(--border-gray2);
}
.radio--azul {
  border: var(--border-blue);
}

.radio-dot {
  border-radius: 50%;
  background: currentColor;
}

/* DOT por variante */
.radio--gray1 .radio-dot {
  color: var(--gray-1);
  background: var(--gray-1);
}
.radio--gray2 .radio-dot {
  color: var(--gray-2);
  background: var(--gray-2);
}
.radio--azul .radio-dot {
  color: var(--blue);
  background: var(--blue);
}
</style>
