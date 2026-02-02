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
  const container = document.querySelector(".buttons");

  const cw = container.offsetWidth;
  const ch = container.offsetHeight;

  const bw = btnNo.offsetWidth;
  const bh = btnNo.offsetHeight;

  const padding = 10;

  const maxX = cw - bw - padding;
  const maxY = ch - bh - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btnNo.style.position = "absolute";
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
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


btnNo.style.position = "static";
