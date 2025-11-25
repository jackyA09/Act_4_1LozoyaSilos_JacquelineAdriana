<template>
  <div class="avatar-base" :style="avatarStyle">
    <template v-if="hasImage">
      <img :src="imagen" alt="avatar" class="avatar__img" />
    </template>
    <template v-else>
      <div class="avatar--noimg">
        <slot>sin imagen</slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AvatarBase',
  props: {
    imagen: { type: String, default: null },
    size: { type: String, default: '38px' }, // default circle size
    borderColor: { type: String, default: 'gray2' }, // token name
  },
  computed: {
    hasImage() {
      return !!this.imagen
    },
    avatarStyle() {
      return {
        width: this.size,
        height: this.size,
        borderRadius: 'var(--radius-ellipse)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid var(--${this.borderColor})`,
        overflow: 'hidden',
        background: this.hasImage ? 'transparent' : 'var(--gray-2)',
      }
    },
  },
}
</script>

<style scoped>
.avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.avatar--noimg {
  color: white;
  font-size: 12px;
  text-align: center;
}
</style>
