<template>
  <header
    class="bg-primary absolute top-0 left-0 w-full flex items-center z-10"
  >
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <RouterLink
            :to="{ name: 'home' }"
            class="font- font-monserrat text-lg text-white block py-6"
            ><img
              src="../assets/images/logo.png"
              class="h-8 mr-3"
              alt="Hackgov Logo"
            />
          </RouterLink>
        </div>
        <div class="flex items-center px-4">
          <button
            @click="openmenu"
            id="hamburger"
            name="hamburger"
            type="button"
            class="block absolute right-4 lg:hidden"
          >
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-top-left"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
            ></span>
          </button>
          <nav
            id="nav-menu"
            class="hidden absolute py-5 bg-primary shadow-lg border-2 max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:border-none lg:shadow-none lg:rounded-none"
          >
            <ul class="block lg:flex">
              <li class="group">
                <RouterLink
                  :to="{ name: 'home' }"
                  class="text-base font-monserrat font-semibold text-white py-2 mx-8 flex lg:group-hover:border-b-[3px] lg:group-hover:divide-x lg:group-hover:divide-white"
                >
                  Home
                </RouterLink>
              </li>
              <li class="group">
                <a
                  href="#"
                  class="text-base font-monserrat font-semibold text-white py-2 mx-8 flex lg:group-hover:border-b-[3px] lg:group-hover:divide-x-[3px] lg:group-hover:divide-white"
                >
                  About
                </a>
              </li>
              <li class="group">
                <a
                  href="#"
                  class="lg:hidden text-base font-monserrat font-semibold text-white py-2 mx-8 flex lg:group-hover:border-b-[3px] lg:group-hover:divide-x-[3px] lg:group-hover:divide-white"
                >
                  Event
                </a>
              </li>
              <li class="group">
                <a
                  href="#"
                  class="lg:hidden text-base font-monserrat font-semibold text-white py-2 mx-8 flex lg:group-hover:border-b-[3px] lg:group-hover:divide-x-[3px] lg:group-hover:divide-white"
                >
                  Speaker
                </a>
              </li>
              <li class="group">
                <a
                  href="#"
                  class="lg:hidden text-base font-monserrat font-semibold text-white py-2 mx-8 flex lg:group-hover:border-b-[3px] lg:group-hover:divide-x-[3px] lg:group-hover:divide-white"
                >
                  Schedule
                </a>
              </li>
              <li class="group">
                <a
                  href="#"
                  class="lg:hidden text-base font-monserrat font-semibold text-white py-2 mx-8 flex lg:group-hover:border-b-[3px] lg:group-hover:divide-x-[3px] lg:group-hover:divide-white"
                >
                  Venue
                </a>
              </li>
              <!-- navbar not mobile  -->
              <li class="group">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="hidden text-white font-semibold rounded-lg text-base mx-8 py-2 text-center lg:inline-flex items-center"
                  type="button"
                >
                  Event
                  <svg
                    class="w-2.5 h-2.5 ml-2.5 hidden lg:block"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdown"
                  class="z-10 hidden bg-primary w w-44 border border-black"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#speaker"
                        class="block text-white font-semibold px-4 py-2"
                        >Speaker</a
                      >
                    </li>
                    <li>
                      <a
                        href="#schedule"
                        class="block text-white font-semibold px-4 py-2"
                        >Schedule</a
                      >
                    </li>
                    <li>
                      <a
                        href="#venue"
                        class="block text-white font-semibold px-4 py-2"
                        >Venue</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li class="group">
                <a
                  href="#"
                  class="text-base font-monserrat font-semibold text-white py-2 mx-8 flex lg:group-hover:border-b-[3px] lg:group-hover:divide-x-[3px] lg:group-hover:divide-white"
                >
                  Contact
                </a>
              </li>
              <li class="mt-3 lg:mt-0 flex items-center pl-8">
                <button
                  @click=""
                  class="bg-white rounded-full text-primary font-semibold px-2 py-2"
                >
                  Registration
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
const openmenu = () => {
  document.querySelector("#hamburger").classList.toggle("hamburger-active");
  document.querySelector("#nav-menu").classList.toggle("hidden");
};
</script>

<style lang="scss" scoped></style>
