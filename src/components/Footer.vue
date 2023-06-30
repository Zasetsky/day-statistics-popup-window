<template>
  <div class="footer">
    <p>Статус дня: {{ dayStatus }}</p>
    <p>Комментарий: {{ comment }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() dayStatus!: string;
  @Prop() comment!: string;
}
</script>
