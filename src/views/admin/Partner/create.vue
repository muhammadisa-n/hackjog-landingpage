<template>
  <SideBar />
  <div class="p-4 sm:ml-64">
    <div class="flex h-screen rounded bg-gray-50 dark:bg-gray-800">
      <div class="w-full mt-3">
        <h1 class="text-3xl mt-5">Create Partner</h1>
        <RouterLink
          :to="{ name: 'adminPartner' }"
          type="button"
          class="mt-10 focus:outline-none text-white bg-primary hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Back
        </RouterLink>

        <h2 class="text-3xl font-semibold font-monserrat mx-auto"></h2>

        <form class="mt-5">
          <div class="mb-6">
            <label
              for="nama"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Nama</label
            >
            <input
              type="text"
              id="nama"
              v-model="nama"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nama"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="file"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Image</label
            >
            <input
              type="file"
              id="file"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              @change="handleFileChange($event)"
            />
            <div v-if="errorMessage">
              <p class="text-xl text-red-500 mt-5">{{ errorMessage }}</p>
            </div>
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
    const file = ref("");
    const nama = ref("");
    let errorMessage = ref(null);
    const handleFileChange = (e) => {
      //assign file to state
      file.value = e.target.files[0];
    };
    const postData = async () => {
      let formdata = new FormData();
      formdata.append("nama", nama.value);
      formdata.append("file", file.value);

      await axios
        .post(import.meta.env.VITE_BASE_URL_API + `partners`, formdata)
        .then((response) => {
          router.push({ path: "/admin/ecopartner" });
        })
        .catch((error) => {
          errorMessage.value = error.response.data.message;
        });
    };
    return {
      file,
      nama,
      postData,
      handleFileChange,
      SideBar,
      router,
      errorMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
