<template>
  <div>
    <div class="footer__comment">
      <EditComment
        v-if="isEditing"
        :status="status"
        :editComment="editComment"
        @update-comment="updateComment"
      />

      <button
        v-else-if="!isEditing && !status.comment && user.isAdmin"
        class="add-comment-btn"
        @click="createComment"
      >
        +&nbsp;Комментарий
      </button>

      <p
        v-else-if="!isEditing && status.comment"
        class="comment-text"
        @click="startEditing"
      >
        {{ status.comment }}
        <i
          v-if="user.isAdmin && status.comment"
          @click="startEditing"
          class="el-icon-edit edit-icon"
        />
      </p>

      <p class="comment-text__none" v-if="!user.isAdmin && !status.comment">
        Комментариев нет
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { User, Status } from "@/types";
import EditComment from "./comment-components/EditComment.vue";

@Component({
  components: {
    EditComment,
  },
})
export default class FooterComment extends Vue {
  isEditing = false;
  editComment = "";

  get status() {
    return this.$store.getters.getStatus as Status;
  }

  get user() {
    return this.$store.getters.getUser as User;
  }

  updateComment(newComment: string) {
    this.isEditing = false;
    this.editComment = newComment;
  }

  startEditing() {
    this.isEditing = true;
    this.editComment = this.status.comment;
  }

  createComment() {
    this.isEditing = true;
    this.editComment = "";
  }
}
</script>

<style lang="scss">
.footer__comment {
  color: #606266;
  margin-top: 15px;
  margin-bottom: 20px;
  font: 8px Roboto;
  line-height: 8px;
  word-break: keep-all;
}

.add-comment-btn {
  width: 93px;
  height: 20px;
  border-radius: 4px;
  font-size: 10px;
  color: #17505b;
  background-color: #f1faf5;
  border: 1px solid #17505b;
  cursor: pointer;
  text-align: center;
  margin-bottom: 20px;

  &:hover {
    color: #f1faf5;
    background-color: #17505b;
  }
}

.comment-text {
  display: flex;
  align-items: center;
  background-color: #e2f5ea;
  padding: 11px 10px;
  width: 190px;
  border-radius: 4px;

  &__none {
    text-align: center;
    background-color: #e2f5ea;
    padding: 11px 10px;
    width: 190px;
    border-radius: 4px;
  }
}

.edit-icon {
  width: 8px;
  height: 8px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: #6fcf97;
  }
}
</style>
