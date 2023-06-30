<template>
  <div class="popup-window">
    <el-dialog
      :visible.sync="visible"
      :width="'250px'"
      :show-close="false"
      class="dialog"
    >
      <Header :breaksCount="4" totalTime="8 ч. 10 мин" downtime="0 мин" />
      <Content />
      <Footer />
      <div class="arrow"></div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "./Header.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";

@Component({
  components: {
    Header,
    Content,
    Footer,
  },
})
export default class PopupWindow extends Vue {
  visible = true;
}
</script>

<style scoped>
.popup-window {
  position: relative;
}
.arrow {
  position: absolute;
  bottom: -10px;
  left: calc(50% - 10px);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ffffff;
}
</style>
