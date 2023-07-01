<template>
  <el-input
    type="textarea"
    :rows="1"
    placeholder="Enter text"
    v-model="editComment"
    maxlength="60"
    show-word-limit
    @blur="updateComment"
    class="hidden-input"
    ref="editInput"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class EditComment extends Vue {
  @Prop({ default: "" }) public editComment!: string;

  updateComment() {
    this.$emit("update-comment", this.editComment);
  }

  mounted() {
    this.$nextTick(() => {
      (this.$refs.editInput as HTMLTextAreaElement).focus();
    });
  }
}
</script>

<style lang="scss">
.hidden-input {
  flex-grow: 1;
  background-color: transparent;

  .el-input__inner,
  .el-textarea__inner {
    border: none;
    border-radius: 4px;
    background-color: #f1faf5;
    color: #606266;
    font: 8px Roboto;
    line-height: 8px;
    margin-right: 10px;
    width: 210px;
    height: 40px;
    padding: 12px 10px;
    resize: none;
    box-shadow: none;
    overflow: hidden;
  }

  .el-input__count,
  .el-textarea__count {
    position: absolute;
    color: #17505b !important;
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
</style>
