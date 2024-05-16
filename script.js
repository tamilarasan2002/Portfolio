"use strict";

$(document).ready(function () {
  // element toggle function
  const elementToggleFunc = function (elem) {
    $(elem).toggleClass("active");
  };

  // sidebar variables
  const $sidebar = $("[data-sidebar]");
  const $sidebarBtn = $("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  $sidebarBtn.on("click", function () {
    elementToggleFunc($sidebar);
  });

  // testimonials variables
  const $testimonialsItem = $("[data-testimonials-item]");
  const $modalContainer = $("[data-modal-container]");
  const $modalCloseBtn = $("[data-modal-close-btn]");
  const $overlay = $("[data-overlay]");

  // modal variable
  const $modalImg = $("[data-modal-img]");
  const $modalTitle = $("[data-modal-title]");
  const $modalText = $("[data-modal-text]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    $modalContainer.toggleClass("active");
    $overlay.toggleClass("active");
  };

  $testimonialsItem.on("click", function () {
    $modalImg.attr(
      "src",
      $(this).find("[data-testimonials-avatar]").attr("src")
    );
    $modalImg.attr(
      "alt",
      $(this).find("[data-testimonials-avatar]").attr("alt")
    );
    $modalTitle.html($(this).find("[data-testimonials-title]").html());
    $modalText.html($(this).find("[data-testimonials-text]").html());

    testimonialsModalFunc();
  });

  // add click event to modal close button
  $modalCloseBtn.on("click", testimonialsModalFunc);
  $overlay.on("click", testimonialsModalFunc);

  // custom select variables
  const $select = $("[data-select]");
  const $selectItems = $("[data-select-item]");
  const $selectValue = $("[data-select-value]");
  const $filterBtn = $("[data-filter-btn]");

  $select.on("click", function () {
    elementToggleFunc(this);
  });

  // add event in all select items
  $selectItems.on("click", function () {
    const selectedValue = $(this).text().toLowerCase();
    $selectValue.text($(this).text());
    elementToggleFunc($select);
    filterFunc(selectedValue);
  });

  // filter variables
  const $filterItems = $("[data-filter-item]");

  const filterFunc = function (selectedValue) {
    $filterItems.each(function () {
      if (selectedValue === "all") {
        $(this).addClass("active");
      } else if (selectedValue === $(this).data("category")) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  };

  // add event in all filter button items for large screen
  let lastClickedBtn = $filterBtn.first();

  $filterBtn.on("click", function () {
    const selectedValue = $(this).text().toLowerCase();
    $selectValue.text($(this).text());
    filterFunc(selectedValue);
    lastClickedBtn.removeClass("active");
    $(this).addClass("active");
    lastClickedBtn = $(this);
  });
  // change artical

  const $link = $("[data-nav-link]");
  console.log($link);
  $link.on("click", function () {
    $link.removeClass("active");
    $(this).addClass("active");
    $("article").removeClass("active");
    console.log($(this).html());
    $("article." + $(this).html().toLowerCase()).addClass("active");
  });
  $('.dialog-container ion-icon').on('click',function(){
    $('.dialog-box').addClass('d-none')
});
$(".dialog-contact").on("click", function () {
  $link.removeClass("active");
  $("article").removeClass("active");
  var articleClass = $(this).find("span").text().toLowerCase();
  $("article." + articleClass).addClass("active");
  $link.each(function () {
    $(this).html() === "Contact"? $(this).addClass("active"):null;
  });
  $(".dialog-box").addClass("d-none");
});

});
