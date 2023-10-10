<template>
  <section id="about" class="absolute inset-x-0 bottom-20 p-10">
    <div class="relative text-slate-500">
      <div
        class="bg-white absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 transform rounded-lg shadow-lg shadow-slate-500"
      >
        <div class="p-10  h-[700px] w-[900px] justify-center">
          <input
            type="text"
            id="large-input"
            class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black"
            placeholder="Email / Username"
          />
          <input
            type="text"
            id="large-input"
            class="block w-full mt-10 p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black"
            placeholder="Email / Username"
          />
          <input
            type="text"
            id="large-input"
            class="block w-full mt-10 p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black"
            placeholder="Email / Username"
          />
          <input
            type="text"
            id="large-input"
            class="block w-full mt-10 p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black"
            placeholder="Email / Username"
          />
          <input
            type="text"
            id="large-input"
            class="block w-full mt-10 p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black"
            placeholder="Email / Username"
          />
     
          <button
            class="mt-10 w-50 rounded-lg px-4 py-2 font-black text-white ring-1 bg-primary hover:bg-white hover:text-black hover:outline-none hover:ring-2 hover:ring-primary"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Form",
  components: {},
  setup() {
    return {};
  },
};
</script>
<style scoped></style>
