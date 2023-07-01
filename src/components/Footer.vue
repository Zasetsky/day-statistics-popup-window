<template>
  <div class="footer">
    <p class="footer__status">
      <span
        :style="{ backgroundColor: statusColor }"
        class="status-circle"
      ></span>
      {{ statusText }}
    </p>
    <p class="footer__comment" v-if="status && status.comment">
      {{ status.comment }}
    </p>
    <div
      class="footer__extra-info"
      v-if="status && status.dayStatus === 'danger'"
    >
      <p class="footer__extra-info__item">
        Уровень нормы
        <span>{{ user.normLevel.val }}/{{ user.normLevel.max }}</span>
      </p>
      <p class="footer__extra-info__item">
        Количество звонков в день
        <span>{{ user.callsCount.val }}/{{ user.callsCount.max }} </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { User, Status } from "@/types";

@Component
export default class Footer extends Vue {
  get user() {
    return this.$store.getters.getUser as User;
  }

  get status() {
    return this.$store.getters.getStatus as Status;
  }

  get statusColor() {
    if (!this.status) return "transparent";

    switch (this.status.dayStatus) {
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

  get statusText() {
    if (!this.status) return "";

    switch (this.status.dayStatus) {
      case "success":
        return "День засчитан";
      case "danger":
        return "Не засчитан";
      case "warning":
        return "Нарушения";
      default:
        return "";
    }
  }

  mounted() {
    console.log(this.status);
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto", sans-serif;
  border-top: 1px solid #17505b;
  margin: 0 -20px -50px -20px;
  padding: 20px;

  &__status {
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: #303133;
    font-weight: bold;

    .status-circle {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  &__comment {
    color: #606266;
    background-color: #e2f5ea;
    width: 90%;
    padding: 11px 10px;
    font-size: 8px;
    word-break: keep-all;
  }

  &__extra-info {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__item {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      font-size: 10px;
      color: #606266;

      span {
        color: #303133;
      }
    }

    &__item:first-child {
      margin-top: 10px;
    }

    &__item:last-child {
      margin-bottom: 30px;
    }
  }
}
</style>
