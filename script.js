const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const btnRestart = document.getElementById("btnRestart");

const card = document.getElementById("card");
const final = document.getElementById("final");

const heroImg = document.getElementById("heroImg");
const title = document.getElementById("title");

const bgMusic = document.getElementById("bgMusic");
const finalVideo = document.getElementById("finalVideo");

const sadImages = [
  "images/sad-1.jpg",
  "images/sad-2.jpg",
  "images/sad-3.jpg",
  "images/sad-4.jpg"
];

const phrases = [
  "¿Estás seguraaaaa? 🥺",
  "Piénsalo otra vez...",
  "Me vas a romper el corazón 😔",
  "Prometo amarte mucho 💞",
  "AMAAAMEEEEEE 🥲",
  "Una oportunidad más 🙏",
  "Vas a poner triste a tu Snoopy 😢",
  "AHHHHH ME DUELEEE 😭",
  "ANDALEEEEEEEE 😵",
  "No haras que me rinda 😡"
];

let noCount = 0;
let yesScale = 1;

function clamp(n, min, max){
  return Math.max(min, Math.min(max, n));
}

// 🔒 Movimiento seguro (NO sale del viewport)
function moveNoSafe(){
  const bw = btnNo.offsetWidth;
  const bh = btnNo.offsetHeight;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const margin = 10;

  const x = Math.random() * (vw - bw - margin * 2) + margin;
  const y = Math.random() * (vh - bh - margin * 2) + margin;

  btnNo.style.position = "fixed";
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
  btnNo.style.zIndex = 9999;
}

btnNo.addEventListener("click", () => {
  title.textContent = phrases[noCount % phrases.length];
  heroImg.src = sadImages[noCount % sadImages.length];

  // 📈 SI crece SIEMPRE
  yesScale = clamp(yesScale + 0.25, 1, 3.5);
  btnYes.style.transform = `scale(${yesScale})`;

  moveNoSafe();
  noCount++;
});

btnYes.addEventListener("click", () => {
  card.classList.add("hidden");
  final.classList.remove("hidden");

  bgMusic.currentTime = 0;
  bgMusic.volume = 0.8;
  bgMusic.play().catch(()=>{});

  finalVideo.currentTime = 0;
  finalVideo.play().catch(()=>{});
});

btnRestart.addEventListener("click", () => {
  location.reload();
});
