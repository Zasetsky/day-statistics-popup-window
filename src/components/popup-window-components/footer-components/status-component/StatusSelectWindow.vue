<template>
  <div v-if="show" class="window-status-options">
    <div
      v-for="status in statuses"
      :key="status.value"
      class="option"
      :class="{
        'option--selected': status.value === selectedStatus,
      }"
      @click.stop="updateStatus(status.value)"
    >
      <div class="option__selectable-area">
        <div class="option__text">
          <span
            :style="{ backgroundColor: getColor(status.value) }"
            class="option__text__status-circle"
          ></span>
          {{ status.label }}
        </div>
        <i
          v-if="status.value === selectedStatus"
          class="el-icon-check option__icon--selected"
        ></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class StatusSelectWindow extends Vue {
  @Prop() statuses!: { value: string; label: string }[];
  @Prop() getColor!: (status: string) => string;
  @Prop({ default: false }) show!: boolean;

  selectedStatus = "";

  updateStatus(status: string) {
    this.selectedStatus = status;
  }
}
</script>

<style scoped lang="scss">
.window-status-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 89px;
  position: absolute;
  left: 113%;
  top: -32px;
  width: 218px;
  border: 1px solid #17505b;
  background-color: #f1faf5;
  border-radius: 4px;
  padding: 20px;
  z-index: 10;

  .option {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    justify-content: flex-start;
    color: #303133;

    &--selected {
      color: #17505b;
      cursor: default;

      &:hover {
        color: #17505b;
      }
    }

    &:not(&--selected) {
      cursor: pointer;

      &:hover {
        color: #6fcf97;
      }
    }

    &__selectable-area {
      display: flex;
    }

    &__text {
      display: flex;
      align-items: center;

      &__status-circle {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 10px;
      }
    }

    &__icon--selected {
      position: absolute;
      right: 40px;
      height: 4.5px;
      width: 6.75px;
      color: #17505b;
    }
  }
}
</style>