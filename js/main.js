const { createApp } = Vue;

createApp({
  data() {
    return {
      images: [
        { src: "img/01.webp", title: "Marvel's Spiderman Miles Morale", text: "Experience the rise of Miles Morales." },
        { src: "img/02.webp", title: "Ratchet & Clank: Rift Apart", text: "Go dimension-hopping with Ratchet and Clank." },
        { src: "img/03.webp", title: "Fortnite", text: "Grab all of your friends and drop into Epic Games Fortnite." },
        { src: "img/04.webp", title: "Stray", text: "Lost, injured and alone, a stray cat must untangle an ancient mystery." },
        { src: "img/05.webp", title: "Marvel's Avengers", text: "Marvel's Avengers is an epic, third-person action-adventure game." }
      ],
      currentIndex: 0,
      autoplayTimer: null,
      reverseOrder: false,
      autoplayInterval: 3000,
      isAutoplayRunning: true // Variabile per tracciare lo stato dell'autoplay
    };
  },
  methods: {
    nextImage() {
      if (this.reverseOrder) {
        this.prevImage();
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    setAutoplay() {
      this.autoplayTimer = setInterval(() => {
        this.nextImage();
      }, this.autoplayInterval);
      this.isAutoplayRunning = true; // Imposta l'autoplay come attivo
    },
    stopAutoplay() {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
      this.isAutoplayRunning = false; // Imposta l'autoplay come inattivo
    },
    toggleAutoplay() {
      if (this.isAutoplayRunning) {
        this.stopAutoplay(); // Se l'autoplay è attivo, fermalo
      } else {
        this.setAutoplay(); // Se è fermo, avvialo di nuovo
      }
    },
    toggleOrder() {
      this.stopAutoplay(); // Fermare l'autoplay quando si inverte l'ordine
      this.reverseOrder = !this.reverseOrder; // Invertire l'ordine
      if (!this.isAutoplayRunning) {
        this.setAutoplay(); // Riavviare l'autoplay dopo aver invertito l'ordine
      }
    }
  },
  mounted() {
    this.setAutoplay(); // Avviare l'autoplay al caricamento della pagina
  },
  beforeUnmount() {
    this.stopAutoplay(); // Fermare l'autoplay quando il componente viene smontato
  }
}).mount('#app');