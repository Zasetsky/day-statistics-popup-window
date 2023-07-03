<template>
  <div class="content">
    <div
      class="timeline"
      v-for="(workPointArray, arrayIndex) in workPoints"
      :key="arrayIndex"
    >
      <div class="timeline-block">
        <div
          class="timeline-item"
          v-for="(workPoint, index) in workPointArray"
          :key="index"
        >
          <div class="timeline-dot"></div>
          <div
            class="timeline-line"
            v-if="index !== workPointArray.length - 1"
          ></div>
          <div class="timeline-content">
            <span class="timeline-content__time">{{ workPoint.time }}</span>
            <span class="timeline-content__name">{{ workPoint.name }}</span>
            <p class="comment">{{ workPoint.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { User, WorkPoints } from "@/types";

@Component
export default class Content extends Vue {
  @Prop() date!: string;
  @Prop() workPoints!: WorkPoints[][];
  @Prop() user!: User;
}
</script>

<style scoped lang="scss">
.timeline {
  position: relative;
  margin-left: 15px;
}

.timeline-block {
  margin-top: 15px;
  margin-bottom: 25px;
}

.timeline-item {
  position: relative;
  margin-top: 15px;
}

.timeline-dot {
  position: absolute;
  left: -15px;
  top: 2px;
  width: 12px;
  height: 12px;
  background: #17505b;
  border-radius: 50%;
  z-index: 1;
}

.timeline-line {
  position: absolute;
  left: -10px;
  top: 10px;
  bottom: -20px;
  width: 2px;
  background: #17505b;
}

.timeline-content {
  margin-left: 10px;

  &__time {
    font-size: 12px;
    color: #303133;
  }

  &__name {
    margin-left: 20px;
    font-size: 12px;
    color: #606266;
  }

  .comment {
    margin-top: 2px;
    font-size: 10px;
    color: #606266;
  }
}
</style>
