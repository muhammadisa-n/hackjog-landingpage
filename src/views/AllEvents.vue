<template>
  <NavigationBar />
  <section id="allevents" class="pb-16 mt-32">
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h2
            class="font-bold font-monserrat text-black text-3xl mb-4 sm:text-4xl lg:text-5xl uppercase"
          >
            All Events
          </h2>
        </div>
      </div>
      <div
        class="container w-full flex flex-wrap justify-between items-center xl:w-10/12 mx-auto gap-x-10"
      >
        <!-- card section start -->
        <div v-for="item in dataSchedule" :key="item.id" class="flex mt-5 mb-5">
          <div
            class="max-sm:w-full justify-center items-center w-28 h-28 bg-birumuda rounded-md my-auto py-5"
          >
            <p
              class="font-bold text-birutua font-monserrat text-2xl text-center"
            >
              {{ item.tanggal }}
            </p>
            <p
              class="font-bold text-birutua font-monserrat text-2xl text-center"
            >
              {{ item.bulan.substring(0, 3) }}
            </p>
          </div>
          <div class="space-y-2 my-auto px-4">
            <p class="text-xl font-medium font-monserrat">{{ item.nama }}</p>
            <p class="text-base text-slate-400 font-medium font-monserrat">
              <img
                src="../assets/images/logomap.png"
                class="inline-block w-6 h-6"
                alt=""
              />{{ item.lokasi }}
            </p>
          </div>
        </div>
        <!-- cart section end -->
      </div>
    </div>
  </section>
  <FooterBar />
  <BackTotop link="#allevents" />
</template>

<script>
import { ref, onMounted } from "vue";
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/Footer.vue";
import BackTotop from "../components/BackTotop.vue";
import axios from "axios";
export default {
  components: { NavigationBar, FooterBar, BackTotop },
  setup() {
    const dataSchedule = ref([]);
    const getAllSchedule = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL_API + `schedule`
        ); // Ganti URL sesuai dengan API yang ingin Anda akses
        dataSchedule.value = response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
      }
    };
    onMounted(() => {
      getAllSchedule();
    });
    return { dataSchedule, NavigationBar, FooterBar, BackTotop };
  },
};
</script>

<style lang="scss" scoped></style>
