<template>
  <div class="footer-status">
    <div
      class="footer-status__info"
      @click.stop="toggleShowOptions(!showOptions)"
      :style="{ cursor: user.isAdmin ? 'pointer' : 'default' }"
    >
      <div class="footer-status__info-text">
        <span
          :style="{ backgroundColor: statusColor }"
          class="status-circle"
        ></span>
        <span>{{ statusText }}</span>
      </div>
      <i
        v-if="user.isAdmin"
        class="el-icon-arrow-right footer-status__arrow"
        :class="{ 'footer-status__arrow--hover': isHovered || showOptions }"
      ></i>
    </div>

    <status-select-window
      ref="statusSelectWindow"
      :status="status"
      :statuses="statuses"
      :getColor="getColor"
      :show="showOptions"
      @mouseleave.native="onMouseLeave"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import StatusSelectWindow from "./status-component/StatusSelectWindow.vue";
import { User, Status, LocalStates } from "@/types";

@Component({
  components: {
    StatusSelectWindow,
  },
})
export default class FooterStatus extends Vue {
  @Prop() date!: string;

  isHovered = false;
  statuses = [
    { value: "success", label: "День засчитан" },
    { value: "warning", label: "Нарушение" },
    { value: "danger", label: "День не засчитан" },
  ];

  get user() {
    return this.$store.getters.getUser as User;
  }

  get status() {
    return this.$store.getters["status/getStatusByDate"](this.date) as Status;
  }

  get showOptions() {
    return this.$store.getters["localStates/getshowOptions"] as LocalStates;
  }

  get statusColor() {
    return this.getColor(this.status?.dayStatus);
  }

  get statusText() {
    if (!this.status) return "";
    const status = this.statuses.find((s) => s.value === this.status.dayStatus);
    return status ? status.label : "";
  }

  closeOnOutsideClick(event: Event) {
    const el = this.$refs.statusSelectWindow as Vue | undefined;
    if (el && !el.$el.contains(event.target as Node)) {
      this.toggleShowOptions(false);
    }
  }

  toggleShowOptions(value: boolean) {
    if (!this.user.isAdmin) return;

    this.$store.dispatch("localStates/toggleShowOptions", value);
  }

  onMouseLeave() {
    this.toggleShowOptions(false);
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

  mounted() {
    this.$el.addEventListener("mouseenter", () => {
      this.isHovered = true;
    });

    this.$el.addEventListener("mouseleave", () => {
      this.isHovered = false;
    });

    window.addEventListener("click", this.closeOnOutsideClick);
  }

  beforeDestroy() {
    window.removeEventListener("click", this.closeOnOutsideClick);
  }
}
</script>

<style scoped lang="scss">
.footer-status {
  position: relative;
  width: 100%;
  color: #303133;
  font-weight: bold;

  &__info {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    width: 100%;

    &-text {
      display: flex;
      align-items: center;
    }

    & .el-icon-arrow-right {
      transition: color 0.3s ease-in-out;
    }
  }

  .footer-status__arrow--hover {
    color: #6fcf97 !important;
  }

  .status-circle {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }
}
</style>
