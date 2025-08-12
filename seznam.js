const projects = [
  { name: "Blog - Domácí bylinky (Elementor)", link: "https://elementor2.tomaspitro.cz/", icon: "leaf" },         // bylinky = listí, příroda, čerstvost
  { name: "E-shop- Bylinky (Woocommerce, Elementor)", link: "https://woocommerce-tomaspitro-cz.webkitty.online/", icon: "shopping-cart" }, // eshop = košík, jasná věc
  // { name: "Nový projekt", link: "https://ankh-sepia.vercel.app/", icon: "globe" },
  { name: "Blog - Starý Egypt (REACT)", link: "https://staryegypt.vercel.app/", icon: "eye" },                   // oko Horovo, mystika Egypta
  { name: "Další projekty a všechny repozitáře", link: "https://github.com/tomaspi1?tab=repositories", icon: "code" }  // repozitáře = kód
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = project.link;
  link.target = "_blank";

  const icon = document.createElement("i");
  icon.className = `fas fa-${project.icon}`;

  link.appendChild(icon);
  link.innerHTML += project.name;

  listItem.appendChild(link);
  projectList.appendChild(listItem);
});
