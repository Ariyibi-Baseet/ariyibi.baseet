<template>
  <div
    class="d-flex align-items-center justify-content-center flex-column"
    id="preloader-section"
    :class="{ 'stop-preloader': isLoading }"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="svg">
      <path
        d="M192 32c0-17.7 14.3-32 32-32C383.1 0 512 128.9 512 288c0 17.7-14.3 32-32 32s-32-14.3-32-32C448 164.3 347.7 64 224 64c-17.7 0-32-14.3-32-32zM60.6 220.6L164.7 324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4L291.4 451.4c14.5 14.5 11.8 38.8-7.3 46.3C260.5 506.9 234.9 512 208 512C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1c7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
      />
    </svg>
    <h2
      class="text-white mt-3 animate__animated animate__fadeInUp animate__delay-2s"
    >
      Ariyibi Baseet
    </h2>
  </div>
</template>

<script>
import "animate.css";
import { onMounted, ref } from "vue";
export default {
  name: "Preloader",
  setup() {
    let isLoading = ref(false);

    function stopPreloader() {
      isLoading.value = true;
    }

    onMounted(() => {
      setTimeout(stopPreloader, 3000);
      // window.onload = function stopPreloader() {
      //   isLoading.value = true;
      // };
      // window.addEventListener("load", stopPreloader);
    });
    return {
      isLoading,
    };
  },
};
</script>

<style scoped>
#preloader-section {
  background-color: var(--dark-color);
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 1032;
}
.stop-preloader {
  animation: 1s stopPreloader forwards;
}
@keyframes stopPreloader {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
#svg {
  width: 140px;
  height: 140px;
  stroke: #fff;
  fill-opacity: 0;
  stroke-width: 4px;
  stroke-dasharray: 4500;
  animation: draw 6s ease-in-out;
}
/* animation to draw svg */
@keyframes draw {
  0% {
    stroke-dashoffset: 4500;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
