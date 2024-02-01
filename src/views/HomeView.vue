<template>
  <PreloaderComp />
  <NavbarComp />
  <HeaderComp />
  <AboutComp />
  <ProjectComp
    v-for="item in projectList"
    :key="item"
    :name="item.name"
    :projectImage="item.projectImage"
    :description="item.description"
    :css="item.css"
  />
  <ContactComp />
  <FooterComp />
</template>

<script>
import "animate.css";
import PreloaderComp from "@/components/PreloaderComp.vue";
import NavbarComp from "@/components/NavbarComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import AboutComp from "@/components/AboutComp.vue";
import ProjectComp from "@/components/ProjectComp.vue";
import ContactComp from "@/components/ContactComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import projects from "@/api/ProjectList.js";
import { onMounted } from "vue";

export default {
  name: "HomeView",
  components: {
    PreloaderComp,
    NavbarComp,
    HeaderComp,
    AboutComp,
    ProjectComp,
    ContactComp,
    FooterComp,
  },
  setup() {
    const { projectList } = projects();

    onMounted(() => {
      console.log(projectList);
    });

    return { projectList };
  },
};
</script>
