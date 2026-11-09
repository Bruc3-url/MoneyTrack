
<template>
  <button class="">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}

withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
})
</script>
