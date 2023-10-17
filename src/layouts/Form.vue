<template>
  <section id="form" class="p-10 mt-16 sm:mt-12 lg:mt-0">
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
          <option value="school">School</option>
          <option value="university">University</option>
          <option value="government">Government</option>
          <option value="other">Other</option>
        </select>
        </div>
        <div class="mb-8">
          <input type="email" id="email" name="email" placeholder="Email" class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black" required>
        </div>
        <div class="mb-8">
        <select id="typeinv" class="block w-full p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-primary focus:border-primary" required>
          <option value="">-- Select Type of Invitation --</option>
          <option value="actinvit">Activity Invitations</option>
          <option value="noactinvit">No Activity Invitations</option>
          <option value="other">Other</option>
        </select>
        </div>
        <div class="mb-8">
        <select id="interest" class="block w-full p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-primary focus:border-primary" required>
          <option value="">-- Choose of Interest --</option>
          <option value="programming">Programming</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-apps">Mobile Apps</option>
          <option value="data-science">Data Science</option>
          <option value="artificial-intelligence">Artificial Intelligence</option>
          <option value="blockchain">Blockchain</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="gadgets">Gadgets</option>
          <option value="other-tech">Other (Tech)</option>
        </select>
        </div>
        <div class="flex items-center mb-8">
          <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary" required>
          <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900">By pressing the "Submit" button, I agree to the applicable<a href="#" class="text-primary hover:underline"> terms and conditions</a>.</label>
        </div>
        <div class="mb-28">
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
  bottom: 250px;
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
