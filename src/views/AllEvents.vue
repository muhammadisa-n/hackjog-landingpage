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
        <div v-for="data in datas" :key="data.index" class="flex mt-5 mb-5">
          <div
            class="max-sm:w-full justify-center items-center w-28 h-28 bg-birumuda rounded-md my-auto py-5"
          >
            <p
              class="font-bold text-birutua font-monserrat text-2xl text-center"
            >
              {{ data.tanggal }}
            </p>
            <p
              class="font-bold text-birutua font-monserrat text-2xl text-center"
            >
              {{ data.bulan.substring(0, 3) }}
            </p>
          </div>
          <div class="space-y-2 my-auto px-4">
            <p class="text-xl font-medium font-monserrat">{{ data.nama }}</p>
            <p class="text-base text-slate-400 font-medium font-monserrat">
              <img
                src="../assets/images/logomap.png"
                class="inline-block w-6 h-6"
                alt=""
              />{{ data.lokasi }}
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
import { ref } from "vue";
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/Footer.vue";
import BackTotop from "../components/BackTotop.vue";
export default {
  components: { NavigationBar, FooterBar, BackTotop },
  setup() {
    const datas = ref([
      {
        nama: "Hackjog",
        tanggal: "11",
        bulan: "September",
        lokasi: "Cinema Universitas AMIKOM",
      },
      {
        nama: "Hackjog",
        tanggal: "12",
        bulan: "September",
        lokasi: "Cinema Universitas AMIKOM",
      },
      {
        nama: "Hackjog",
        tanggal: "13",
        bulan: "September",
        lokasi: "Cinema Universitas AMIKOM",
      },
      {
        nama: "Hackjog",
        tanggal: "14 ",
        bulan: "October",
        lokasi: "Cinema Universitas AMIKOM",
      },
      {
        nama: "Hackjog",
        tanggal: "15",
        bulan: "October",
        lokasi: "Cinema Universitas AMIKOM",
      },
      {
        nama: "Hackjog",
        tanggal: "16",
        bulan: "October",
        lokasi: "Cinema Universitas AMIKOM",
      },
      {
        nama: "Hackjog",
        tanggal: "17",
        bulan: "October",
        lokasi: "Cinema Universitas AMIKOM",
      },
      {
        nama: "Hackjog",
        tanggal: "18",
        bulan: "October",
        lokasi: "Cinema Universitas AMIKOM",
      },
    ]);
    return { datas, NavigationBar, FooterBar, BackTotop };
  },
};
</script>

<style lang="scss" scoped></style>
