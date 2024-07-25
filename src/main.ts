class Navigation {
  isOpen: boolean;

  constructor() {
    this.isOpen = true;
  }

  toggle = () => {
    this.isOpen = !this.isOpen;
    this.update();
  };

  update = () => {
    const header = document.getElementById("header-text") as HTMLElement;
    header.style.scale = this.isOpen ? "1" : "0";

    const container = document.getElementById("container") as HTMLElement;
    container.style.width = this.isOpen ? "16rem" : "75px";

    const toggle = document.getElementById("toggle") as HTMLElement;
    toggle.style.right = this.isOpen ? "0.75rem" : "1.75rem";
  };

  start = () => {
    this.listeners();
    this.attach();
  };

  listeners = () => {
    window.addEventListener("DOMContentLoaded", () => {
      this.update();
    });
  };

  attach = () => {
    (window as any).navigation = this;
  };
}

const navigation = new Navigation();
navigation.start();
