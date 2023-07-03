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
          :totalTime="dateData.totalTime"
          :downtime="dateData.downtime"
          :breaksCount="dateData.breaksCount"
        />

        <Content
          v-if="workPointsForDate.length > 0"
          class="popup-window__content"
          :date="date"
          :workPoints="workPointsForDate"
          :user="user"
        />
        <Footer class="popup-window__footer" :date="date" />

        <div class="popup-window__arrow" :class="{ up: isArrowUp }"></div>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "./popup-window-components/Header.vue";
import Content from "./popup-window-components/Content.vue";
import Footer from "./popup-window-components/Footer.vue";
import { User, WorkPoint } from "@/types";

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

  isArrowUp = true; // Можно переключить стрелку

  get user() {
    return this.$store.getters["user/getUser"] as User;
  }

  get workPointsForDate(): WorkPoint[][] {
    return this.user.dates[this.date]?.workPoints || [];
  }

  get dateData() {
    return this.user.dates[this.date];
  }
}
</script>

<style scoped lang="scss">
.popup-window {
  cursor: auto;

  &__arrow {
    position: absolute;
    left: calc(50% - 10px);
    border-left: 10px solid $color-transparent;
    border-right: 10px solid $color-transparent;

    &.up {
      top: -10px;
      border-bottom: 10px solid $color-background;

      &::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: -11px;
        right: -11px;
        border-left: 11px solid $color-transparent;
        border-right: 11px solid $color-transparent;
        border-bottom: 11px solid $color-primary;
        z-index: -1;
      }
    }

    &:not(.up) {
      bottom: -10px;
      border-top: 10px solid $color-background;

      &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: -11px;
        right: -11px;
        border-left: 11px solid $color-transparent;
        border-right: 11px solid $color-transparent;
        border-top: 11px solid $color-primary;
        z-index: -1;
      }
    }
  }
}
</style>
