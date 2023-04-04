<template>
  <v-app>
    <v-main>
      <loading :isloading="load" loadColor="green" size="30" width="10"/>
      <v-btn @click="toggleLoading">Load</v-btn>
    </v-main>
  </v-app>
</template>

<script setup>
import {ref, getCurrentInstance} from 'vue'

const { appContext } = getCurrentInstance()

let load = ref(true)
const toggleLoading = () => {
  load.value = appContext.config.globalProperties.$toggleLoading(load.value)
}

</script>


