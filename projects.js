const projectTypes = {
  ALL: 0,
  WEBDEV: 1,
  GAMEDEV: 2,
  GAMEART: 3
};

const projects = [
  {
    name: "Quiksort",
    cardImage: "./projects/content/images/Quiksort-Card.png",
    link: "./projects/quiksort.html",
    type: projectTypes.GAMEDEV,
    techUsed: "C#, Unity, Android",
    priority: 0
  },
  {
    name: "Project Arclight",
    cardImage: "",
    link: "",
    type: projectTypes.GAMEDEV,
    techUsed: "C#, Unity, 3D",
    priority: 0
  },
  {
    name: "Project Dawnstar",
    cardImage: "",
    link: "",
    type: projectTypes.GAMEDEV,
    techUsed: "C++, OpenGL, SDL2, GLSL, GLEW",
    priority: 0
  },
  {
    name: "TableTop CMS",
    cardImage: "",
    link: "",
    type: projectTypes.WEBDEV,
    techUsed: "ASP.NET, MVC, C#, EF, HTML, CSS, js",
    priority: 0
  },
  {
    name: "Issue Tracker REST API",
    cardImage: "",
    link: "",
    type: projectTypes.WEBDEV,
    techUsed: "ASP.NET, C#, EF, REST",
    priority: 0
  },
  {
    name: "Main Character",
    cardImage: "",
    link: "",
    type: projectTypes.GAMEART,
    techUsed: "Blender, 3D, Krita",
    priority: 0
  },
  {
    name: "Mushie",
    cardImage: "",
    link: "",
    type: projectTypes.GAMEART,
    techUsed: "Blender, 3D, Krita",
    priority: 0
  },
  {
    name: "Goram",
    cardImage: "",
    link: "",
    type: projectTypes.GAMEART,
    techUsed: "Blender, 3D, Krita",
    priority: 0
  },
  {
    name: "Pilin",
    cardImage: "",
    link: "",
    type: projectTypes.GAMEART,
    techUsed: "Blender, 3D, Krita",
    priority: 0
  }
];

function getIcon(projectType) {
  switch (projectType) {
    case projectTypes.WEBDEV:
      return '<i class="fas fa-code"></i>';
    case projectTypes.GAMEDEV:
      return '<i class="fas fa-gamepad"></i>';
    case projectTypes.GAMEART:
      return '<i class="fas fa-paint-brush"></i>';
    default:
      return '<i class="fas fa-project-diagram"></i>';
  }
}

function getFilterClass(projectType) {
  switch (projectType) {
    case projectTypes.WEBDEV:
      return "filterWebDev";
    case projectTypes.GAMEDEV:
      return "filterGameDev";
    case projectTypes.GAMEART:
      return "filterGameArt";
    default:
      return "";
  }
}

function createCard(project) {
  return (
    `
    <div class="tile ` +
    getFilterClass(project.type) +
    `">
      <a  
      href="` +
    project.link +
    `" 
      title="` +
    project.name +
    `"
      >
        <img 
        class="image" 
        src="` +
    project.cardImage +
    `" 
        />
      </a>
      <div class="category-bookmark">
        <div class="text">` +
    getIcon(project.type) +
    `</div>
      </div>
      <div class="tile-badge">
        <div class="text">` +
    project.techUsed +
    `</div>
      </div>
    </div>
    `
  );
}

var projectCardsHtml = projects
  .sort((a, b) => b.priority - a.priority)
  .map(project => createCard(project))
  .reduce((a, b) => a + b);

var projectTileGrid = $("#project-tile-grid");

$(function() {
  projectTileGrid.html(projectCardsHtml);
});
