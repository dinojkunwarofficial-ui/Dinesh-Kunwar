/* =========================================================
   js/data.js — ALL of your content lives here.
   Change the text between the quotes "like this". Keep the commas and brackets.
   You never need to open js/script.js.
   Nothing below is real information yet: replace every placeholder.
   ========================================================= */

// 1) BASIC DETAILS — hero, about, contact and footer
const SITE = {
   name: "Dinesh Kunwar",
  title: "Actor | Director | Producer | Model",
  intro: "Discover the journey, performances, and selected works of Dinesh Kunwar.",
  bio: [
    "Namaste, I’m Dinesh Kunwar, a model, actor, producer and director, and the owner of Diwash Films Production Pvt. Ltd. My journey began in 2013 as Chief Assistant Director on a pop song, where I learned how cameras, artists, shooting and production come together.",
    "In front of the camera, I have worked in music videos such as “Chiya Garam” and Shiva Pariyar’s “Sapana Ko Sansar”, acted in the TV serial “Hijo Gharma Kura Chaliyo”, played the lead in the web series “Ja Khalli Balli”, and appeared in the films “Rudra” (starring Nikhil Upreti), “Hirasat” and “Mero Aafno”. I also played as an actor in “Kumude Hindyo Hero Bann”, now in post-production.",
    "Behind the camera, I produced and directed the documentary “Ujeli” on child marriage and directed the Punjabi song “Killer Tere Looks” in Goa, India. I made “Sanskar” as its producer, director and actor, and it was screened in cinema halls. I then directed and acted in “Gyanashastra” alongside Rabindra Jha, Smarika Dhakal, Sameer Khan, Sushil Pokharel, Surbir Pandit, Naresh Paudyal and other established artists.",
    "For me, filmmaking is a dream, a struggle and a continuous journey of learning, and there are still many stories left to tell."
  ],

  email: "dineshkunwarofficial@gmail.com",          // e.g. "name@example.com"  ("" shows a placeholder)
  managerEmail: "dinojkunwarofficial@gmail.com",   // optional, same idea
  // Social links. Real addresses only. Example:
  // { label: "Instagram", url: "https://www.instagram.com/username" },
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/dineshkunwarofficial" },
    { label: "Facebook", url: "https://www.facebook.com/dinesh.kunwar.9887" },
    { label: "YouTube", url: "https://www.youtube.com/@dineshkunwarvlogs" },
  ],

  showreel: "",       // YouTube video ID: the part after "v=" in the link
  showHighlights: false, // true = show credit counts (worked out from PRODUCTIONS). Use only when your list is complete.
  yearsActive: ""     // optional, e.g. "20+". Only if verified; shows when showHighlights is true.
};

