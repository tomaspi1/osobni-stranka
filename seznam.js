const projects = [
  { name: "Blog - Domácí bylinky (Elementor)", link: "https://elementor2.tomaspitro.cz/", icon: "leaf" },        
  { name: "E-shop- Bylinky (Woocommerce, Elementor)", link: "https://woocommerce-tomaspitro-cz.webkitty.online/", icon: "shopping-cart" }, 
  { name: "Blog - Starý Egypt (REACT)", link: "https://staryegypt.vercel.app/", icon: "eye" },                    
 //{ name: "E-shop - 3D tisk( Wordpress - testovací verze)", link: "https://projekt-wp1.vercel.app/", icon: "wrench" },
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
