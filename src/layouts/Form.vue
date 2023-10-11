<!-- <template>
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
</template> -->

<template>
  <section id="form" class="p-10">
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div
        class="bg-white rounded-lg shadow-lg w-full sm:w-[400px] lg:w-[600px] xl:w-[900px] p-10"
      >
        <input
          type="text"
          id="large-input"
          class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black mb-8"
          placeholder="Email / Username"
        />
        <input
          type="text"
          id="large-input"
          class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black mb-8"
          placeholder="Email / Username"
        />
        <input
          type="text"
          id="large-input"
          class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black mb-8"
          placeholder="Email / Username"
        />
        <input
          type="text"
          id="large-input"
          class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black mb-8"
          placeholder="Email / Username"
        />
        <select id="countries" class="block w-full mb-8 p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-purple-500 focus:border-purple-500">
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
        <input
          type="text"
          id="large-input"
          class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-purple-500 placeholder-black mb-8"
          placeholder="Email / Username"
        />
        <select id="countries" class="block w-full mb-8 p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-purple-500 focus:border-purple-500">
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
        <select id="countries" class="block w-full mb-8 p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-purple-500 focus:border-purple-500">
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
        <div class="flex items-center mb-8">
          <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" >
          <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900">I agree to the <a href="#" class="text-purple-600 hover:underline">terms and conditions</a>.</label>
        </div>
        <button
          class="w-full rounded-lg px-4 py-2 font-black text-white ring-1 bg-primary hover:bg-white hover:text-black hover:outline-none hover:ring-2 hover:ring-primary"
        >
          Login
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#form {
  position: relative;
  bottom: 270px;
}

</style>
<script>
export default {
  name: "Form",
  components: {},
  setup() {
    return {};
  },
};
</script>
