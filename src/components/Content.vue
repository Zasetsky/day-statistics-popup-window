<template>
  <div class="content">
    <p>Комментарии сотрудника: {{ comments }}</p>
    <div class="timeline" style="height: 200px; overflow: auto">
      <!-- Здесь будет компонент Timeline -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Content extends Vue {
  @Prop() comments!: string[];
}
</script>
