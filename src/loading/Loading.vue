<template>
  <v-progress-circular
    v-if="isloading"
    indeterminate
    :color="loadColor"
    :size="size"
    :width="15"
  >
  </v-progress-circular>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  isloading: Boolean,
  loadColor: {type: String, default: 'green'},
  size: String,
  width: String
})
</script>