/* enable BS4 tool tips////////////////////////  */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Enabling bootstrap 4 popovers /////////////////////// */
$(function(){
  // Enables popover
  $("[data-toggle=popover]").popover();
});

/* 3D mouse movement effect */
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
