const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];



// Destrutturazione di createApp da Vue
const { createApp } = Vue;

// Creazione di un'app Vue
createApp({

  // Definizione dei dati iniziali dell'app
  data() {
    return {

      // Array di immagini con src, titolo e testo per il carosello
      images: [
        { src: "img/01.webp", title: "Marvel's Spiderman Miles Morale", text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man." },
        { src: "img/02.webp", title: "Ratchet & Clank: Rift Apart", text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality." },
        { src: "img/03.webp", title: "Fortnite", text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos." },
        { src: "img/04.webp", title: "Stray", text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city" },
        { src: "img/05.webp", title: "Marvel's Avengers", text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay." }
      ],
      // Indice iniziale per mostrare la prima immagine
      currentIndex: 0, 
      // Timer per l'autoplay, inizialmente null
      autoplayTimer: null 
    };
  },
  methods: {
    // Metodo per passare alla prossima immagine

    nextImage() {
      // Aggiornamento dell'indice corrente, ciclando attraverso l'array delle immagini
 
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      console.log(`Current Index: ${this.currentIndex}`);
    },
    // Metodo per tornare all'immagine precedente
    prevImage() {

      // Aggiornamento dell'indice corrente per andare indietro, gestendo il ciclo
     
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      console.log(`Current Index: ${this.currentIndex}`);
    },

    // Impostazione dell'autoplay
    setAutoplay() {

      // Inizio dell'autoplay con intervallo di 3000ms (3 secondi)
      this.autoplayTimer = setInterval(this.nextImage, 3000); 
    },
    // Fermare l'autoplay
    stopAutoplay() {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
      console.log("Autoplay stopped");
    },

     // Attivare o disattivare l'autoplay
    toggleAutoplay() {
      // Controllo dello stato dell'autoplay per decidere se fermarlo o avviarlo
    
      if (this.autoplayTimer) {
        this.stopAutoplay();
      } else {
        this.setAutoplay();
      }
    }
  },
  // Metodo di lifecycle 'mounted' viene eseguito quando il componente è montato nel DOM

  mounted() {
    this.setAutoplay(); // Inizia l'autoplay non appena l'app viene montata
    console.log("Component mounted and autoplay started");
  }
}).mount('#app');  // Montaggio dell'app Vue nel DOM nel div id="app"

