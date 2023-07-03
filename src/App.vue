<template>
  <div id="app">
    <div
      v-for="item in statuses"
      :key="item.date"
      @click="showPopup(item.date)"
      @mouseover="cancelCloseTimeout"
      @mouseleave="startHidePopup"
      class="circle"
      v-popover:popover
    >
      <popup-window
        ref="popover"
        :isVisible="isPopupVisible && currentPopup === item.date"
        :date="item.date"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PopupWindow from "./components/PopupWindow.vue";
import { LocalStates } from "@/types";

@Component({
  components: {
    PopupWindow,
  },
})
export default class App extends Vue {
  currentPopup = "";
  isPopupVisible = false;
  closeTimeout: number | null = null;

  get statuses() {
    return this.$store.getters["status/getAllStatuses"];
  }

  get showOptions() {
    return this.$store.getters["localStates/getshowOptions"] as LocalStates;
  }

  showPopup(date: string) {
    this.currentPopup = date;
    this.isPopupVisible = true;
    this.cancelCloseTimeout();
  }

  startHidePopup() {
    this.closeTimeout = window.setTimeout(() => {
      if (!this.showOptions) {
        this.isPopupVisible = false;
      }
    }, 300);
  }

  cancelCloseTimeout() {
    if (this.closeTimeout !== null) {
      window.clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
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
