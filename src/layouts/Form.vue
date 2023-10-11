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
      <form>
        <div class="mb-8">
          <input type="text" id="fullname" name="fullname" placeholder="Full Name Participant" class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black" required>
        </div>
        <div class="mb-8">
          <input type="text" id="job" name="job" placeholder="Job Title" class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black" required>
        </div>
        <div class="mb-8">
          <input type="text" id="institution" name="institution" placeholder="Institution Name" class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black" required>
        </div>
        <div class="mb-8">
          <input type="text" id="address" name="address" placeholder="Institution Address" class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black" required>
        </div>
        <div class="mb-8">
        <select id="typeins" class="block w-full p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-primary focus:border-primary" required>
          <option value="">-- Select Institution Type --</option>
          <option value="">United States</option>
          <option value="">Canada</option>
          <option value="">France</option>
          <option value="">Germany</option>
        </select>
        </div>
        <div class="mb-8">
          <input type="email" id="email" name="email" placeholder="Email" class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black" required>
        </div>
        <div class="mb-8">
        <select id="typeinv" class="block w-full p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-primary focus:border-primary" required>
          <option value="">-- Select Type of Invitation --</option>
          <option value="">United States</option>
          <option value="">Canada</option>
          <option value="">France</option>
          <option value="">Germany</option>
        </select>
        </div>
        <div class="mb-8">
        <select id="interest" class="block w-full p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-primary focus:border-primary" required>
          <option value="">-- Choose of Interest --</option>
          <option value="">United States</option>
          <option value="">Canada</option>
          <option value="">France</option>
          <option value="">Germany</option>
        </select>
        </div>
        <div class="flex items-center mb-8">
          <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary" required>
          <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900">By pressing the "Submit" button, I agree to the applicable<a href="#" class="text-primary hover:underline"> terms and conditions</a>.</label>
        </div>
        <div class="mb-8">
        <button
          class="w-full rounded-lg px-4 py-2 font-black text-white ring-1 bg-primary hover:bg-white hover:text-black hover:outline-none hover:ring-2 hover:ring-primary"
        >
          SUBMIT
        </button>
      </div>
      </form>
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
