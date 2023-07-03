<template>
  <div>
    <div class="footer__comment">
      <EditComment
        v-if="isEditing"
        :status="status"
        @editDone="isEditing = false"
      />

      <button
        v-else-if="!isEditing && !status.comment && user.isAdmin"
        class="add-comment-btn"
        @click="startEditing"
      >
        +&nbsp;Комментарий
      </button>

      <p v-else-if="!isEditing && status.comment" class="comment-text">
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
import { Vue, Component, Prop } from "vue-property-decorator";
import { User, Status } from "@/types";
import EditComment from "./comment-components/EditComment.vue";

@Component({
  components: {
    EditComment,
  },
})
export default class FooterComment extends Vue {
  @Prop() date!: string;

  isEditing = false;

  get status() {
    return this.$store.getters["status/getStatusByDate"](this.date) as Status;
  }

  get user() {
    return this.$store.getters["user/getUser"] as User;
  }

  startEditing() {
    this.isEditing = true;
  }
}
</script>

<style scoped lang="scss">
.footer__comment {
  cursor: default;
  color: $color-gray;
  font: 8px;
  line-height: 8px;
  word-break: keep-all;
}

.add-comment-btn {
  width: 93px;
  height: 20px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  color: $color-primary;
  background-color: $color-light-green;
  border: 1px solid $color-primary;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;

  &:hover {
    color: $color-light-green;
    background-color: $color-primary;
  }
}

.comment-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 8px;
  background-color: $color-light-green-alt;
  padding: 11px 10px;
  margin-top: 10px;
  width: 215px;
  border-radius: 4px;

  &__none {
    color: $color-no-comment;
    font-size: 8px;
    background-color: $color-light-green-alt;
    padding: 11px 10px;
    width: 215px;
  }
}

.edit-icon {
  width: 8px;
  height: 8px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: $color-success;
  }
}
</style>
