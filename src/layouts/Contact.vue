<template>
  <section id="contact" class="pt-16 pb-32 lg:pt-36 max-h-screen">
    <div class="container">
      <!-- kenali lebih lanjut -->
      <div class="flex flex-wrap">
        <div class="w-full px-6 lg:w-1/2 mt-1">
          <h4 class="font-semibold font-monserrat text-black text-2xl mb-3">
            Kenali kami lebih jauh
          </h4>
          <p
            class="font-normal font-monserrat text-base text-black max-w-xl lg:text-sm"
          >
            Hackjog sebuah ekosistem Industri digital yang berada di D.I.Y dalam
            bentuk kolaborasi hexahelix.
          </p>
          <div class="flex items-center dark:text-white mt-3">
            <!-- {{-- X Twitter logo --}} -->
            <a
              href="https://twitter.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/x.png" width="20" alt="" />
            </a>
            <!-- {{-- Instagram logo --}} -->
            <a
              href="https://instagram.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/instagram.png" width="20" alt="" />
            </a>
            <!-- {{-- Youtube logo --}} -->
            <a
              href="https://youtube.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/youtube.png" width="20" alt="" />
            </a>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 mt-12 justify-center text-justify">
          <p
            class="font-regular font-monserrat text-base text-black px-20 max-w-xl lg:text-lg"
          >
            “ Berfokus pada menumbuh kembangkan industri digital serta
            transformasi masyarakat melalui Artificial Intelligence ”
          </p>
        </div>
      </div>
      <!-- ecosystem lebih lanjut -->
      <div class="flex flex-wrap mt-20">
        <div class="w-full px-4 mt-5">
          <h4
            class="font-semibold font-monserrat text-primary-black text-2xl mb-3"
          >
            Ecosystem Partner
          </h4>
        </div>
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide v-for="data in dataImage" :key="data.title" class="">
            <div
              class="container flex items-center justify-beetween mx-auto text-center mt-10"
            >
              <img
                :src="data.img"
                alt="Ecosystem Partner"
                class="w-14 h-14 lg:w-48 lg:h-48"
              />
            </div>
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
        nama: "Image 1",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_AsiaQuest.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 2",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_Bt.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 4",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_Ds.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 5",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_Hb.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 6",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_Jala.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 7",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_Kedata.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 8",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_ksj.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 9",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_morbis.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 10",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_Pj.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 11",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_symbolic.png",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 12",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo-harjo.png",
          import.meta.url
        ).href,
      },
    ]);
    return { modules: [Pagination, Autoplay], dataImage };
  },
};
</script>

<style scoped></style>
