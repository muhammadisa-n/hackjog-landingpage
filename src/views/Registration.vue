<template>
  <NavigationBar />
  <Register />
  <FooterBar />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import Register from "../layouts/Register.vue";
import FooterBar from "../components/Footer.vue";
export default {
  components: { NavigationBar, Register, FooterBar },
  setup() {
    return { NavigationBar, Register, FooterBar };
  },
};
</script>
<style scoped></style>
