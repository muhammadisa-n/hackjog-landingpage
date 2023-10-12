<template>
  <footer class="bg-gradient-to-b from-primary to-gradasi pt-24 pb-12">
    <div class="container">
      <div class="flex flex-wrap md:justify-between">
        <div
          class="w-full px-4 mb-12 lg:mb-2 text-slate-300 font-medium font-monserrat md:w-3/4"
        >
          <h2 class="font-bold text-4xl text-primary mb-5 font-pacifico">
            <RouterLink :to="{ name: 'home' }">
              <img src="../assets/images/logo.png" class="h-8" alt="" />
            </RouterLink>
          </h2>
          <h3 class="font-normal font-monserrat text-base mb-2">
            Hackjog sebuah ekosistem Industri digital yang berada di D.I.Y dalam
            bentuk kolaborasi hexahelix. Berfokus pada menumbuh kembangkan
            industri digital serta transformasi masyarakat melalui Artificial
            Intelligence.
          </h3>
        </div>
        <div class="w-full px-4 mb-2 md:w-1/4 font-monserrat">
          <ul class="flex mx-auto lg:justify-end lg:mt-14">
            <li class="">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="inline-block text-base hover:text-primary mb-3 mr-2"
              >
                <img
                  src="../assets/images/instagram-white.png"
                  alt=""
                  class="h-8 w-8"
              /></a>
            </li>
            <li>
              <a
                href="https://twitter.com/home?lang=id"
                target="_blank"
                class="inline-block text-base hover:text-primary mb-3 mr-2"
              >
                <img
                  src="../assets/images/twitter-white.png"
                  alt=""
                  class="h-8 w-8"
              /></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                class="inline-block text-base hover:text-primary mr-2"
              >
                <img
                  src="../assets/images/youtube-putih.png"
                  alt=""
                  class="h-8 w-8"
              /></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                class="inline-block text-base hover:text-primary mb-3 mr-2"
              >
                <img
                  src="../assets/images/ion_logo-whatsapp.png"
                  alt=""
                  class="h-8 w-8"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full pt-2 border-t-4 border-white">
        <p
          class="font-semibold text-base text-center lg:text-left lg:ml-5 text-white font-monserrat"
        >
          &copy; {{ yearnow }} - HACKJOG:DIGITAL DAEMON
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
const yearnow = new Date().getFullYear();
</script>

<style lang="scss" scoped></style>
