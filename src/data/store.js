import {reactive} from 'vue'

export const store = reactive({
  navBarLinks: [
    {
    title: 'Foto',
    current: false,
    id: '#ph'
  },
    {
    title: 'Sound Cloud',
    current: false,
    id: '#sc'
  },
    {
    title: 'Video',
    current: false,
    id: '#vi'
  },
    {
    title: 'Coming Soon',
    current: false,
    id: '#cs'
  },
],
  socialsIcons: [
    {
      name: 'Instagram',
      tag: 'fa-brands fa-instagram',
      href: 'https://www.instagram.com/alice_caronna/'
    },
    {
      name: 'Spotify',
      tag: 'fa-brands fa-spotify',
      href: 'https://open.spotify.com/artist/7HVDBDYW5E1F8togTVLmYF?si=sd7FDP_hRSCmiF4mR0lWIQ'
    },
    {
      name: 'YouTube',
      tag: 'fa-brands fa-youtube',
      href: 'https://www.youtube.com/@alicecaronna'
    },
  ],
  screenWidth: 0,
  bio : 'Alice Caronna è una cantautrice e Sound Designer di Roma. Nel 2018, poche settimane dopo essersi laureata in “Sound Design” allo IED di Roma, Alice vince il contest “Arderemo” che le ha permesso di suonare sul palco dell’Ardeforte in compagina di artisti come i Zen Circus, Gemello, Lucci, Giancane e altri. Il 12 marzo del 2019 ha pubblicato il suo primo Ep “Alba” su tutte le piattaforme digitali musicali, la cui presentazione ha fatto sold out nel famoso locale romano “Le Mura”. È stata ospite in varie realtà, come a “Sanremo On”, dove ha presentato il suo primo singolo; in Radio Rai 1, Radio Rock, Radio Centro Suono 101.5, Radio Radio 104.5 per interviste; in Piazza del Popolo e in Piazza Venezia durante la manifestazione a sostegno dell’ambiente “Friday for future”, dove ha suonato prima del discorso di Greta Thunberg ed è stata inoltre ospite presso radio SER Catalunya nella città di Barcellona. Nel gennaio del 2022 vince il primo Nuovo Imaie che le permetterà di realizzare a breve un tour in molte città italiane. Mentre si muove come organizzatrice di eventi e collaboratrice attiva per l’etichetta discografica Sono Music Group, Alice sta lavorando al suo primo album in compagnia del produttore Renato D’Amico (Postino, Emma Nolde, Ilaria).',
  sliderImg: [
    {
      url: '/Media/WA-img/soundcloud.jpeg'
    },
    {
      url: '/Media/WA-img/landing-photo.jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 09.19.33.jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 10.09.13.jpeg'
    },
    {
      url: '/Media/WA-img/AlterantiveLandingImg.jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 10.10.13 (1).jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 10.10.13.jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 10.10.15.jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 10.11.02 (2).jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 10.11.02 (3).jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 10.11.02.jpeg'
    },
    {
      url: '/Media/WA-img/WhatsApp Image 2022-10-11 at 10.11.03.jpeg'
    },
  ],
  gigsVideos: [
    {
      url: '/Media/WA-videos/WhatsApp Video 2022-10-11 at 18.03.07.mp4'
    },
    {
      url: '/Media/WA-videos/WhatsApp Video 2022-10-11 at 18.03.15.mp4'
    },
    {
      url: '/Media/WA-videos/WhatsApp Video 2022-10-11 at 18.03.23.mp4'
    },
    {
      url: '/Media/WA-videos/WhatsApp Video 2022-10-11 at 18.03.29.mp4'
    },
    {
      url: '/Media/WA-videos/WhatsApp Video 2022-10-11 at 18.03.36.mp4'
    },
  ],
  mvImgs: [
    {
      url: '/Media/MV-img/Still (3).jpg'
    },
    {
      url: '/Media/MV-img/Still (4).jpg'
    },
    {
      url: '/Media/MV-img/Still (6).jpg'
    },
  ],
  mvVids: [
    {
      url: '/Media/MV-videos/Clip 1~1.mp4'
    },
    {
      url: '/Media/MV-videos/Clip 2~1.mp4'
    },
    {
      url: '/Media/MV-videos/Clip 3~1.mp4'
    },
  ]
})