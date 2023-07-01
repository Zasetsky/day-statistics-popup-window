<template>
  <div class="footer-status">
    <div class="footer-status__info" @click="showOptions = !showOptions">
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
      ></i>
    </div>

    <status-select-window
      :statuses="statuses"
      :getColor="getColor"
      :show="showOptions"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import StatusSelectWindow from "./status-component/StatusSelectWindow.vue";
import { User, Status } from "@/types";

@Component({
  components: {
    StatusSelectWindow,
  },
})
export default class FooterStatus extends Vue {
  showOptions = false;
  statuses = [
    { value: "success", label: "День засчитан" },
    { value: "warning", label: "Нарушение" },
    { value: "danger", label: "День не засчитан" },
  ];

  get user() {
    return this.$store.getters.getUser as User;
  }

  get status() {
    return this.$store.getters.getStatus as Status;
  }

  get statusColor() {
    return this.getColor(this.status?.dayStatus);
  }

  get statusText() {
    if (!this.status) return "";
    const status = this.statuses.find((s) => s.value === this.status.dayStatus);
    return status ? status.label : "";
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
}
</script>

<style scoped lang="scss">
.footer-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin-top: 10px;
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
