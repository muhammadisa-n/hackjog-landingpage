<template>
  <NavigationBar />
  <HomeSection />
  <AboutSection />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import HomeSection from "../components/layouts/Home.vue";
import AboutSection from "../components/layouts/About.vue";
export default {
  components: { NavigationBar, HomeSection, AboutSection },
  setup() {
    return { NavigationBar, HomeSection, AboutSection };
  },
};
</script>
<style scoped></style>
