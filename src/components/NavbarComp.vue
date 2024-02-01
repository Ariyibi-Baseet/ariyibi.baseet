<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand fs-3 text-gradient-gold" href="#">Ariyibi.B</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link fs-5" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="#about">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="#contact">Drop me message</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style scoped>
.navbar {
  background: var(--dark-color) !important;
}
.navbar-brand {
  font-weight: bolder;
  color: var(--primary-color);
  font-family: var(--playfair);
}
/* .router-link-active {
  color: red !important;
} */
.nav-link {
  color: #fff;
  font-weight: 500;
  margin: 0 1rem;
}
</style>
