<template>
  <div class="footer">
    <footer-status />
    <footer-comment />
    <!-- <div class="footer__extra-info">
      <p class="footer__extra-info__item">
        Уровень нормы
        <span>{{ user.normLevel.val }}/{{ user.normLevel.max }}</span>
      </p>
      <p class="footer__extra-info__item">
        Количество звонков в день
        <span>{{ user.callsCount.val }}/{{ user.callsCount.max }} </span>
      </p>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { User } from "@/types";
import FooterStatus from "./footer-components/FooterStatus.vue";
import FooterComment from "./footer-components/FooterComment.vue";

@Component({
  components: {
    FooterStatus,
    FooterComment,
  },
})
export default class Footer extends Vue {
  get user() {
    return this.$store.getters.getUser as User;
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto", sans-serif;
  border-top: 1px solid #17505b;
  margin: 0 -20px -50px -20px;
  padding: 20px;

  // &__extra-info {
  //   display: flex;
  //   flex-direction: column;
  //   width: 100%;

  //   &__item {
  //     display: flex;
  //     justify-content: space-between;
  //     font-size: 10px;
  //     color: #606266;

  //     span {
  //       color: #303133;
  //     }
  //   }

  //   &__item:first-child {
  //     margin-top: 10px;
  //   }

  //   &__item:last-child {
  //     margin-bottom: 30px;
  //   }
  // }
}
</style>
