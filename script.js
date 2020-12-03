// hide
$(".hide-button").click(function(){
  $(".ghost-image").hide();
});

// show
$(".show-button").click(function(){
  $(".ghost-image").show();
});

// update image
$(".update-img-button").click(function(){
  $("img").attr("src", "https://illustoon.com/photo/3487.png");
});

// revert image
$(".revert-img-button").click(function(){
  $("img").attr("src", "https://ih1.redbubble.net/image.153656513.6605/flat,800x800,075,f.jpg");
});

// Send message
$(".message-button").click(function(){
  let val = $(".input").val();
  $(".message").append("<p>" + val + "</p>");
});

// Name me
$(".name-button").click(function(){
  let val = $(".input").val();
  $("h1").html("<p>" + "My name is " + val + " and I promise I'm not a ghost." + "</p>");
});