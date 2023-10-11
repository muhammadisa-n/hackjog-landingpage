<template>
  <NavigationBar />
  <Register />
  <Form />
  <FooterBar />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import Register from "../layouts/Register.vue";
import Form from "../layouts/Form.vue";
import FooterBar from "../components/Footer.vue";
export default {
  components: { NavigationBar, Register, Form, FooterBar, },
  setup() {
    return { NavigationBar, Register, Form, FooterBar, };
  },
};
</script>
<style scoped></style>
