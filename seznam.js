const projects = [
    { name: "Kalkulačka výdělku", description: "HTML/CSS,JAVASCRIPT,", link: "https://jellyfish-app-99lni.ondigitalocean.app/", icon: "code" },
    { name: "Hra Snake", description: "HTML/CSS,JAVASCRIPT", link: "http://had.tomaspitro.cz/", icon: "rocket" },
    { name: "Osobní stránka- tomaspitro.cz", description: "HTML/CSS,JAVASCRIPT", link: "index.html", icon: "book" },
     { name: "Další projekty a všechny repozitáře", description: "", link: "https://github.com/tomaspi1?tab=repositories", icon: "star" },
    // { name: "Název projektu 5", description: "Popis projektu 5", link: "odkaz", icon: "cog" },
    // { name: "Název projektu 6", description: "Popis projektu 6", link: "odkaz", icon: "globe" },
    // { name: "Název projektu 7", description: "Popis projektu 7", link: "odkaz", icon: "file" },
    // { name: "Název projektu 8", description: "Popis projektu 8", link: "odkaz", icon: "camera" },
    // { name: "Název projektu 9", description: "Popis projektu 9", link: "odkaz", icon: "music" },
    // { name: "Název projektu 10", description: "Popis projektu 10", link: "odkaz", icon: "heart" }
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
    listItem.innerHTML += ` - ${project.description}`;
    projectList.appendChild(listItem);
});