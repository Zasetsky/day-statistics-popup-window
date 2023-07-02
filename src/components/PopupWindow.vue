<template>
  <div class="popup-window">
    <el-dialog
      :visible.sync="visible"
      :width="'250px'"
      class="popup-window__dialog"
      :show-close="false"
      :modal="false"
    >
      <div @mouseleave="startCloseTimeout" @mouseenter="cancelCloseTimeout">
        <Header
          class="popup-window__header"
          :breaksCount="4"
          totalTime="8 ч. 10 мин."
          downtime="0 мин."
        />
        <Content
          v-if="workPointsForDate.length > 0"
          class="popup-window__content"
          :date="date"
          :workPoints="workPointsForDate"
          :user="user"
        />
        <Footer class="popup-window__footer" :date="date" />
        <div class="popup-window__arrow"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "./popup-window-components/Header.vue";
import Content from "./popup-window-components/Content.vue";
import Footer from "./popup-window-components/Footer.vue";
import { User, LocalStates, WorkPoints } from "@/types";

@Component({
  components: {
    Header,
    Content,
    Footer,
  },
})
export default class PopupWindow extends Vue {
  @Prop() date!: string;

  visible = true;
  closeTimeout: number | null = null;

  get showOptions() {
    return this.$store.getters["localStates/getshowOptions"] as LocalStates;
  }

  get user() {
    return this.$store.getters["user/getUser"] as User;
  }

  get workPointsForDate() {
    return this.user.workPoints[this.date] || ([] as WorkPoints[][]);
  }

  startCloseTimeout() {
    this.closeTimeout = window.setTimeout(() => {
      if (!this.showOptions) {
        this.visible = false;
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

<style lang="scss">
.popup-window {
  &__dialog .el-dialog {
    background-color: #f1faf5;
    border: 1px solid #17505b;
    border-radius: 4px;
  }

  &__header {
    height: 99px;
  }

  &__content {
    min-height: 152px;
    max-height: 168px;
    width: 225px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  &__footer {
    min-height: 64px;
    max-height: 180px;
  }

  &__arrow {
    position: absolute;
    bottom: -10px;
    left: calc(50% - 10px);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #f1faf5;

    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: -11px;
      right: -11px;
      border-left: 11px solid transparent;
      border-right: 11px solid transparent;
      border-top: 11px solid #17505b;
      z-index: -1;
    }
  }
}
</style>
