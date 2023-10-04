<template>
  <section id="home" class="pt-20 max-h-full">
    <div>
      <swiper
        :modules="modules"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="text in dataImage" :key="text.title">
          <img :src="text.img" alt="" class="w-full" />
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
        img: "home1.png",
      },
      {
        title: "image 2",
        img: "home2.png",
      },
      {
        title: "image 3",
        img: "home3.png",
      },
      {
        title: "image 4",
        img: "home4.png",
      },
    ]);
    return { modules: [Pagination, Autoplay], dataImage };
  },
};
</script>

<style scoped></style>
