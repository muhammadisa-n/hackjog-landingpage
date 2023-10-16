<template>
  <header>
    <nav class="bg-primary fixed top-0 left-0 w-full z-10">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20"
      >
      <a :href="'/#home'" class="flex items-center">
          <img
            src="../assets/images/logo.png"
            class="h-8 mr-3"
            alt="Hackgov Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-dark focus:outline-none focus:ring-2 focus:ring-white"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full lg:block lg:w-auto" id="navbar-dropdown">
          <ul
            class="flex flex-col font-medium lg:p-0 mt-4 border border-white rounded-lg bg-primary lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0"
          >
          <li>
              <a
              :href="'/#home'"
                class="block py-2 pl-3 pr-4 text-white bg-gradasi rounded lg:bg-transparent lg:text-white lg:hover:text-dark lg:p-0 lg:mt-2 lg:mx-4"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
              :href="'/#about'"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gradasi lg:hover:bg-transparent lg:border-0 lg:hover:text-dark lg:p-0 lg:mt-2 lg:mx-4"
                aria-current="page"
                >About</a
              >
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gradasi lg:hover:bg-transparent lg:border-0 lg:hover:text-dark lg:p-0 lg:w-auto lg:mt-2 lg:mx-4"
              >
                Event
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
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
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-primary border border-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                <li>
                    <a
                    :href="'/#speaker'"
                      class="block px-4 py-2 hover:bg-gradasi text-white lg:hover:text-dark"
                      >Speaker</a
                    >
                  </li>
                  <li>
                    <a
                    :href="'/#schedule'"
                      class="block px-4 py-2 hover:bg-gradasi text-white lg:hover:text-dark"
                      >Schedule</a
                    >
                  </li>
                  <li>
                    <a
                    :href="'/#venue'"
                      class="block px-4 py-2 hover:bg-gradasi text-white lg:hover:text-dark"
                      >Venue</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                :href="'/#contact'"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gradasi lg:hover:bg-transparent lg:border-0 lg:hover:text-dark lg:p-0 lg:mt-2 lg:mx-4"
                >Contact</a
              >
            </li>
            <li class="my-4 mx-4 lg:my-0 lg:mx-0">
              <a :href="'/registration'">
              <button
                class="bg-white rounded-full text-primary ring-1 font-semibold px-2 py-2 w-full lg:w-30 hover:bg-gradasi hover:text-white hover:outline-none hover:ring-2 hover:ring-primary"
              >
                Registration
              </button>
            </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  setup() {
    const openmenu = () => {
      document.querySelector("#hamburger").classList.toggle("hamburger-active");
      document.querySelector("#nav-menu").classList.toggle("hidden");
    };

    return { openmenu, RouterLink };
  },
};
</script>

<style scoped></style>
