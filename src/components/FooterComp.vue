<template>
  <footer id="footer" class="mb-3 p-2">
    <div class="container">
      <p class="text-center text-white">
        Created with
        <font-awesome-icon icon="fa-solid fa-heart" class="text-danger" /> By
        <a :href="developersMail" class="text-decoration-none"
          >Ariyibi Baseet</a
        >
        &copy; Copyright Reserved <span>{{ currentDate.getFullYear() }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
  setup() {
    const developersMail = "mailto:ariyibi.baseet@gmail.com";
    const currentDate = new Date();

    return {
      currentDate,
      developersMail,
    };
  },
};
</script>

<style scoped></style>
