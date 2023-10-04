<template>
  <NavigationBar />
  <Register />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import Register from "../layouts/Register.vue";
export default {
  components: { NavigationBar, Register },
  setup() {
    return { NavigationBar, Register };
  },
};
</script>
<style scoped></style>
