<template>
  <section
    id="speaker"
    class="pt-12 pb-12 sm:pb-16 lg:pt-36 lg:pb-16 mt-32 bg-gradient-to-b from-primary to-gradasi"
  >
    <div>
      <img
        src="../assets/images/Background/Bgonlyup.png"
        alt="layerbg"
        class="w-full mt-[-25%] hiddenbg"
      />
    </div>
    <div class="container lg:mb-44">
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
          v-if="dataSpeakers.length > 3"
          :slides-per-view="3"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="item in dataSpeakers"
            :key="item.id"
            class="mb-12 p-4 md:w-1/3"
          >
            <img :src="item.url" alt="Speaker" class="w-full h-full" />
            <h3
              class="font-semibold font-monserrat text-xs lg:text-2xl text-black lg:mt-5 lg:mb-3 text-center block"
            >
              {{ item.nama }}
            </h3>
            <p
              class="font-semibold font-monserrat text-xs lg:text-xl text-white text-center"
            >
              {{ item.nama_perusahaan }}
            </p>
          </swiper-slide>
        </swiper>
        <swiper
          v-if="dataSpeakers.length === 3"
          :modules="modules"
          :slides-per-view="3"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="item in dataSpeakers"
            :key="item.id"
            class="mb-12 p-4 md:w-1/3"
          >
            <img :src="item.url" alt="Speaker" class="w-full h-full" />
            <h3
              class="font-semibold font-monserrat text-xs lg:text-2xl text-black lg:mt-5 lg:mb-3 text-center block"
            >
              {{ item.nama }}
            </h3>
            <p
              class="font-semibold font-monserrat text-xs lg:text-xl text-white text-center"
            >
              {{ item.nama_perusahaan }}
            </p>
          </swiper-slide>
        </swiper>
        <swiper
          v-if="dataSpeakers.length === 2"
          :modules="modules"
          :slides-per-view="2"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="item in dataSpeakers"
            :key="item.id"
            class="mb-12 p-4 md:w-1/3"
          >
            <img :src="item.url" alt="Speaker" class="w-full h-full" />
            <h3
              class="font-semibold font-monserrat text-xs lg:text-2xl text-black lg:mt-5 lg:mb-3 text-center block"
            >
              {{ item.nama }}
            </h3>
            <p
              class="font-semibold font-monserrat text-xs lg:text-xl text-white text-center"
            >
              {{ item.nama_perusahaan }}
            </p>
          </swiper-slide>
        </swiper>
        <swiper
          v-if="dataSpeakers.length === 1"
          :modules="modules"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="item in dataSpeakers"
            :key="item.id"
            class="mb-12 p-4 md:w-1/3"
          >
            <img :src="item.url" alt="Speaker" class="w-full h-full" />
            <h3
              class="font-semibold font-monserrat text-xs lg:text-2xl text-black lg:mt-5 lg:mb-3 text-center block"
            >
              {{ item.nama }}
            </h3>
            <p
              class="font-semibold font-monserrat text-xs lg:text-xl text-white text-center"
            >
              {{ item.nama_perusahaan }}
            </p>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <div>
    <img
      src="../assets/images/Background/Bgonlydw.png"
      alt="layerbg"
      class="w-full mt-[-25%] hiddenbg"
    />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const dataSpeakers = ref([]);
    const getAllSpeaker = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL_API + `speakers`
        ); // Ganti URL sesuai dengan API yang ingin Anda akses
        dataSpeakers.value = response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
      }
    };
    onMounted(() => {
      getAllSpeaker();
    });
    return { modules: [Pagination, Autoplay], dataSpeakers };
  },
};
</script>

<style scoped>
/* @media screen and (min-width: 869px) {
  #speaker {
    background-image: url(../../src/assets/images/Background/Bg_Speaker.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
} */
@media screen and (max-width: 869px) {
  .hiddenbg {
    display: none;
  }
}
</style>
