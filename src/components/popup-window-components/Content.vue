<template>
  <div class="content">
    <div
      class="content__timeline"
      v-for="(workPointArray, arrayIndex) in workPoints"
      :key="arrayIndex"
    >
      <div class="content__timeline-block">
        <div
          class="content__timeline-item"
          v-for="(workPoint, index) in workPointArray"
          :key="index"
        >
          <div class="content__timeline-dot"></div>
          <div
            class="content__timeline-line"
            v-if="index !== workPointArray.length - 1"
          ></div>

          <div class="content__timeline-content">
            <span class="content__timeline-time">{{ workPoint.time }}</span>
            <span class="content__timeline-name">{{ workPoint.name }}</span>
            <p class="content__timeline-comment">{{ workPoint.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { User, WorkPoint } from "@/types";

@Component
export default class Content extends Vue {
  @Prop() date!: string;
  @Prop() workPoints!: WorkPoint[][];
  @Prop() user!: User;
}
</script>

<style scoped lang="scss">
.content {
  cursor: default;

  &__timeline {
    position: relative;
    margin-left: 20px;
  }

  &__timeline-block {
    margin-bottom: 35px;
    margin-top: 10px;
  }

  &__timeline-item {
    position: relative;
    margin-bottom: -5px;
  }

  &__timeline-dot {
    position: absolute;
    left: -15px;
    top: 2px;
    width: 12px;
    height: 12px;
    background: $color-primary;
    border-radius: 50%;
    z-index: 1;
  }

  &__timeline-line {
    position: absolute;
    left: -10px;
    top: 10px;
    bottom: -10px;
    width: 2px;
    background: $color-primary;
  }

  &__timeline-content {
    margin-left: 10px;
  }

  &__timeline-time {
    font-size: 12px;
    font-weight: bold;
    color: $color-dark-gray;
  }

  &__timeline-name {
    margin-left: 20px;
    font-size: 12px;
    font-weight: bold;
    color: $color-gray;
  }

  &__timeline-comment {
    margin-top: 2px;
    font-size: 10px;
    color: $color-gray;
  }
}
</style>
