const projects = [
    { name: "Kalkulačka výdělku", link: "https://jellyfish-app-99lni.ondigitalocean.app/", icon: "code" },
    { name: "Hra Snake", link: "http://had.tomaspitro.cz/", icon: "rocket" },
    { name: "Osobní stránka- tomaspitro.cz", link: "index.html", icon: "book" },
    { name: "TPMM-eshop-mobil", link: "https://tp-mobil.000webhostapp.com/", icon: "globe" },
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
