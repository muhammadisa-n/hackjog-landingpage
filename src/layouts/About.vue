<template>
  <section id="about" class="pt-20 pb-16 lg:pt-36 max-h-screen">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-10 lg:w-1/2">
          <div class="container">
            <div class="flex">
              <iframe
                width="500"
                height="300"
                src="https://www.youtube.com/embed/ZrGNzazBb20?si=2TzRmdkdfIG9MjZe"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 mb-12 items-center lg:ml-0 ml-5">
          <h4
            class="font-semibold font-monserrat text-primary text-lg lg:text-xl mb-3"
          >
            What is a HackJog event?
          </h4>
          <p
            class="font-normal font-monserrat text-base text-black max-w-xl lg:text-lg"
          >
            HackJog adalah Ekosistem Industri digital yang berada di D.I.Y dalam
            bentuk kolaborasi hexahelix. Berfokus pada menumbuhkembangkan
            industri digital serta transformasi masyarakat melalui Artificial
            Intelligence.
          </p>
          <div class="flex items-center dark:text-white mt-3 mb-12">
            <h4 class="font-semibold font-monserrat text-primary text-lg mr-5">
              Follow
            </h4>
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
          "@/assets/images/Ecosystem Partner/logo_asiaQuest.png",
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
        nama: "Image 3",
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
          "@/assets/images/Ecosystem Partner/logo_ksj",
          import.meta.url
        ).href,
      },
      {
        nama: "Image 9",
        img: new URL(
          "@/assets/images/Ecosystem Partner/logo_morbis",
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
          "@/assets/images/Ecosystem Partner/logo_harjo.png",
          import.meta.url
        ).href,
      },
    ]);
    return { modules: [Pagination, Autoplay], dataImage };
  },
};
</script>
<style scoped></style>
