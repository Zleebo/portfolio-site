const projects = [
    {
        title: "Example Project",
        description: "Replace this with your real project",
        video: ""
    }
];

const container = document.getElementById("projects");

projects.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.description}</p>
  `;
    container.appendChild(div);
});