<template>
  <div class="header">
    <p><span class="highlighted-text">Общее время:</span> {{ totalTime }}</p>
    <p><span class="highlighted-text">Время простоя:</span> {{ downtime }}</p>
    <p>
      <span class="highlighted-text">Количество перерывов:</span>
      {{ breaksCount }}
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
  margin: -45px -20px 20px -20px;
  border-bottom: 1px solid #17505b;
  display: flex;
  color: #303133;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  line-height: 13px;
  text-align: left;
  padding: 15px;

  p {
    display: flex;
    color: #606266;
    justify-content: space-between;
    margin-top: 0;
  }
}

.highlighted-text {
  font-weight: bold;
}
</style>
