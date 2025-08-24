// $("h1").addClass("big-title");

// $("button");

/////

// $("h1").text("Bye");

// $("button").text("Dont Click Me");

/////

// $("h1").text("Bye");

// $("button").text("<em>Hey</em>");

/////

// $("img").attr("src");

/////

// $("a").attr("href", "https://www.yahoo.com");

/////

// $("h1").click(function() {
//     $("h1").css("color", "purple")
// });

/////

// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

/////

// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

/////

// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// });

// $("h1").before("<button>New</button>");
//after
//prepend
//append

// $("button").remove();

/////

// $("button").on("click", function() {
//     $("h1").hide();
// });

// $("button").on("click", function() {
//     $("h1").toggle();
// });

// $("button").on("click", function() {
//     $("h1").fadeOut();
// });

// $("button").on("click", function() {
//     $("h1").fadeIn();
// });

// $("button").on("click", function() {
//     $("h1").fadeToggle();
// });

// $("button").on("click", function() {
//     $("h1").slideUp();
// });

// $("button").on("click", function() {
//     $("h1").slideDown();
// });

// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

/////

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// });

// $("button").on("click", function() {
//     $("h1").animate({margin: 20});
// });

// $("button").on("click", function() {
//     $("h1").animate({margin: "20%"});
// });

$("button").on("click", function() {
    $("h1").slideToggle().animate({opacity: 0.5});
});


/////
// $("h1").css("font-size", "5rem");

// $("h1").css("color", "red");

// jQuery("h1").css("color", "red");

// Both are same