<template>
  <div id="app">
    <div
      v-for="item in statuses"
      :key="item.date"
      @mouseover="showPopup(item.date)"
      @mouseleave="hidePopup"
      class="circle"
    >
      <popup-window v-if="currentPopup === item.date" :date="item.date" />
    </div>
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
export default class App extends Vue {
  currentPopup = "";

  get statuses() {
    return this.$store.getters["status/getAllStatuses"];
  }

  showPopup(date: string) {
    this.currentPopup = date;
  }

  hidePopup() {
    this.currentPopup = "";
  }
}
</script>

<style scoped lang="scss">
.circle {
  width: 50px;
  height: 50px;
  background-color: #17505b;
  border-radius: 50%;
  margin: auto;
  margin-top: 80px;
}
</style>
