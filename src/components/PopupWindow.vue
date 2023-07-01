<template>
  <div class="popup-window">
    <el-dialog
      :visible.sync="visible"
      :width="'250px'"
      class="popup-window__dialog"
      :show-close="false"
    >
      <Header
        class="popup-window__header"
        :breaksCount="4"
        totalTime="8 ч. 10 мин."
        downtime="0 мин."
      />
      <Content class="popup-window__content" />
      <Footer class="popup-window__footer" />
      <div class="popup-window__arrow"></div>
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

<style lang="scss">
.popup-window {
  &__dialog .el-dialog {
    background-color: #f1faf5;
    border-radius: 4px;
  }

  &__header {
    height: 99px;
  }

  &__content {
    height: 152px;
  }

  &__footer {
    min-height: 64px;
    max-height: 180px;
  }

  &__arrow {
    position: absolute;
    bottom: -10px;
    left: calc(50% - 10px);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #f1faf5;
  }
}
</style>
