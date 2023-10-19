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
        <swiper-slide v-for="item in dataBanner" :key="item.id">
          <img :src="item.url" :alt="item.nama" class="w-full" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ref, onMounted } from "vue";
export default {
  name: "HomeSection",
  components: { Swiper, SwiperSlide },
  setup() {
    const dataBanner = ref([]);
    const getAllBanner = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL_API + `banners`
        ); // Ganti URL sesuai dengan API yang ingin Anda akses
        dataBanner.value = response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
      }
    };

    onMounted(() => {
      getAllBanner();
    });
    return { modules: [Pagination, Autoplay], dataBanner };
  },
};
</script>

<style scoped></style>
