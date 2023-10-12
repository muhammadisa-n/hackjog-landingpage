<template>
  <NavigationBar />
  <HomeSection />
  <AboutSection />
  <SpeakerSection />
  <VenueSection />
  <ContactSection />
  <FooterBar />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import HomeSection from "../layouts/Home.vue";
import AboutSection from "../layouts/About.vue";
import ContactSection from "../layouts/Contact.vue";
import SpeakerSection from "../layouts/Speaker.vue";
import VenueSection from "../layouts/Venue.vue";
import FooterBar from "../components/Footer.vue";

export default {
  components: {
    NavigationBar,
    HomeSection,
    AboutSection,
    SpeakerSection,
    VenueSection,
    ContactSection,
    FooterBar,
  },
  setup() {
    return {
      NavigationBar,
      HomeSection,
      AboutSection,
      SpeakerSection,
      VenueSection,
      ContactSection,
      FooterBar,
    };
  },
};
</script>
<style scoped></style>
