function onStart() {
  roles.hide();
  timelineSection.hide();
}

function hideRoles() {
  roles.hide();
  setRoleButtonsAsInactive();
}

function collapseRoles() {
  roles.slideUp();
  setRoleButtonsAsInactive();
}

function setRoleButtonsAsInactive() {
  roleBtns.removeClass("active");
}

function showRole(roleElement, roleBtn) {
  hideRoles();
  roleElement.slideDown();
  roleBtn.addClass("active");
}

function createRoleSection(skills) {
  var sectionHtml = "";
  skills.forEach(element => sectionHtml += createSkillsSection(element.title, element.skills));
  return sectionHtml;
}

function createSkillsSection(title, skills) {
  var sectionHtml = "<h3>" + title + "</h3>";

  for (var i = 0; i < skills.length; i++) {
    sectionHtml += `
    <div class="gauge-container">
      <span class="gauge-label">` + skills[i].label + `</span>
      <div class="gauge">
        <div class="gauge-fill" style="width:` + skills[i].percent + `%"></div>
      </div>
    </div>`;
  }

  return sectionHtml;
}

function toggleTimeline() {
  timelineSection.slideToggle();
}

const webdevRoleElement = $("#webdev-role");
const gamedevRoleElement = $("#gamedev-role");
const artistRoleElement = $("#artist-role");

const webdevRoleBtnElement = $("#webdev-role-btn");
const gamedevRoleBtnElement = $("#gamedev-role-btn");
const artistRoleBtnElement = $("#artist-role-btn");

const timelineSection = $("#timeline-section");
const timelineToggleArrow = $("#timeline-toggle-arrow");

const roles = $(".role-info-container");
const roleBtns = $(".role-btn");

const frontEndSkills = [
  {label:"HTML", percent: 80},
  {label:"CSS", percent: 70},
  {label:"JS", percent: 50},
  {label:"jQuery", percent: 30},
  {label:"React", percent: 30},
];

const backEndSkills = [
  {label:"C#", percent: 90},
  {label:".NET", percent: 40},
  {label:".NET Core", percent: 30},
  {label:"EF", percent: 20},
  {label:"Node.js", percent: 30},
  {label:"SQL", percent: 40},
  {label:"Java", percent: 30}
];

const gameDevTechSkills = [
  {label:"C#", percent: 80},
  {label:"C++", percent: 80},
  {label:"Unity", percent: 70},
  {label:"Unreal Engine", percent: 10},
  {label:"Java", percent: 20},
];

const gameDevAreaSkills = [
  {label:"Gameplay", percent: 90},
  {label:"Physics", percent: 90},
  {label:"AI", percent: 60},
  {label:"Sound", percent: 20},
  {label:"Graphics", percent: 80},
  {label:"UI", percent: 80},
  {label:"Networking", percent: 20}
];

const artistToolSkills = [
  {label:"Photoshop", percent: 80},
  {label:"Krita", percent: 90},
  {label:"Blender", percent: 90},
  {label:"3ds Max", percent: 50},
  {label:"Maya", percent: 50},
  {label:"zBrush", percent: 20},
  {label:"Unity", percent: 70},
];

const webDevSkills = [{title: "Front End", skills: frontEndSkills}, {title: "Back End", skills: backEndSkills}];
const gameDevSkills = [{title: "Tech", skills: gameDevTechSkills}, {title: "Areas", skills: gameDevAreaSkills}];
const artistSkills = [{title: "Tools", skills: artistToolSkills}];

const webDevRoleSectionHtml = createRoleSection(webDevSkills);
const gameDevRoleSectionHtml = createRoleSection(gameDevSkills);
const artistRoleSectionHtml = createRoleSection(artistSkills);

$("#webdev-skill-container").html(webDevRoleSectionHtml);
$("#gamedev-skill-container").html(gameDevRoleSectionHtml);
$("#artist-skill-container").html(artistRoleSectionHtml);

timelineToggleArrow.click(
  function(){
    timelineToggleArrow.toggleClass("arrow-down").toggleClass("arrow-up");
  }
);

webdevRoleBtnElement.click(
  function() {
    if (webdevRoleElement.is(":visible"))
      collapseRoles();
    else
      showRole(webdevRoleElement, webdevRoleBtnElement);
  }
);

gamedevRoleBtnElement.click(
  function() {
    if (gamedevRoleElement.is(":visible"))
      collapseRoles();
    else
      showRole(gamedevRoleElement, gamedevRoleBtnElement);
  }
);

artistRoleBtnElement.click(
  function() {
    if (artistRoleElement.is(":visible"))
      collapseRoles();
    else
      showRole(artistRoleElement, artistRoleBtnElement);
  }
);

$(".collapse-role").click(
  function() {
    collapseRoles();
  }
)

onStart();
