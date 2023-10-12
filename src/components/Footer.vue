<template>
  <!-- <footer class="bg-gradient-to-b from-primary to-gradasi">
    <div class="mx-auto w-full p-14">
      <div class="mb-6 md:mb-0">
        <a href="#">
          <img src="../assets/images/logo.png" alt="" class="h-8 mr-3" />
        </a>
      </div>
      <div class="flex">
        <span
          class="font-monserrat text-white block text-sm sm:text-left w-full flex-1 pt-4 pb-4"
          >Hackjog sebuah ekosistem Industri digital yang berada di D.I.Y dalam
          bentuk kolaborasi hexahelix. Berfokus pada <br />
          menumbuh kembangkan industri digital serta transformasi masyarakat
          melalui Artificial Intelligence.
        </span>
        <div class="w-full">

        </div>

      </div>
      <hr />
      <div>
        <span class="block text-sm text-white sm:text-left pt-2"
          >© 2023 - HACKJOG:DIGITAL DAEMON</span
        >
      </div>
    </div>
  </footer> -->
  <footer class="bg-gradient-to-b from-primary to-gradasi pt-24 pb-12">
    <div class="container">
      <div class="flex flex-wrap md:justify-between">
        <div
          class="w-full px-4 mb-12 lg:mb-2 text-slate-300 font-medium font-monserrat md:w-3/4"
        >
          <h2 class="font-bold text-4xl text-primary mb-5 font-pacifico">
            <img src="../assets/images/logo.png" class="h-8" alt="" />
          </h2>
          <h3 class="font-normal text-base mb-2">
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
const yearnow = new Date().getFullYear();
</script>

<style lang="scss" scoped></style>
