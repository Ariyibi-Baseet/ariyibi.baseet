const projects = () => {
  const projectList = [
    {
      projectImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1701016480685/f08554f1-f251-45d1-ac50-cd40a0bf55ae.png",
      name: "Health Ark",
      description: "A website for a health insurance company",
      liveLink: "https://healthark-frontend-website.vercel.app/",
      html: `<font-awesome-icon
                        icon="fa-brands fa-html5"
                        class="fs-3 html-logo"
                      />`,
      css: `<font-awesome-icon
                        icon="fa-brands fa-css3"
                        class="fs-3 ms-2 css-logo"
                      />`,
      javascript: `<font-awesome-icon
        icon="fa-brands fa-js"
        class="fs-3 ms-2 javascript-logo"
      />`,
      react: "",
      tailwindCss: "",
      bootstrap: `<font-awesome-icon
        icon="fa-brands fa-bootstrap"
        class="fs-3 ms-2 bootstrap-logo"
      />`,
      vue: `<font-awesome-icon
        icon="fa-brands fa-vuejs"
        class="fs-3 ms-2 vue-logo"
      />`,
    },
  ];

  return { projectList };
};

export default projects;
