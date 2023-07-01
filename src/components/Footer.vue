<template>
  <div class="footer">
    <p class="footer__status">
      <span
        :style="{ backgroundColor: statusColor }"
        class="status-circle"
      ></span>
      {{ statusText }}
    </p>
    <p class="footer__comment" v-if="isAdmin || comment">
      Комментарий: {{ comment }}
    </p>
    <div class="footer__extra-info" v-if="dayStatus === 'danger'">
      <span class="footer__extra-info__item"
        >Уровень нормы {{ normLevel }}</span
      >
      <span class="footer__extra-info__item"
        >Количество звонков в день {{ callsCount }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() dayStatus!: string;
  @Prop() comment!: string;
  @Prop() isAdmin!: boolean;
  @Prop() normLevel!: string;
  @Prop() callsCount!: number;

  get statusColor() {
    switch (this.dayStatus) {
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
    switch (this.dayStatus) {
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
    console.log(this.statusColor);
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
    color: #303133;
    font-weight: bold;
  }

  &__extra-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__item {
      margin-top: 20px;
      font-size: 10px;
      color: #606266;
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
