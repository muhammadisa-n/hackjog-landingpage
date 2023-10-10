<template>
  <NavigationBar />
  <Register />
  <Form />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import Register from "../layouts/Register.vue";
import Form from "../layouts/Form.vue";
export default {
  components: { NavigationBar, Register, Form },
  setup() {
    return { NavigationBar, Register, Form };
  },
};
</script>
<style scoped></style>
