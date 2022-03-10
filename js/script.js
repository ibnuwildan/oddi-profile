// get data json
$.getJSON("data/card.json", function (data) {
  let menu = data.menu;
  $.each(menu, function (i, data) {
    console.log(data);
    $("#daftar-card").append('<div class="col-3 zoom">' + data.gambar + "</div>");
  });
});

// navbar active
$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});
