<template>
  <SideBar />
  <div class="p-4 sm:ml-64">
    <div class="flex h-screen rounded bg-gray-50 dark:bg-gray-800">
      <div class="w-full mt-3">
        <h1 class="text-3xl mt-5">User Participant Page</h1>

        <h2 class="text-3xl font-semibold font-monserrat mx-auto">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-16 mb-10"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">Fullname</th>
                  <th scope="col" class="px-6 py-3">Email</th>
                  <th scope="col" class="px-6 py-3">Job Title</th>
                  <th scope="col" class="px-6 py-3">Institution Name</th>
                  <th scope="col" class="px-6 py-3">Institution Address</th>
                  <th scope="col" class="px-6 py-3">Institution Type</th>
                  <th scope="col" class="px-6 py-3">Type Invitation</th>
                  <th scope="col" class="px-6 py-3">Interest</th>
                  <th scope="col" class="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in dataUser"
                  :key="item.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ item.fullname }}
                  </th>
                  <td class="px-6 py-4">
                    {{ item.email }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.job_title }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.institution_name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.institution_address }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.institution_type }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.institution_type }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.type_invitation }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.interest }}
                  </td>

                  <td class="px-6 py-4">
                    <button
                      @click="deleteUser(item.id)"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline flex"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td
                    v-if="dataUser.length === 0"
                    colspan="9"
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
export default {
  components: { SideBar },
  setup() {
    const router = useRouter();
    const dataUser = ref([]);
    const getAllUser = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL_API + `users`
        ); // Ganti URL sesuai dengan API yang ingin Anda akses
        dataUser.value = response.data.data;
      } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
      }
    };
    onMounted(() => {
      getAllUser();
    });
    const deleteUser = async (id) => {
      await axios
        .delete(import.meta.env.VITE_BASE_URL_API + `users/${id}`)
        .then((response) => {
          getAllUser();
        });
    };
    return { SideBar, dataUser, deleteUser, router };
  },
};
</script>
<style lang="scss" scoped></style>
