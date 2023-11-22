<template>
  <section id="about">
    <div class="container">
      <div class="col-12">
        <h2 class="about-me text-gradient-gold fw-bold">About me:</h2>
        <p class="text-white">
          A Technically-astute frontend web developer eager to contribute to
          team success through smart work, attention to details and excellent
          organizational skills. Confident in writing scalable code that are
          well structured, reliable and also user-friendly.
        </p>
        <div class="col-12 d-flex align-items-center experience-wrapper">
          <div class="experience">
            <p class="text-gradient-gold">2+</p>
          </div>
          <p class="text-white">
            Years of experience. Specialised in building websites and web apps,
            while ensuring a seamless web experience for end users.
          </p>
        </div>
      </div>

      <!-- skills section -->
      <SkillCards />
    </div>
  </section>
</template>

<script>
import SkillCards from "./SkillCards.vue";
export default {
  name: "About",
  components: { SkillCards },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.about-me {
  font-family: var(--playfair);
  letter-spacing: 2px;
}
#about {
  min-height: 100vh;
}
.experience-wrapper {
  gap: 2rem;
}
.experience > p {
  font-size: 5rem;
  font-family: var(--playfair);
  font-weight: 700;
}
</style>
