<template>
  <div class="header">
    <p>Общее время: {{ totalTime }}</p>
    <p>Время простоя: {{ downtime }}</p>
    <p>Количество перерывов: {{ breaksCount }}</p>
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
