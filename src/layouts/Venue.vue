<template>
  <section
    id="venue"
    class="pt-10 pb-12 lg:pt-36 lg:pb-16 mt-32 bg-gradient-to-b from-primary to-gradasi"
  >
    <div class="container">
      <div class="mb-8"></div>
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h2
            class="font-bold font-monserrat text-white text-3xl mb-4 sm:text-4xl lg:text-5xl uppercase"
          >
            Venue
          </h2>
          <h4
            class="font-medium font-monserrat text-md text-white md:text-base"
          >
            Hackjog sebuah ekosistem Industri digital yang berada di D.I.Y dalam
            bentuk kolaborasi hexahelix. Berfokus pada menumbuh kembangkan
            industri digital serta transformasi masyarakat melalui Artificial
            Intelligence.
          </h4>
        </div>
      </div>
      <div
        class="grid grid-cols-2 grid-rows-2 gap-4 w-full px-4 mb-8 sm:mb-12 lg:mb-72 xl:w-10/12 xl:mx-auto"
      >
        <div v-for="item in dataVenue" :key="item.id">
          <img :src="item.url" :alt="item.nama" class="hover:shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
  <div>
    <img
      src="../assets/images/Background/Bgonlyup.png"
      alt="layerbg"
      class="w-full mt-[-20%] hiddenbg"
    />
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  name: "Venue",
  components: {},
  setup() {
    const dataVenue = ref([]);
    const getAllVenue = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL_API + `venues`
        ); // Ganti URL sesuai dengan API yang ingin Anda akses
        dataVenue.value = response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
      }
    };
    onMounted(() => {
      getAllVenue();
    });
    return { dataVenue };
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
