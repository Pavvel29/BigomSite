// box: ".mute",
//   contentBox: ".content",
//   Path_music: "./value/fone.mp3",
//   icontMute: "volume_off",
//   iconValue: "volume_up",
//   textModal: "Коли ви натисните кнопку Ок буде лунати музика",
//   modalButtonText: "Ок",

AudioFone.options = {
  box: ".mute",
  contentBox: ".content",
  Path_music: "./value/fone.mp3",
  icontMute: "volume_off",
  iconValue: "volume_up",
  textModal: "Коли ви натисните кнопку буде Звук",
  modalButtonText: "Song",
};
AudioFone.element

window.addEventListener("load", function () {
  document.querySelector(".loaded").classList.toggle("none");
  //document.querySelector('.modal').classList.toggle('none')
});
