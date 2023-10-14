<template>
  <SideBar />
  <div class="p-4 sm:ml-64">
    <div class="flex h-screen rounded bg-gray-50 dark:bg-gray-800">
      <div class="w-full mt-3">
        <h1 class="text-3xl mt-5">Ecosystem Partner Page</h1>
        <button
          type="button"
          class="mt-10 focus:outline-none text-white bg-primary hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          + Add Ecosystem Partner
        </button>

        <h2 class="text-3xl font-semibold font-monserrat mx-auto">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-16"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Image</th>
                  <th scope="col" class="px-6 py-3">Image url</th>
                  <th scope="col" class="px-6 py-3">Action</th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Delete</a
                    >
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
import SideBar from "../../../components/admin/SideBar.vue";
export default {
  components: { SideBar },
  setup() {
    return { SideBar };
  },
};
</script>

<style lang="scss" scoped></style>
