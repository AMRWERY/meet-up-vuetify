<template>
  <ToolBar />
  <router-view />
</template>

<script>
import ToolBar from '../src/views/ToolBar.vue';

export default {
  components: {
    ToolBar
  }
}
</script>
