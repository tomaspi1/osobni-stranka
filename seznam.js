const projects = [
  // { name: "Hra Snake (JS)", link: "http://had.xdtisk.cz/", icon: "rocket" },
  { name: "Osobní stránka- tomaspitro.cz", link: "index.html", icon: "book" },
 // { name: "Nový projekt", link: "https://ankh-sepia.vercel.app/", icon: "globe" },
{ name: "Starý Egypt (REACT)", link: "https://staryegypt.vercel.app/", icon: "eye" },
  { name: "Další projekty a všechny repozitáře", link: "https://github.com/tomaspi1?tab=repositories", icon: "star" }
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
