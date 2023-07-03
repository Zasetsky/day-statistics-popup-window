<template>
  <div class="popup-window">
    <el-popover
      ref="popover"
      placement="top"
      trigger="manual"
      :popper-class="'popover-custom'"
      v-model="isVisible"
    >
      <div class="popover-content">
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
    </el-popover>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "./popup-window-components/Header.vue";
import Content from "./popup-window-components/Content.vue";
import Footer from "./popup-window-components/Footer.vue";
import { User, WorkPoints } from "@/types";

@Component({
  components: {
    Header,
    Content,
    Footer,
  },
})
export default class PopupWindow extends Vue {
  @Prop() date!: string;
  @Prop() isVisible!: boolean;

  closeTimeout: number | null = null;

  get user() {
    return this.$store.getters["user/getUser"] as User;
  }

  get workPointsForDate() {
    return this.user.workPoints[this.date] || ([] as WorkPoints[][]);
  }
}
</script>

<style lang="scss">
.popover-custom {
  border: 1px solid #17505b !important;
  border-radius: 4px;
  background-color: #f1faf5 !important;
  width: 250px !important;
  max-height: 350px !important;
  min-height: 203px !important;
}

.popup-window {
  &__header {
    height: 99px;
  }

  &__content {
    min-height: 152px;
    max-height: 168px;
    width: 259px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  &__footer {
    min-height: 64px;
    max-height: 104px;
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
