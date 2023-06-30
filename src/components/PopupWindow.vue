<template>
  <el-dialog :visible.sync="visible">
    <Header />
    <Content />
    <Footer />
  </el-dialog>
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
  visible = true; // можно управлять видимостью всплывающего окна
}
</script>
