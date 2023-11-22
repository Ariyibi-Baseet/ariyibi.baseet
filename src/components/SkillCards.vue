<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3 p-4 skills-card">
      <div class="skills-wrapper p-4 rounded">
        <img :src="skillCardImg" alt="" class="bg-skills" />
        <div class="skills">
          <font-awesome-icon icon="fa-brands fa-html5" class="html-icon" />
          <br />
          <span class="text-uppercase fs-5 text-white fw-bold">html5</span>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 p-4 skills-card">
      <div class="skills-wrapper p-4 rounded">
        <img :src="skillCardImg" alt="" class="bg-skills" />
        <div class="skills">
          <font-awesome-icon icon="fa-brands fa-css3" class="css-icon" />
          <br />
          <span class="text-uppercase fs-5 text-white fw-bold">css3</span>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 p-4 skills-card">
      <div class="skills-wrapper p-4 rounded">
        <img :src="skillCardImg" alt="" class="bg-skills" />
        <div class="skills">
          <font-awesome-icon icon="fa-brands fa-js" class="js-icon" />
          <br />
          <span class="text-uppercase fs-5 text-white fw-bold">javascript</span>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 p-4 skills-card">
      <div class="skills-wrapper p-4 rounded">
        <img :src="skillCardImg" alt="" class="bg-skills" />
        <div class="skills">
          <font-awesome-icon icon="fa-brands fa-vuejs" class="vue-icon" />
          <br />
          <span class="text-uppercase fs-5 text-white fw-bold">Vuejs</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3 p-4 skills-card">
      <div class="skills-wrapper p-4 rounded">
        <img :src="skillCardImg" alt="" class="bg-skills" />
        <div class="skills">
          <font-awesome-icon
            icon="fa-brands fa-bootstrap"
            class="bootstrap-icon"
          />
          <br />
          <span class="text-uppercase fs-5 text-white fw-bold">Bootstrap</span>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 p-4 skills-card">
      <div class="skills-wrapper p-4 rounded">
        <img :src="skillCardImg" alt="" class="bg-skills" />
        <div class="skills">
          <font-awesome-icon
            icon="fa-brands fa-git-alt"
            class="git-icon"
          />&nbsp;&nbsp;
          <font-awesome-icon icon="fa-brands fa-github" class="github-icon" />
          <br />
          <span class="text-uppercase fs-5 text-white fw-bold"
            >git and github</span
          >
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3 p-4 skills-card">
      <div class="skills-wrapper p-4 rounded">
        <img :src="skillCardImg" alt="" class="bg-skills" />
        <div class="skills">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
          >
            <path
              d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
            ></path>
          </svg>
          <br />
          <span class="text-uppercase fs-5 text-white fw-bold"
            >tailwindcss</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCardsArea",
  setup() {
    const skillCardImg = "/img/CurveLine.svg";

    return {
      skillCardImg,
    };
  },
};
</script>

<style scoped>
.skills-wrapper {
  background-color: var(--grayish);
  position: relative;
  min-height: 200px;
  transition: background-color 300ms ease-in;
}
.skills-wrapper:hover {
  cursor: pointer;
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
}

.skills {
  position: absolute;
  bottom: 0;
}
.bg-skills {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.html-icon,
.css-icon,
.js-icon,
.vue-icon,
.git-icon,
.github-icon,
.laravel-icon,
.bootstrap-icon {
  color: #fff;
  font-size: 4rem;
}
</style>
