<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6 mb-3">
          <h2 class="contact-me text-gradient-gold fw-bold">
            Connect with me:
          </h2>
          <p class="text-white">Satisfied with me? Please contact me</p>
          <div class="social-icon-wrapper">
            <a class="text-white" href="#"
              ><font-awesome-icon
                icon="fa-brands fa-square-twitter"
                class="fs-3"
            /></a>
            <a class="text-white" href="#"
              ><font-awesome-icon
                icon="fa-brands fa-square-whatsapp"
                class="fs-3 ms-3"
            /></a>
            <a class="text-white" href="#"
              ><font-awesome-icon
                icon="fa-brands fa-square-github"
                class="fs-3 ms-3"
            /></a>
            <a class="text-white" href="#"
              ><font-awesome-icon
                icon="fa-brands fa-linkedin"
                class="fs-3 ms-3"
            /></a>
            <a class="text-white" href="#"
              ><font-awesome-icon icon="fa-solid fa-envelope" class="fs-3 ms-3"
            /></a>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 mb-3">
          <p class="fs-4 text-white">Contact me, let’s make magic together</p>
          <form action="#" class="mt-3">
            <div class="mb-3">
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Name:"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control shadow-none"
                placeholder="Email:"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control shadow-none"
                rows="3"
                placeholder="Message:"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-block text-white w-25 btn-gradient-gold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactArea",
  setup() {},
};
</script>

<style scoped>
.contact-me {
  font-family: var(--playfair);
  letter-spacing: 2px;
}
</style>
