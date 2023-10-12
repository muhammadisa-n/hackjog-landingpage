<template>
  <NavigationBar />
  <Register />
  <FooterBar />
  <BackTotop link="#registration" />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import Register from "../layouts/Register.vue";
import FooterBar from "../components/Footer.vue";
import BackTotop from "../components/BackTotop.vue";
export default {
  components: { NavigationBar, Register, FooterBar, BackTotop },
  setup() {
    return { NavigationBar, Register, FooterBar, BackTotop };
  },
};
</script>
<style scoped></style>
