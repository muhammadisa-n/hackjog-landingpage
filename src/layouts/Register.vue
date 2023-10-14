<template>
  <!-- <section
    id="register"
    class="pt-48 pb-32 lg:pt-48 bg-cover bg-no-repeat"
    style="
      background-image: url(../../src/assets/images/Bg_Rg.png);
      background-position: center top -30px;
    "
  > -->
  <section
    id="registration"
    class="pt-48 pb-32 lg:pt-48 lg:bg-cover lg:bg-no-repeat bg-gradient-to-b from-primary to-gradasi"
  >
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h2
            class="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl"
          >
            REGISTRATION
          </h2>
        </div>
      </div>
    </div>
  </section>
  <Form />
</template>

<script>
import Form from "../layouts/Form.vue";
export default {
  name: "Register",
  components: { Form },
  setup() {
    return { Form };
  },
};
</script>
<style scoped>
@media screen and (min-width: 769px) {
  #registration {
    background-image: url(../../src/assets/images/Background/Bg_Registration.png);
    background-position: center top -30px;
    height: 570px;
  }
}
</style>
