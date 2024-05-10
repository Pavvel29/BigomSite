const AudioFone = {
  box: null,
  contentBox: null,
  Path_music: null,
  icontMute: null,
  iconValue: null,
  textModal: null,
  modalButtonText: null,
  set options(value) {
    const {
      box,
      contentBox,
      Path_music,
      iconValue,
      icontMute,
      textModal,
      modalButtonText,
    } = value;
    this.box = box;
    this.contentBox = contentBox;
    this.Path_music = Path_music;
    this.iconValue = iconValue;
    this.icontMute = icontMute;
    this.textModal = textModal;
    this.modalButtonText = modalButtonText;
  },
  modalWindow(audio) {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.classList.add("modal");
    const div2 = document.createElement("div");
    div2.classList.add("content__modal");
    const h2 = document.createElement("h2");
    h2.textContent = this.textModal;
    const button = document.createElement("button");
    button.addEventListener("click", function () {
      document.querySelector(".modal").classList.toggle("none");
      document.querySelector(".content").classList.toggle("none");
      audio.play();
    });
    audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
    button.textContent = this.modalButtonText;
    div.append(div2);
    div2.append(h2);
    div2.append(button);
    body.prepend(div);
  },
  get element() {
    const box = document.querySelector(this.box);
    (box.style.display = "flex"), (box.style.alignItems = "center");
    box.style.justifyContent = "center";
    const audio = document.createElement("audio");
    audio.src = this.Path_music;

    const i = document.createElement("i");
    i.style.userSelect = "none";
    i.addEventListener("click", function () {
      if (this.textContent === "volume_up") {
        this.textContent = "volume_off";
        audio.muted = true;
      } else {
        this.textContent = "volume_up";
        audio.muted = false;
      }
    });
    i.classList.add("material-icons");
    i.textContent = this.iconValue;
    box.append(audio);
    box.append(i);
    this.modalWindow(audio);
  },
};
AudioFone.element;


