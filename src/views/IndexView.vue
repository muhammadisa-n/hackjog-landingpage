<template>
  <NavigationBar />
  <HomeSection />
  <AboutSection />
  <SpeakerSection />
  <ScheduleSection />
  <VenueSection />
  <ContactSection />
  <FooterBar />
  <BackTotop link="#home" />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import HomeSection from "../layouts/Home.vue";
import AboutSection from "../layouts/About.vue";
import ContactSection from "../layouts/Contact.vue";
import SpeakerSection from "../layouts/Speaker.vue";
import ScheduleSection from "../layouts/Schedule.vue";
import VenueSection from "../layouts/Venue.vue";
import FooterBar from "../components/Footer.vue";
import BackTotop from "../components/BackTotop.vue";

export default {
  components: {
    NavigationBar,
    HomeSection,
    AboutSection,
    SpeakerSection,
    VenueSection,
    ContactSection,
    ScheduleSection,
    FooterBar,
    BackTotop,
  },
  setup() {
    return {
      NavigationBar,
      HomeSection,
      AboutSection,
      SpeakerSection,
      VenueSection,
      ContactSection,
      ScheduleSection,
      FooterBar,
      BackTotop,
    };
  },
};
</script>
<style scoped></style>
