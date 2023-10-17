<template>
  <SideBar />
  <div class="p-4 sm:ml-64">
    <div class="flex h-screen rounded bg-gray-50 dark:bg-gray-800">
      <div class="w-full mt-3">
        <h1 class="text-3xl mt-5">Create Schedule</h1>
        <RouterLink
          :to="{ name: 'adminSchedule' }"
          type="button"
          class="mt-10 focus:outline-none text-white bg-primary hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Back
        </RouterLink>

        <h2 class="text-3xl font-semibold font-monserrat mx-auto"></h2>

        <form class="mt-5">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="nama"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nama Event</label
              >
              <input
                type="text"
                id="nama"
                v-model="nama"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nama ..."
                required
              />
            </div>
            <div>
              <label
                for="lokasi"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Lokasi</label
              >
              <input
                type="text"
                id="lokasi"
                v-model="lokasi"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Lokasi..."
                required
              />
            </div>
            <div>
              <label
                for="tanggal"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Tanggal</label
              >
              <input
                type="number"
                id="tanggal"
                v-model="tanggal"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tanggal..."
                required
              />
            </div>
            <div>
              <label
                for="bulan"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Bulan</label
              >
              <input
                type="tel"
                id="bulan"
                v-model="bulan"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bulan..."
                required
              />
            </div>
            <div>
              <label
                for="tahun"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Tahun</label
              >
              <input
                type="text"
                id="tahun"
                v-model="tahun"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tahun..."
                required
              />
            </div>
          </div>
          <div v-if="errorMessage">
            <p class="text-xl text-red-500 mt-5 mb-3">{{ errorMessage }}</p>
          </div>
          <button
            type="submit"
            v-on:click.prevent="postData()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import SideBar from "../../../components/admin/SideBar.vue";
export default {
  components: { SideBar },
  setup() {
    const router = useRouter();
    const nama = ref("");
    const lokasi = ref("");
    const tanggal = ref("");
    const bulan = ref("");
    const tahun = ref("");
    let errorMessage = ref(null);
    const postData = async () => {
      let formdata = new FormData();
      formdata.append("nama", nama.value);
      formdata.append("lokasi", lokasi.value);
      formdata.append("tanggal", tanggal.value);
      formdata.append("bulan", bulan.value);
      formdata.append("tahun", tahun.value);
      if (
        nama.value === "" ||
        lokasi.value === "" ||
        tanggal.value === "" ||
        bulan.value === "" ||
        tahun.value === ""
      ) {
        errorMessage.value = "Form wajib Diisi Semua";
      } else {
        await axios
          .post(import.meta.env.VITE_BASE_URL_API + `schedule`, formdata)
          .then((response) => {
            router.push({ path: "/admin/schedule" });
          })
          .catch((error) => {
            errorMessage.value = error.response.data.message;
          });
      }
    };
    return {
      nama,
      lokasi,
      tanggal,
      bulan,
      tahun,
      postData,
      SideBar,
      router,
      errorMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
