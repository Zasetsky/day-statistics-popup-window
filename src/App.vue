<template>
  <div id="app">
    <div
      v-for="item in statuses"
      :key="item.date"
      @click="showPopup(item.date)"
      @mouseover="cancelCloseTimeout"
      @mouseleave="startHidePopup"
      class="circle"
      :style="{ backgroundColor: getColor(item.dayStatus) }"
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

  getColor(status: string) {
    switch (status) {
      case "success":
        return "#6FCF97";
      case "danger":
        return "#EB5757";
      case "warning":
        return "#F2994A";
      default:
        return "transparent";
    }
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

  hidePopup(event: MouseEvent) {
    if (!this.$refs.popover) return;

    const popover = (this.$refs.popover as Vue).$el as HTMLElement;

    if (
      popover &&
      !popover.contains(event.target as Node) &&
      !this.showOptions
    ) {
      this.isPopupVisible = false;
    }
  }
}
</script>

<style scoped lang="scss">
.circle {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;
  margin-top: 80px;
}
</style>
