<template>
  <el-input
    type="textarea"
    :rows="1"
    placeholder="Enter text"
    v-model="editComment"
    maxlength="60"
    show-word-limit
    class="hidden-input"
    ref="editInput"
    @blur="onBlur"
    @keydown.native="onKeydown"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Status } from "@/types";

@Component
export default class EditComment extends Vue {
  @Prop() public status!: Status;

  get editComment() {
    return this.status.comment;
  }

  set editComment(newComment) {
    this.$store.dispatch("status/updateStatusComment", {
      date: this.status.date,
      comment: newComment,
    });
  }

  onBlur() {
    this.$emit("editDone");
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.$emit("editDone");
    }
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
  margin-bottom: 8px;

  .el-input__inner,
  .el-textarea__inner {
    border: 1px solid $color-light-green-alt;
    background-color: $color-light-green;
    color: $color-gray;
    font-size: 8px;
    margin-top: 10px;
    width: 235px;
    height: 40px;
    padding: 13px 10px;
    resize: none;
    box-shadow: none;
    overflow: hidden;

    &:focus {
      border-color: $color-light-green-alt;
      border-radius: 4px;
      outline: none;
      box-shadow: none;
    }
  }

  .el-input__count,
  .el-textarea__count {
    position: absolute;
    color: $color-primary !important;
    margin-right: 10px;
  }
}
</style>