// 2) PRODUCTIONS — movies, TV, music videos, anything.
// To add one: copy a whole { ... } line, paste it below, change the values.
//   id         must be unique (letters, numbers, dashes)
//   category   spell it the same way every time. Each different category becomes a filter button:
//              "Movie", "Television", "Music Video", "Short Film", "Other"
//   optional   role, director, description, poster, externalUrl: leave "" if unknown
//   poster     put the image in assets/posters/ and write its path
//   sample     true = marks a PLACEHOLDER. Delete this part (and the sample lines) for real credits.
const PRODUCTIONS = [
  { id: "Gyanshastra", title: "Gyanshastra", category: "Movie", year: 2025, role: "Actor, Director, Producer", director: "Dinesh Kunwar", description: "A Nepali feature film directed by Dinesh Kunwar, who also acts in it. The cast includes Rabindra Jha, Smarika Dhakal, Sameer Khan, Naresh Paudyal, Surbir Pandit (Dari Budha), Narendra Thapa and Sushil Pokharel.", poster: "assets/posters/Gyanshastra.jpeg", externalUrl: "", sample: false },
  { id: "Sanskar", title: "Sanskar", category: "Movie", year: 2024, role: "Actor, Director, Producer", director: "Dinesh Kunwar", description: "A Nepali feature film created by Dinesh Kunwar, who produced and directed it and also acts in it. Set in a village, it explores the importance of education and the misuse of power by the wealthy. It was screened in cinema halls.", poster: "assets/posters/Sanskar.png", externalUrl: "", sample: false },
  {id: "Kumude-Hindyo-Hero-Bann", title: "Kumude Hindyo Hero Banna", category: "Movie", year: 2026, role: "Actor", director: "janaki Pant", description: "A Nepali feature film acted by Dinesh Kunwar. The story revolves around Kumude, a young woman aspiring to become a hero in the film industry, and the challenges she faces along the way.", poster: "assets/posters/Kumude.jpeg", externalUrl: "", sample: false },
  {id: "Rudra", title: "Rudra", category: "Movie", year: 2023, role: "Actor", director: "Nikhil Upreti", description: "A Nepali feature film starring Nikhil Upreti, with Dinesh Kunwar in a supporting role. The film follows the journey of Rudra, a man seeking justice and redemption.", poster: "assets/posters/Rudra.png", externalUrl: "", sample: false },
  {id: "ujeli", title: "Ujeli", category: "Movie", year: 2021, role: "Director, Producer", director: "Dinesh Kunwar", description: "A documentary directed and produced by Dinesh Kunwar, focusing on the issue of child marriage in Nepal. It aims to raise awareness and promote social change.", poster: "assets/posters/Ujeli.jpeg", externalUrl: "", sample: false },
  {id: "Kadaknath", title: "Kadaknath", category: "Tv Show", year: 2022, role: "Actor", director: "Bimal Poudel", description: "A Tv show acted by Dinesh Kunwar. The story revolves around the life of a man named Kadaknath and his struggles.", poster: "assets/posters/Kadaknath.png", externalUrl: "", sample: false },
  {id: "Ja-Khalli-Balli", title: "Ja Khalli Balli", category: "Tv Show", year: 2023, role: "Actor", director: "Makten Kalu", description: "A web series acted by Dinesh Kunwar. The series follows the adventures of a group of friends and their humorous escapades.", poster: "assets/posters/Ja khalli balli.png", externalUrl: "", sample: false },
 {id: "Hijo-Gharma-Kura-Chalyo", title: "Hijo Gharma Kura Chalyo", category: "Tv Show", year: 2021, role: "Actor", director: "Kishor Chaudhary", description: "A Tv show acted by Dinesh Kunwar. The show explores the dynamics of family relationships and societal issues.", poster: "assets/posters/Hijo Gharma Kura Chalyo.png", externalUrl: "", sample: false },
 
 {id: "Sapana-Ko-Sansar", title: "Sapana Ko Sansar", category: "Music Video", role: "Actor", director: "Dinesh Kunwar", description: "A music video acted by Dinesh Kunwar. The video features a romantic storyline set against the backdrop of a picturesque location.", poster: "assets/posters/mv/sapanako sansarma.jpeg", externalUrl: "", sample: false },
 {id: "aadikhole maya", title: "aadikhole maya", category: "Music Video", role: "Actor", director: "", description: "", poster: "assets/posters/mv/aadikhole maya.jpeg", externalUrl: "", sample: false },
 {id: "killer tere looks", title: "killer tere looks", category: "Music Video", role: "Actor, Director", director: "Dinesh Kunwar", description: "A Punjabi music video directed and acted by Dinesh Kunwar. The video showcases the artist's captivating performance and stylish looks.", poster: "assets/posters/mv/killer tere looks.jpeg", externalUrl: "", sample: false },
 {id: "Chillo car nahera maya", title: "Chillo car nahera maya", category: "Music Video", role: "Actor", director: "Dinesh Kunwar", description: "A music video acted by Dinesh Kunwar. The video explores themes of love and relationships in a contemporary setting.", poster: "assets/posters/mv/Chillo car nahera maya.jpeg", externalUrl: "", sample: false },
 {id: "espaliko teej", title: "espaliko teej", category: "Music Video",role: "Actor", director: "", description: "A music video acted by Dinesh Kunwar. The video celebrates the cultural significance of the Teej festival and its traditions.", poster: "assets/posters/mv/espaliko teej.jpeg", externalUrl: "", sample: false },
 {id:"gajal lagauda", title:"gajal lagauda", category: "Music Video", role: "Actor", director: "", description: "A music video acted by Dinesh Kunwar. The video features a lively and energetic performance, highlighting the artist's charisma.", poster: "assets/posters/mv/gajal lagauda.jpeg", externalUrl: "", sample: false },
 {id: "hypnotize", title: "hypnotize", category: "Music Video", role: "Actor", director: "Dinesh Kunwar", description: "A music video acted by Dinesh Kunwar. The video presents a captivating narrative with mesmerizing visuals and choreography.", poster: "assets/posters/mv/hypnotize.jpeg", externalUrl: "", sample: false },
 {id:"kasto nasha", title:"kasto nasha", category: "Music Video", role: "Actor", director: "", description: "A music video acted by Dinesh Kunwar. The video explores the intoxicating effects of love and desire through a compelling storyline.", poster: "assets/posters/mv/kastonasha.jpeg", externalUrl: "", sample: false },
 {id: "kati sundar ful", title: "kati sundar ful", category: "Music Video", role: "Actor", director: "", description: "A music video acted by Dinesh Kunwar. The video showcases the beauty of nature and the emotions associated with love and longing.", poster: "assets/posters/mv/kati sundar ful.jpeg", externalUrl: "", sample: false },
 {id: "nadekhau sapana", title: "nadekhau sapana", category: "Music Video", role: "Actor", director: "", description: "A music video acted by Dinesh Kunwar. The video delves into the theme of unfulfilled dreams and the pursuit of aspirations.", poster: "assets/posters/mv/nadekhau sapana.jpeg", externalUrl: "", sample: false },
 {id:"salko paat", title:"salko paat", category: "Music Video", role: "Actor, Director", director: "Dinesh Kunwar", description: "A music video acted by Dinesh Kunwar. The video captures the essence of love and longing through a poignant narrative.", poster: "assets/posters/mv/salko paat.jpeg", externalUrl: "", sample: false },
 {id: "khusi rahos timro jiwan", title: "khusi rahos timro jiwan", category: "Music Video", role: "Actor", director: "", description: "A music video acted by Dinesh Kunwar. The video conveys a heartfelt message of happiness and well-being in relationships.", poster: "assets/posters/mv/khusi rahos timro jiwan.jpeg", externalUrl: "", sample: false },
 {id: "bidesh ko pida", title:"bidesh ko pida", category: "Music Video", role: "Actor", director: "Dinesh Kunwar", description: "A music video acted by Dinesh Kunwar. The video portrays the emotional struggles of individuals living away from their homeland.", poster: "assets/posters/mv/bidesh ko pida.jpeg", externalUrl: "", sample: false },
 {id: "tadi parsa khurkhure bhandara", title: "tadi parsa khurkhure bhandara", category: "Music Video", role: "Actor, Director", director: "Dinesh Kunwar", description: "A music video acted by Dinesh Kunwar. The video presents a lively and entertaining storyline set in a festive atmosphere.", poster: "assets/posters/mv/tadi parsa khurkhure bhandara.jpeg", externalUrl: "", sample: false },
 {id: "Chiya-Garam", title: "Chiya Garam", category: "Music Video", role: "Actor", director: "", description: "A music video acted by Dinesh Kunwar. The video features a romantic storyline set against the backdrop of a picturesque location.", poster: "assets/posters/mv/chaye garam.jpeg", externalUrl: "", sample: false },
];

// 3) GALLERY — save photos in assets/images/gallery/, then add one line each.
//   alt     describe the photo (helps blind visitors and Google)
//   ratio   the photo's shape: "4/5" tall, "3/2" wide, "1/1" square
const GALLERY = [
  { src: "assets/images/gallery/gallery1.jpeg", alt: "Describe photo 1", ratio: "4/5" },
  { src: "assets/images/gallery/gallery2.jpeg", alt: "Describe photo 2", ratio: "4/5" },
  { src: "assets/images/gallery/gallery3.jpeg", alt: "Describe photo 3", ratio: "4/5" }
];

// 4) VIDEOS — official YouTube videos only. id = the part after "v=" in the link.
const VIDEOS = [
  { id: "w2DpscSOxtQ", title: "Official Sanskar Trailer", type: "Trailer" }
];

// 5) AWARDS — leave empty to hide the section. Verified awards only.
const AWARDS = [
  // { name: "Award name", org: "Organisation", year: 2020, work: "Production", url: "https://..." },
];

// 6) PRESS — leave empty to hide the section. Real articles and interviews only.
const PRESS = [
  // { title: "Interview title", source: "Publication", date: "2024-05", url: "https://..." },
];
