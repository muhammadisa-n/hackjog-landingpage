<template>
  <SideBar />
  <div class="p-4 sm:ml-64">
    <div class="flex h-screen rounded bg-gray-50 dark:bg-gray-800">
      <div class="w-full mt-3">
        <h1 class="text-3xl mt-5">Venue Page</h1>
        <RouterLink
          :to="{ name: 'adminvenuecreate' }"
          type="button"
          class="mt-10 focus:outline-none text-white bg-primary hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          + Add Venue
        </RouterLink>

        <h2 class="text-3xl font-semibold font-monserrat mx-auto">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-3 mb-10"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Image</th>
                  <th scope="col" class="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in dataVenue"
                  :key="item.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ item.nama }}
                  </td>
                  <td class="px-6 py-4">
                    <img :src="item.url" alt="" class="w-20 h-10" />
                  </td>
                  <td class="px-6 py-4">
                    <button
                      @click="deleteVenue(item.id)"
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td
                    v-if="dataVenue.length === 0"
                    colspan="3"
                    class="px-6 py-4 text-center"
                  >
                    Data Kosong
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import SideBar from "../../../components/admin/SideBar.vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
export default {
  components: { SideBar },
  setup() {
    const router = useRouter();
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
    const deleteVenue = async (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios
            .delete(import.meta.env.VITE_BASE_URL_API + `venues/${id}`)
            .then((response) => {
              Swal.fire("Deleted!", "Your data has been deleted.", "success");
              getAllVenue();
            });
        }
      });
    };
    return { SideBar, dataVenue, deleteVenue, router };
  },
};
</script>

<style lang="scss" scoped></style>
