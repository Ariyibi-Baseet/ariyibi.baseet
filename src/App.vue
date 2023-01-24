<template>
  <HomeView />
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default {
  name: "App",
  components: { HomeView },
};
</script>
<style>
/* utilities */
:root {
  --dark-color: #000036;
  --secondary-color: #282162;
  --primary-color: #7562e0;
  --grayish: #848191;
  --grayish-white: rgba(132, 129, 145, 0.52);
  --whitish: #f5f5f5;
  --html: #f06529;
  --css: #2965f1;
  --laravel: #fb503b;
  --bootstrap: #724caa;
  --javascript: #f0db4f;
  --vue: #42b883;

  /* fonts */
  --poppins: "Poppins", sans-serif;
  --playfair: "DM Serif Display", serif;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 70px;
}
body {
  background-color: var(--dark-color);
  font-family: var(--poppins);
}
.text-gradient-gold {
  background: hsla(42, 65%, 41%, 1);
  background: linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  background: -moz-linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  background: -webkit-linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#AE8625", endColorstr="#F7EF8A", GradientType=1 );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btn-gradient-gold {
  background: #ad8425;
  background: linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  background: -moz-linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  background: -webkit-linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#AE8625", endColorstr="#F7EF8A", GradientType=1 );
}
</style>
