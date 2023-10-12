<template>
  <section
    id="speaker"
    class="pt-36 pb-16 lg:mt-32 -mt-20 bg-gradient-to-b from-primary to-gradasi"
  >
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h2
            class="font-bold font-monserrat text-white text-3xl mb-4 sm:text-4xl lg:text-5xl uppercase"
          >
            Speaker
          </h2>
          <h4
            class="font-medium font-monserrat text-md text-white md:text-base"
          >
            Pembicara dan narasumber ahli dalam bidangnya untuk memberikan
            informasi mengenai perkembangan teknologi
          </h4>
        </div>
      </div>
      <div
        class="w-full px-4 flex flex-wrap justify-center items-center xl:w-10/12 xl:mx-auto"
      >
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="data in dataImage"
            :key="data.title"
            class="mb-12 p-4 md:w-1/3"
          >
            <img :src="data.img" alt="Speaker" class="w-full h-full" />
            <h3
              class="font-semibold font-monserrat text-xs lg:text-2xl text-black lg:mt-5 lg:mb-3 text-center block"
            >
              {{ data.nama }}
            </h3>
            <p
              class="font-semibold font-monserrat text-xs lg:text-xl text-white text-center"
            >
              {{ data.nama_perusahaan }}
            </p>
          </swiper-slide>
        </swiper>
      </div>
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
  components: { Swiper, SwiperSlide },
  setup() {
    const dataImage = ref([
      {
        nama: "Anggoro",
        nama_perusahaan: "Kedata Online",
        img: new URL("@/assets/images/Speaker/Anggoro.png", import.meta.url)
          .href,
      },
      {
        nama: "Arya Wiryawan",
        nama_perusahaan: "Jala",
        img: new URL(
          "@/assets/images/Speaker/Arya Wiryawan.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Azmiansyah",
        nama_perusahaan: "Morbis.id",
        img: new URL("@/assets/images/Speaker/Azmiansyah.png", import.meta.url)
          .href,
      },
      {
        nama: "Galuh Koco Sadewo",
        nama_perusahaan: "Botika",
        img: new URL(
          "@/assets/images/Speaker/Galuh Koco Sadewo.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Sabrang Noe Letto",
        nama_perusahaan: "Symbolic.id",
        img: new URL(
          "@/assets/images/Speaker/Sabrang Noe Letto.png",
          import.meta.url
        ).href,
      },
    ]);
    return { modules: [Pagination, Autoplay], dataImage };
  },
};
</script>

<style scoped>
/* #speaker {
  background-image: url(../../src/assets/images/Background/Bg_Speaker.png);
} */
</style>
