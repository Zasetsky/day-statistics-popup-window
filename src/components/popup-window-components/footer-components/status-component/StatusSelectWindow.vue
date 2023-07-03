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
import { Status } from "@/types";

@Component
export default class StatusSelectWindow extends Vue {
  @Prop() public status!: Status;
  @Prop() statuses!: { value: string; label: string }[];
  @Prop() getColor!: (status: string) => string;
  @Prop({ default: false }) show!: boolean;

  get selectedStatus() {
    return this.status.dayStatus;
  }

  set selectedStatus(selectedStatus) {
    this.$store.dispatch("status/updateDayStatus", {
      date: this.status.date,
      dayStatus: selectedStatus,
    });
  }

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
  top: -22px;
  width: 218px;
  border: 1px solid $color-primary;
  background-color: $color-background;
  border-radius: 4px;
  padding: 20px;
  z-index: 10;

  .option {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    justify-content: flex-start;
    color: $color-dark-gray;

    &--selected {
      color: $color-primary;
      cursor: default;

      &:hover {
        color: $color-primary;
      }
    }

    &:not(&--selected) {
      cursor: pointer;

      &:hover {
        color: $color-success;
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
      right: 20px;
      height: 24px;
      width: 24px;
      color: $color-primary;
    }
  }
}
</style>
