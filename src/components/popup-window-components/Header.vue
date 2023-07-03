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
  cursor: default;
  border-bottom: 1px solid $color-primary;
  text-align: left;
  margin: 0 -13px 0 -13px;
  color: $color-dark-gray;
  line-height: 0;

  &__item {
    margin: 25px;
    display: flex;
    justify-content: space-between;
  }

  &__item:first-child {
    margin-top: 15px;
  }

  &__item-label {
    font-weight: bold;
  }

  &__item-value {
    color: $color-gray;
  }
}
</style>
