<template>
  <a
    :href="`${link}`"
    id="back-to-top"
    class="h-14 w-14 bg-primary rounded-full fixed z-[9999] bottom-4 p-4 right-4 justify-center items-center hover:animate-pulse hidden"
  >
    <span class="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
