<template>
  <div class="content" v-if="dayStatus !== 'danger'">
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
  @Prop() dayStatus!: string;
}
</script>
