//Task 0: Setup
$(document).ready(function () {
  console.log("jQuery is ready!");

  //Task 1: Selectors & CSS
  $("#updateGreetingBtn").on("click", function () {
    $(".headline").text("Hello! I'm a passionate jQuery learner.");
    $(".intro").html("I build <strong>interactive</strong> web pages.");
  });

  $("#themeToggleBtn").on("click", function () {
    $("body").toggleClass("dark-mode");
    $(this).text($("body").hasClass("dark-mode") ? "Light Mode" : "Dark Mode");
  });

  //Task 2: Visibility Methods
  $("#hideBtn").on("click", function () {
    $("#statusMsg, #funFacts").hide();
  });

  $("#showBtn").on("click", function () {
    $("#statusMsg, #funFacts").show();
  });

  $("#toggleBtn").on("click", function () {
    $("#statusMsg, #funFacts").toggle();
  });

  //Task 3: Fade Methods
  $("#fadeInBtn").on("click", function () {
    $(".gallery-img").fadeIn(800);
  });

  $("#fadeOutBtn").on("click", function () {
    $(".gallery-img").fadeOut(800);
  });

  $("#fadeToggleBtn").on("click", function () {
    $(".gallery-img").fadeToggle(800);
  });

  //Task 4: Slide Methods
  $(".slide-heading").on("click", function () {
    var target = "#" + $(this).data("target");
    $(target).slideToggle(400);
  });

  //Task 5: Add & Remove Elements
  $("#addSkillBtn").on("click", function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      alert("Please enter a skill.");
      return;
    }
    $("#skillList").append("<li class='list-group-item'>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#prependSkillBtn").on("click", function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      alert("Please enter a skill.");
      return;
    }
    $("#skillList").prepend("<li class='list-group-item'>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#removeSkillBtn").on("click", function () {
    $("#skillList li").last().remove();
  });

  //Task 6: Modifying Attributes
  var linkToggled = false;
  $("#changeLinkBtn").on("click", function () {
    if (!linkToggled) {
      $("#socialLink").attr("href", "https://instagram.com/iladjm_").text("Instagram");
    } else {
      $("#socialLink").attr("href", "https://github.com").text("GitHub");
    }
    linkToggled = !linkToggled;
  });

  //Task 7: Form Interaction
  $("#nameInput, #emailInput").on("input", function () {
    var name = $("#nameInput").val();
    var email = $("#emailInput").val();
    $("#livePreview").text("Name: " + name + " | Email: " + email);
  });

  //Task 8: Basic Animation
  var grown = false;
  $("#animateBtn").on("click", function () {
    $(".skill-fill").each(function () {
      var targetWidth = grown ? "0%" : $(this).data("width");
      $(this).animate({ width: targetWidth }, 900);
    });
    grown = !grown;
    $(this).text(grown ? "Reset Skills" : "Animate My Skills");
  });
});