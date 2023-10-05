<template>
  <NavigationBar />
  <HomeSection />
  <AboutSection />
  <FooterBar />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import HomeSection from "../layouts/Home.vue";
import AboutSection from "../layouts/About.vue";
import FooterBar from "../components/Footer.vue";

export default {
  components: { NavigationBar, HomeSection, AboutSection, FooterBar },
  setup() {
    return { NavigationBar, HomeSection, AboutSection, FooterBar };
  },
};
</script>
<style scoped></style>
