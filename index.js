var webdevRoleElement = $("#webdev-role");
var gamedevRoleElement = $("#gamedev-role");
var artistRoleElement = $("#artist-role");
var webdevRoleBtnElement = $("#webdev-role-btn");
var gamedevRoleBtnElement = $("#gamedev-role-btn");
var artistRoleBtnElement = $("#artist-role-btn");

createWebDevSkillsSection();
createGameDevSkillsSection();
createArtistSkillsSection();
onStart();

function onStart()
{
    webdevRoleElement.hide();
    gamedevRoleElement.hide();
    artistRoleElement.hide();

    webdevRoleBtnElement.removeClass().addClass("role-inactive");
    gamedevRoleBtnElement.removeClass().addClass("role-inactive");
    artistRoleBtnElement.removeClass().addClass("role-inactive");
}

function showWebDevRole() {
    webdevRoleElement.slideDown();
    gamedevRoleElement.hide();
    artistRoleElement.hide();

    webdevRoleBtnElement.removeClass().addClass("role-active");
    gamedevRoleBtnElement.removeClass().addClass("role-inactive");
    artistRoleBtnElement.removeClass().addClass("role-inactive");
}

function showGameDevRole() {
    webdevRoleElement.hide();
    gamedevRoleElement.slideDown();
    artistRoleElement.hide();

    webdevRoleBtnElement.removeClass().addClass("role-inactive");
    gamedevRoleBtnElement.removeClass().addClass("role-active");
    artistRoleBtnElement.removeClass().addClass("role-inactive");
}

function showArtistRole() {
    webdevRoleElement.hide();
    gamedevRoleElement.hide();
    artistRoleElement.slideDown();

    webdevRoleBtnElement.removeClass().addClass("role-inactive");
    gamedevRoleBtnElement.removeClass().addClass("role-inactive");
    artistRoleBtnElement.removeClass().addClass("role-active");
}

// Consider this. You're doing the same thing multiple times here.
// What you might want to think about is, having _everything_ close
// at once, then pass in an item you want to reveal.
// function revealRole(role) {
  // $('.class-they-all-share').hide();
  // $(role).slideDown();
// }


function createWebDevSkillsSection()
{
    var webDevSkillsHtml = "";

    var frontEndSkills = [
        {label:"HTML", percent: 80},
        {label:"CSS", percent: 70},
        {label:"JS", percent: 50},
        {label:"jQuery", percent: 30},
        {label:"React", percent: 30},
    ];

    var backEndSkills = [
        {label:"C#", percent: 90},
        {label:".NET", percent: 40},
        {label:".NET Core", percent: 30},
        {label:"EF", percent: 20},
        {label:"Node.js", percent: 30},
        {label:"SQL", percent: 40},
        {label:"Java", percent: 30}
    ];

    webDevSkillsHtml += createSkillsSection("Front End", frontEndSkills);
    webDevSkillsHtml += createSkillsSection("Back End", backEndSkills);

    document.getElementById("webdev-skill-container").innerHTML = webDevSkillsHtml;
}

function createGameDevSkillsSection()
{
    var gameDevSkillsHtml = "";

    var gameDevTechSkills = [
        {label:"C#", percent: 80},
        {label:"C++", percent: 80},
        {label:"Unity", percent: 70},
        {label:"Unreal Engine", percent: 30},
        {label:"Java", percent: 20},
    ];

    var gameDevAreaSkills = [
        {label:"Gameplay", percent: 90},
        {label:"Physics", percent: 90},
        {label:"AI", percent: 60},
        {label:"Sound", percent: 20},
        {label:"Graphics", percent: 80},
        {label:"UI", percent: 80},
        {label:"Networking", percent: 20}
    ];

    gameDevSkillsHtml += createSkillsSection("Tech", gameDevTechSkills);
    gameDevSkillsHtml += createSkillsSection("Areas", gameDevAreaSkills);

    document.getElementById("gamedev-skill-container").innerHTML = gameDevSkillsHtml;
}

function createArtistSkillsSection()
{
    var artistToolSkills = [
        {label:"Photoshop", percent: 80},
        {label:"Krita", percent: 90},
        {label:"Blender", percent: 90},
        {label:"3ds Max", percent: 50},
        {label:"Maya", percent: 50},
        {label:"zBrush", percent: 20},
        {label:"Unity", percent: 70},
    ];

    var artistsSkillsHtml = createSkillsSection("My Tools", artistToolSkills);

    document.getElementById("artist-skill-container").innerHTML = artistsSkillsHtml;
}

function createSkillsSection(title, skills)
{
    var sectionHtml = "<h3>" + title + "</h3>";

    for (var i = 0; i < skills.length; i++)
    {
        sectionHtml += `
        <div class="gauge-container">

        <span class="gauge-label">` + skills[i].label + `</span>

            <div class="gauge">
                <div class="gauge-fill p p` + skills[i].percent + `"></div>
            </div>

        </div>`;
    }

    return sectionHtml;
}