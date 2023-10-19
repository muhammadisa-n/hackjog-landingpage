<template>
  <section id="about" class="pt-16 lg:pb-16 lg:pt-48">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-4 sm:mb-4 lg:mb-0 lg:h-0 lg:w-1/2">
          <div class="container">
            <div class="flex">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/s6jGBKLvRwo?si=m9XKrIb7S2JampOk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 lg:mb-12 items-center lg:ml-0 ml-5">
          <h4
            class="font-semibold font-monserrat text-primary text-lg lg:text-xl mb-3"
          >
            What is a HackJog event?
          </h4>
          <p
            class="font-normal font-monserrat text-base text-black max-w-xl lg:text-lg"
          >
            HackJog adalah Ekosistem Industri digital yang berada di D.I.Y dalam
            bentuk kolaborasi hexahelix. Berfokus pada menumbuhkembangkan
            industri digital serta transformasi masyarakat melalui Artificial
            Intelligence.
          </p>
          <div class="flex items-center dark:text-white mt-3 lg:mb-10">
            <h4 class="font-semibold font-monserrat text-primary text-lg mr-5">
              Follow
            </h4>
            <!-- Twitter logo -->
            <a
              href="https://twitter.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/x.png" width="20" alt="" />
            </a>
            <!-- Instagram logo -->
            <a
              href="https://instagram.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/instagram.png" width="20" alt="" />
            </a>
            <!-- Youtube logo -->
            <a
              href="https://youtube.com/"
              target="_blank"
              class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <img src="../assets/images/youtube.png" width="20" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped></style>
