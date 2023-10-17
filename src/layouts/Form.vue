<template>
  <section id="form" class="p-10 mt-16 sm:mt-12 lg:mt-0">
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div
        class="bg-white rounded-lg shadow-lg w-full sm:w-[400px] lg:w-[600px] xl:w-[900px] p-10"
      >
        <form>
          <div class="mb-8">
            <input
              type="text"
              id="fullname"
              name="fullname"
              v-model="fullname"
              placeholder="Full Name Participant"
              class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black"
              required
            />
          </div>
          <div class="mb-8">
            <input
              type="text"
              id="job"
              name="job"
              v-model="job_title"
              placeholder="Job Title"
              class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black"
              required
            />
          </div>
          <div class="mb-8">
            <input
              type="text"
              id="institution"
              v-model="institution_name"
              name="institution"
              placeholder="Institution Name"
              class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black"
              required
            />
          </div>
          <div class="mb-8">
            <input
              type="text"
              id="address"
              name="address"
              v-model="institution_address"
              placeholder="Institution Address"
              class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black"
              required
            />
          </div>
          <div class="mb-8">
            <select
              id="typeins"
              v-model="institution_type"
              class="block w-full p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-primary focus:border-primary"
              required
            >
              <option value="">-- Select Institution Type --</option>
              <option value="School">School</option>
              <option value="University">University</option>
              <option value="Government">Government</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="mb-8">
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              placeholder="Email"
              class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-primary placeholder-black"
              required
            />
          </div>
          <div class="mb-8">
            <select
              id="type_invitation"
              v-model="type_invitation"
              class="block w-full p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-primary focus:border-primary"
              required
            >
              <option value="">-- Select Type of Invitation --</option>
              <option value="Activity Invitation ">Activity Invitations</option>
              <option value="No Activity Invitation">
                No Activity Invitations
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="mb-8">
            <select
              id="interest"
              v-model="interest"
              class="block w-full p-4 bg-gray-100 border border-gray-300 text-black text-md rounded-lg focus:ring-primary focus:border-primary"
              required
            >
              <option value="">-- Choose of Interest --</option>
              <option value="Programming">Programming</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Apps">Mobile Apps</option>
              <option value="Data Science">Data Science</option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Blockchain">Blockchain</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Gadgets">Gadgets</option>
              <option value="Other Tech">Other (Tech)</option>
            </select>
          </div>
          <div class="flex items-center mb-8">
            <input
              checked
              id="checkbox-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
              required
            />
            <label
              for="checkbox-1"
              class="ml-2 text-sm font-medium text-gray-900"
              >By pressing the "Submit" button, I agree to the applicable<a
                href="#"
                class="text-primary hover:underline"
              >
                terms and conditions</a
              >.</label
            >
          </div>
          <div class="mb-28">
            <button
              v-on:click.prevent="RegisterUser()"
              type="submit"
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
import axios from "axios";
import { ref } from "vue";
import Swal from "sweetalert2";
export default {
  name: "Form",
  components: {},
  setup() {
    const fullname = ref("");
    const job_title = ref("");
    const institution_name = ref("");
    const institution_address = ref("");
    const institution_type = ref("");
    const email = ref("");
    const type_invitation = ref("");
    const interest = ref("");
    let errorMessage = ref(null);

    const RegisterUser = async () => {
      let formdata = new FormData();
      formdata.append("fullname", fullname.value);
      formdata.append("job_title", job_title.value);
      formdata.append("institution_name", institution_name.value);
      formdata.append("institution_address", institution_address.value);
      formdata.append("institution_type", institution_type.value);
      formdata.append("email", email.value);
      formdata.append("type_invitation", type_invitation.value);
      formdata.append("interest", interest.value);
      if (
        fullname.value === "" ||
        job_title.value === "" ||
        institution_name.value === "" ||
        institution_address.value === "" ||
        institution_type.value === "" ||
        email.value === "" ||
        type_invitation.value === "" ||
        interest.value === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "All forms must be filled in",
          showConfirmButton: true,
        });
      } else {
        await axios
          .post(
            import.meta.env.VITE_BASE_URL_API + `users/registration`,
            formdata
          )
          .then((response) => {
            Swal.fire({
              icon: "success",
              title: "Registration Success",
              showConfirmButton: true,
            });
          })
          .catch((error) => {
            errorMessage.value = error.response.data.message;
            Swal.fire({
              icon: "error",
              title: `${errorMessage}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    };
    return {
      fullname,
      job_title,
      institution_name,
      institution_address,
      institution_address,
      institution_type,
      email,
      type_invitation,
      interest,
      errorMessage,
      RegisterUser,
    };
  },
};
</script>
