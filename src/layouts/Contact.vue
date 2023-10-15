<template>
  <section id="contact" class="pt-16 pb-12 lg:pb-32 lg:pt-0 max-h-screen">
    <div class="container">
      <!-- kenali lebih lanjut -->
      <div class="flex flex-wrap">
        <div
          class="w-full px-6 lg:w-1/2 md:w-full lg:mt-1 flex flex-col items-center lg:items-start"
        >
          <h4
            class="font-semibold font-monserrat text-center lg:text-start text-black text-2xl mb-3"
          >
            Kenali kami lebih jauh
          </h4>
          <p
            class="font-normal font-monserrat text-center lg:text-start text-base text-black max-w-xl lg:text-sm"
          >
            Hackjog sebuah ekosistem Industri digital yang berada di D.I.Y dalam
            bentuk kolaborasi hexahelix.
          </p>
          <div
            class="flex items-center justify-center lg:justify-start dark:text-white mt-3"
          >
            <a
              href="https://twitter.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/x.png" width="20" alt="" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/instagram.png" width="20" alt="" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/youtube.png" width="20" alt="" />
            </a>
          </div>
        </div>
        <div>
          <img src="../assets/images/linecontact.png" alt="line" class="mr-10 hiddenbg">
        </div>
        <div
          class=" mt-12 flex justify-center lg:justify-start text-center lg:text-start"
        >
          <p
            class="font-regular font-monserrat text-center lg:text-start text-base text-black px-4 max-w-xl sm:ml-20 lg:ml-0 lg:text-lg"
          >
            “Berfokus pada menumbuh kembangkan industri digital serta
            transformasi masyarakat melalui Artificial Intelligence”
          </p>
        </div>
      </div>

      <!-- ecosystem lebih lanjut -->
      <div class="flex flex-wrap mt-20">
        <div class="w-full px-4 md:w-full lg:w-1/3 mt-5">
          <h4
            class="font-semibold font-monserrat text-primary-black text-2xl mb-3"
          >
            Ecosystem Partner
          </h4>
        </div>
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
        >
          <swiper-slide v-for="data in dataImage" :key="data.title" class="">
            <div
              class="container flex items-center justify-center mx-auto text-center mt-10 sm:mt-10 lg:mt-10"
            >
              <img
                :src="data.img"
                alt="Ecosystem Partner"
                class="w-20 h-20 lg:w-48 lg:h-48 object-contain"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div>
        <img
          src="../assets/images/Background/Bgonlydw.png"
          alt="layerbg"
          class="w-full mt-[-17%] hiddenbg"
        />
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

<style scoped>
@media screen and (max-width: 869px) {
  .hiddenbg {
    display: none;
  }
}
</style>
