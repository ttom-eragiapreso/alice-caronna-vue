import { reactive } from "vue";

export const store = reactive({
  navBarLinks: [
    {
      title: "Foto",
      current: false,
      id: "#ph",
    },
    // {
    //   title: "Sound Cloud",
    //   current: false,
    //   id: "#sc",
    // },
    {
      title: "Video",
      current: false,
      id: "#vi",
    },
    {
      title: "Coming Soon",
      current: false,
      id: "#cs",
    },
  ],
  socialsIcons: [
    {
      name: "Instagram",
      tag: "fa-brands fa-instagram",
      href: "https://www.instagram.com/alice_caronna/",
    },
    {
      name: "Spotify",
      tag: "fa-brands fa-spotify",
      href: "https://spotify.link/XRoz1ZTCODb",
    },
    {
      name: "YouTube",
      tag: "fa-brands fa-youtube",
      href: "https://www.youtube.com/@alicecaronna",
    },
  ],
  screenWidth: 0,
  bio: "Alice Caronna è una cantautrice che ama le persone e la condivisione. Dal cantautorato/pop sperimentale, le sue canzoni esistono per essere suonate dal vivo. Questo infatti è il suo unico carburante per andare avanti, scrivere canzoni per poi suonarle alle persone, per dare qualcosa a loro e ricevere altrettanto. Alice, che ha deciso di lasciare i suoi porti sicuri per dedicarsi e vivere solo con la musica, è stata finalista del tour music fest nel 2021, finalista di Lazio sound 2022, finalista della biennale MArteLive 2022, per poi vincere nel 2022 il premio Nuovo Imaie che le ha permesso di realizzare un tour in molte città italiane, finito a maggio 2023. Nello stesso anno Alice apre il concerto di Emma Nolde a Genova e quello di Galeffi a Roma sul palco del Villa Ada Festival. È decisamente un anno importante per lei; ha firmato con l’etichetta discografica Pioggia Rossa Dischi con la quale ha pubblicato, lo scorso 22 settembre, il suo secondo album “In piedi”, prodotto da Renato D’Amico (Postino, Emma Nolde, Ilaria) che ha poi presentato al Monk di Roma. Alice continua a scrivere ed è già pronta a produrre nuovi album. Ora che ho finito di scrivere questa faticosa bio in terza persona, solo per te, che sei arrivato fin qui, ti saluto: ciao ti voglio bene chiunque tu sia.",
  sliderImg: [
    {
      url: "/Media/WA-img/slider_8.jpg",
    },
    {
      url: "/Media/WA-img/slider_9.jpg",
    },
    {
      url: "/Media/WA-img/slider_1.jpg",
    },
    {
      url: "/Media/WA-img/slider_2.jpg",
    },
    {
      url: "/Media/WA-img/slider_3.jpg",
    },
    {
      url: "/Media/WA-img/slider_4.jpg",
    },
    {
      url: "/Media/WA-img/slider_6.jpg",
    },
    {
      url: "/Media/WA-img/slider_7.jpeg",
    },
  ],
  gigsVideos: [
    {
      url: "/Media/WA-videos/slider_video1.mp4",
    },
    {
      url: "/Media/WA-videos/slider_video2.mp4",
    },
  ],
  mvImgs: [
    {
      url: "/Media/MV-img/mv_5.jpg",
    },
    {
      url: "/Media/MV-img/mv_3.jpg",
    },
    {
      url: "/Media/MV-img/mv_4.jpg",
    },
    {
      url: "/Media/MV-img/mv_2.jpg",
    },
  ],
  mvVids: [
    {
      url: "/Media/MV-videos/Clip 1~1.mp4",
    },
    {
      url: "/Media/MV-videos/Clip 2~1.mp4",
    },
    {
      url: "/Media/MV-videos/Clip 3~1.mp4",
    },
  ],
});
