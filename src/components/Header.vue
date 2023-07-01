<template>
  <div class="header">
    <p class="header__item">
      <span class="header__item-label">Общее время</span>
      <span class="header__item-value">{{ totalTime }}</span>
    </p>
    <p class="header__item">
      <span class="header__item-label">Время простоя</span>
      <span class="header__item-value">{{ downtime }}</span>
    </p>
    <p class="header__item">
      <span class="header__item-label">Количество перерывов</span>
      <span class="header__item-value">{{ breaksCount }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() totalTime!: string;
  @Prop() downtime!: string;
  @Prop() breaksCount!: number;
}
</script>

<style scoped lang="scss">
.header {
  margin: -60px -20px 0 -20px;
  border-bottom: 1px solid #17505b;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  text-align: left;
  color: #303133;

  &__item {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &__item-label {
    font-weight: bold;
  }

  &__item-value {
    color: #606266;
  }
}
</style>
