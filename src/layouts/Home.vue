<template>
  <section id="home" class="pt-20 max-h-full">
    <div>
      <swiper
        :modules="modules"
        :loop="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="data in dataImage" :key="data.title">
          <img :src="data.img" :alt="data.title" class="w-full" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
export default {
  name: "HomeSection",
  components: { Swiper, SwiperSlide },
  setup() {
    const dataImage = ref([
      {
        title: "image 1",
        img: new URL("@/assets/images/home/home1.png", import.meta.url).href,
      },
      {
        title: "image 2",
        img: new URL("@/assets/images/home/home2.png", import.meta.url).href,
      },
      {
        title: "image 3",
        img: new URL("@/assets/images/home/home3.png", import.meta.url).href,
      },
      {
        title: "image 4",
        img: new URL("@/assets/images/home/home4.png", import.meta.url).href,
      },
    ]);
    return { modules: [Pagination, Autoplay], dataImage };
  },
};
</script>

<style scoped></style>
