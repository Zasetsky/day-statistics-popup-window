<template>
  <div id="app">
    <popup-window />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PopupWindow from "./components/PopupWindow.vue";

@Component({
  components: {
    PopupWindow,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
