const yesBtn = document.getElementById("yes");
const noBtn  = document.getElementById("no");
const text   = document.getElementById("text");
const confettiBox = document.getElementById("confetti");

function rand(min, max){ return Math.random() * (max - min) + min; }

function moveNoButton(){
  const card = document.querySelector(".card");
  const rect = card.getBoundingClientRect();

  // حدود الحركة داخل الكارت
  const padding = 20;
  const x = rand(padding, rect.width - noBtn.offsetWidth - padding);
  const y = rand(120, rect.height - noBtn.offsetHeight - padding);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;
}

function popConfetti(){
  for(let i=0;i<80;i++){
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = rand(0, 100) + "%";
    c.style.background = `hsl(${Math.floor(rand(0,360))} 90% 60%)`;
    c.style.animationDuration = rand(1.2, 2.2) + "s";
    c.style.transform = `translateY(0) rotate(${rand(0,180)}deg)`;
    confettiBox.appendChild(c);
    setTimeout(()=>c.remove(), 2400);
  }
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  text.innerHTML = "YAAAAY 💖💖💖<br/>You’re officially my Galentine! 🥰";
  popConfetti();
  yesBtn.disabled = true;
  noBtn.disabled = true;
  yesBtn.textContent = "Chosen ✅";
});


const card = document.querySelector(".card");
const no = document.getElementById("no");

function moveNo(){
  const rect = card.getBoundingClientRect();
  const btns = document.querySelector(".btns").getBoundingClientRect();

  const x = Math.random() * (btns.width - noBtn.offsetWidth);
  const y = Math.random() * 40; // حركة خفيفة

  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNo);
