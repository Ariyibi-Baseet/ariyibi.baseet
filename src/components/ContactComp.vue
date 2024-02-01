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
            <a href="https://twitter.com/ariyibibaseet_" target="_blank">
              <i class="bi bi-twitter text-white fs-3"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/ariyibi-baseet/"
              target="_blank"
            >
              <i class="bi bi-linkedin text-white fs-3 ms-3"></i>
            </a>

            <a href="https://github.com/Ariyibi-Baseet" target="_blank">
              <i class="bi bi-github text-white fs-3 ms-3"></i>
            </a>
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
  name: "ContactComp",
  setup() {},
};
</script>

<style scoped>
#contact {
  height: 70vh;
}
.contact-me {
  font-family: var(--playfair);
  letter-spacing: 2px;
}
.form-control {
  background-color: var(--grayish-white);
  outline: none;
  border: none;
  color: #fff;
  padding: 10px 15px;
}
::placeholder {
  color: gray;
}
</style>
