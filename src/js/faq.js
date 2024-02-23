import $ from "jquery";

$(".question").click(function () {
  $(this).find(".content").toggle(200); //скрытие, показ ответа
  $(this).find(".question-plus").css("transform", "rotate(0)"); //поворот стрелки
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(this).find(".changeStatus").text("Відкрити опис");
  } else {
    $(this).addClass("open");
    $(this).find(".changeStatus").text("Закрити опис");
  }
});

$(".question-two").click(function () {
  $(this).find(".content-two").toggle(200); //скрытие, показ ответа
  $(this).find(".question-plus").css("transform", "rotate(0)"); //поворот стрелки
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
    $(this).find(".question-plus").css("transform", "rotate(45deg)"); //поворот стрелки
  }
});

//   if ($(this).hasClass("open")) {
//     $(this).removeClass("open");
//     closeOpenText.forEach((item) => (item.textContent = "Відкрити опис"));
//   } else {
//     $(this).addClass("open");
//     closeOpenText.forEach((item) => (item.textContent = "Закрити опис"));
//     $(this).find(".question-plus").css("transform", "rotate(45deg)"); //поворот стрелки
//   }
// });
