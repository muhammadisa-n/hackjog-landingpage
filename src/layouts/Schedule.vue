<template>
  <section id="schedule" class="pt-10 pb-12 lg:pt-0 lg:pb-16">
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h2
            class="font-bold font-monserrat text-black text-3xl mb-4 sm:text-4xl lg:text-5xl uppercase"
          >
            Event
          </h2>
        </div>
      </div>
      <div class="w-11/12 flex">
        <a
          :href="'/allevents'"
          class="sm:ml-auto lg:ml-auto ml-4 mb-4 bg-primary rounded-md text-white ring-1 font-semibold px-1 py-1 hover:bg-gradasi hover:text-white hover:outline-none hover:ring-2 hover:ring-primary"
        >
          Lihat Semua
        </a>
      </div>
      <div
        class="container w-full flex flex-wrap justify-between items-center sm:w-10/12 xl:w-10/12 mx-auto gap-x-10 sm:ml-36"
      >
        <!-- card section start -->
        <div v-for="item in dataSchedule" :key="item.id" class="flex mt-5 mb-5">
          <div
            class="max-sm:w-full justify-center items-center lg:w-48 lg:h-48 w-28 h-28 bg-birumuda rounded-md my-auto py-5 lg:mb-20"
          >
            <p
              class="font-bold text-birutua font-monserrat text-[25px] lg:text-[48px] text-center lg:mt-2"
            >
              {{ item.tanggal }}
            </p>
            <p
              class="font-bold text-birutua font-monserrat text-[25px] lg:text-[48px] text-center"
            >
              {{ item.bulan.substring(0, 3) }}
            </p>
          </div>
          <div class="space-y-2 my-auto px-4 lg:mt-8">
            <p class="font-medium font-monserrat lg:text-[36px]">
              {{ item.nama }}
            </p>
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
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  setup() {
    const dataSchedule = ref([]);
    const getAllSchedule = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL_API + `schedule?limit=4`
        ); // Ganti URL sesuai dengan API yang ingin Anda akses
        dataSchedule.value = response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
      }
    };
    onMounted(() => {
      getAllSchedule();
    });
    return { dataSchedule };
  },
};
</script>

<style lang="scss" scoped></style>
