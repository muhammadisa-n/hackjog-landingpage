<template>
  <SideBar />
  <div class="p-4 sm:ml-64">
    <div class="flex h-screen rounded bg-gray-50 dark:bg-gray-800">
      <div class="w-full mt-3">
        <h2 class="text-3xl font-semibold font-monserrat mx-auto">
          Welcome Admin
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../../components/admin/SideBar.vue";
export default {
  components: { SideBar },
  setup() {
    return { SideBar };
  },
};
</script>

<style lang="scss" scoped></style>
