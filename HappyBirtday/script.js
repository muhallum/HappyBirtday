/* ==========================================================================
   HAPPY BIRTHDAY NAJWA RAHMADANIA NURFADLILAH - INTERACTIVE SCRIPT
   ========================================================================== */

// --- DATA CONFIGURATION ---
const DEFAULT_PHOTOS = [
    {
        url: "images/najwa1_wisuda.jpg",
        title: "Princess Wisuda 🎓✨",
        date: "Momen Kebanggaan",
        badge: "✨ Cantik Banget",
        sticker: "👑",
        desc: "Senyuman bahagia Najwa saat momen wisuda! Selalu bangga sama semua pencapaian dan kerja kerasmu sayang. 💕"
    },
    {
        url: "images/najwa2_bioskop.jpg",
        title: "Nonton Cinema Date 🎬🍿",
        date: "Date Time Favorit",
        badge: "👩‍❤️‍👨 Mirror Selfie",
        sticker: "🍿",
        desc: "Momen nunggu film bioskop bareng, selalu seru dan penuh canda tawa sama Najwa! 🥰"
    },
    {
        url: "images/najwa3_almamater.jpg",
        title: "Kelakuan Cute & Gemes 😚",
        date: "Kampus Life",
        badge: "🌸 Cutest Expression",
        sticker: "🎀",
        desc: "Ekspresi pipi cemberut cute ala Najwa yang selalu berhasil bikin gemes setiap hari! 💕"
    },
    {
        url: "images/najwa4_bunga.jpg",
        title: "Bunga Spesial Untuk Najwa 🌹💐",
        date: "Romantic Day",
        badge: "💖 Flowers for Princess",
        sticker: "🌹",
        desc: "Bunga mawar cantik untuk wanita paling cantik dan paling berharga di hidupku. 💕"
    },
    {
        url: "images/najwa5_makan.jpg",
        title: "Kulineran & Snack Time 🧀😋",
        date: "Jajan Date",
        badge: "🍓 Foodie Queen",
        sticker: "🌭",
        desc: "Momen Najwa ketagihan makan corndog keju, lucu banget kalau lagi menikmati makanan favoritnya! 😋"
    }
];

const LETTER_TEXT_INDONESIA = `Selamat Ulang Tahun yang ke-21 untuk wanita paling spesial & paling aku sayangi, Najwa Rahmadania Nurfadlilah! 🌸✨

Hari ini, tanggal 5 Oktober 2026, adalah hari di mana dunia menjadi lebih indah karena kehadiranmu. Aku sangat bersyukur dan bahagia bisa mendampingi serta melihatmu tumbuh menjadi sosok yang begitu luar biasa, baik hati, manis, dan selalu mengagumkan.

Terima kasih ya sayang, sudah menjadi tempat terbaikku untuk pulang, pendengar yang selalu sabar, dan alasan di balik senyumanku setiap hari. Di usiamu yang baru ini, aku berdoa semoga Najwa selalu diberikan kesehatan, kebahagiaan yang berlimpah, kemudahan dalam setiap impianmu, dan selalu dikelilingi oleh hal-hal baik.

Ingat ya, apapun yang terjadi nanti, aku akan selalu ada di sampingmu untuk mendukungmu, memelukmu, dan mencintaimu selalu.

Happy Birthday, My Princess Najwa! 💕🎂🎉`;

// --- STATE MANAGEMENT ---
let isMusicPlaying = false;
let candlesExtinguishedCount = 0;
let photosData = [...DEFAULT_PHOTOS];
let typewriterStarted = false;

// --- DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initFloatingBg();
    initCountdown();
    initMusicPlayer();
    initGallery();
    initSpeedControls();

    // Event listeners for Letter Modal
    const envelope = document.getElementById('envelopeBtn');
    if (envelope) {
        envelope.addEventListener('click', openLetterModal);
    }

    const closeBtn = document.getElementById('closeLetterBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLetterModal);
    }
});

// --- FLOATING BACKGROUND GENERATOR ---
function initFloatingBg() {
    const bgContainer = document.getElementById('floatingBg');
    const items = ['💖', '🌸', '🍓', '✨', '🧸', '🎀', '🎈', '💕'];
    
    for (let i = 0; i < 20; i++) {
        const span = document.createElement('span');
        span.className = 'heart-particle';
        span.innerText = items[Math.floor(Math.random() * items.length)];
        span.style.left = `${Math.random() * 100}vw`;
        span.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
        span.style.animationDuration = `${Math.random() * 6 + 6}s`;
        span.style.animationDelay = `${Math.random() * 5}s`;
        bgContainer.appendChild(span);
    }
}

// --- COUNTDOWN TIMER LOGIC ---
function initCountdown() {
    // Target: 5 October 2026 00:00:00
    const targetDate = new Date('2026-10-05T00:00:00+07:00').getTime();
    
    function updateTimer() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            
            const partyMsg = document.getElementById('partyReadyMsg');
            if (partyMsg) partyMsg.classList.remove('hidden');
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);

    // Celebrate Now Button
    document.getElementById('celebrateNowBtn').addEventListener('click', () => {
        triggerMassiveConfetti();
        playCuteChime();
        const cakeSec = document.getElementById('cakeSection');
        if (cakeSec) {
            cakeSec.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// --- MUSIC PLAYER & SYNTHESIZER ---
function initMusicPlayer() {
    const musicBtn = document.getElementById('musicBtn');
    const audio = document.getElementById('bgMusic');

    musicBtn.addEventListener('click', () => {
        if (!isMusicPlaying) {
            audio.play().then(() => {
                isMusicPlaying = true;
                musicBtn.classList.add('playing');
                musicBtn.querySelector('.music-text').innerText = 'Pause Sound 🎵';
            }).catch(err => {
                startSynthMelody();
                isMusicPlaying = true;
                musicBtn.classList.add('playing');
                musicBtn.querySelector('.music-text').innerText = 'Melody Playing 🎶';
            });
        } else {
            audio.pause();
            isMusicPlaying = false;
            musicBtn.classList.remove('playing');
            musicBtn.querySelector('.music-text').innerText = 'Play Sound 🎵';
        }
    });
}

function startSynthMelody() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        
        const notes = [
            261.63, 261.63, 293.66, 261.63, 349.23, 329.63,
            261.63, 261.63, 293.66, 261.63, 392.00, 349.23
        ];
        
        let noteIdx = 0;
        setInterval(() => {
            if (!isMusicPlaying) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(notes[noteIdx], ctx.currentTime);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
            noteIdx = (noteIdx + 1) % notes.length;
        }, 450);
    } catch(e) {
        console.log("Audio synth not supported");
    }
}

function playCuteChime() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
    } catch(e){}
}

// --- CANDLE BLOWING & CAKE INTERACTION ---
function extinguishCandle(candleId) {
    const candle = document.getElementById(candleId);
    if (candle && !candle.classList.contains('extinguished')) {
        candle.classList.add('extinguished');
        candlesExtinguishedCount++;
        playCuteChime();
        triggerMiniConfetti();

        if (candlesExtinguishedCount >= 3) {
            onAllCandlesBlown();
        }
    }
}

document.getElementById('blowCandleBtn').addEventListener('click', () => {
    ['candle1', 'candle2', 'candle3'].forEach(id => extinguishCandle(id));
});

function onAllCandlesBlown() {
    triggerMassiveConfetti();
    document.getElementById('wishPrompt').innerHTML = `
        <span style="color: #ff3b75; font-size: 1.2rem; font-weight: 700;">
            🎉 YAAAY! Semua lilin sudah ditiup! Semoga semua doa Najwa terkabul! 💕✨
        </span>
    `;
}

// --- CONFETTI EFFECTS ---
function triggerMiniConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#ff75a0', '#ff3b75', '#ffd700', '#ffffff']
        });
    }
}

function triggerMassiveConfetti() {
    if (typeof confetti === 'function') {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1500 };

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }
            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// --- MOVING PHOTO GALLERY TRACK ---
function initGallery() {
    renderGalleryTrack();
}

function renderGalleryTrack() {
    const track = document.getElementById('galleryTrack');
    if (!track) return;

    track.innerHTML = '';
    const fullList = [...photosData, ...photosData];

    fullList.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'polaroid-card';
        card.onclick = () => openPhotoModal(index % photosData.length);

        card.innerHTML = `
            <div class="pin">📌</div>
            <div class="polaroid-img-wrapper">
                <img src="${item.url}" alt="${item.title}" class="polaroid-img">
                <div class="img-badge">${item.badge}</div>
            </div>
            <div class="polaroid-caption">
                <span class="caption-title">${item.title}</span>
                <span class="caption-date">${item.date}</span>
            </div>
            <div class="card-sticker">${item.sticker}</div>
        `;
        track.appendChild(card);
    });
}

function initSpeedControls() {
    const btns = document.querySelectorAll('.speed-btn');
    const track = document.getElementById('galleryTrack');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const speed = btn.getAttribute('data-speed');
            if (speed === 'fast') {
                track.style.animationDuration = '12s';
            } else if (speed === 'slow') {
                track.style.animationDuration = '40s';
            } else {
                track.style.animationDuration = '22s';
            }
        });
    });

    document.getElementById('prevSlideBtn').addEventListener('click', () => {
        track.scrollBy({ left: -250, behavior: 'smooth' });
    });

    document.getElementById('nextSlideBtn').addEventListener('click', () => {
        track.scrollBy({ left: 250, behavior: 'smooth' });
    });
}

// --- PHOTO LIGHTBOX MODAL ---
function openPhotoModal(index) {
    const data = photosData[index];
    if (!data) return;

    document.getElementById('modalImg').src = data.url;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('photoModalOverlay').classList.remove('hidden');
}

function closePhotoModal() {
    document.getElementById('photoModalOverlay').classList.add('hidden');
}

// --- UPLOAD & CUSTOMIZE PHOTO MODAL ---
document.getElementById('openUploadModalBtn').addEventListener('click', () => {
    document.getElementById('uploadModalOverlay').classList.remove('hidden');
});

function closeUploadModal() {
    document.getElementById('uploadModalOverlay').classList.add('hidden');
}

function saveCustomPhoto() {
    const slotIdx = parseInt(document.getElementById('slotSelect').value);
    const urlInput = document.getElementById('photoUrlInput').value.trim();
    const captionInput = document.getElementById('photoCaptionInput').value.trim();
    const fileInput = document.getElementById('photoFileInput');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photosData[slotIdx].url = e.target.result;
            if (captionInput) photosData[slotIdx].title = captionInput;
            renderGalleryTrack();
            closeUploadModal();
            triggerMiniConfetti();
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else if (urlInput) {
        photosData[slotIdx].url = urlInput;
        if (captionInput) photosData[slotIdx].title = captionInput;
        renderGalleryTrack();
        closeUploadModal();
        triggerMiniConfetti();
    } else {
        alert("Silakan masukkan URL foto atau upload file foto!");
    }
}

// --- SECRET ENVELOPE & TYPEWRITER ---
function openLetterModal() {
    const envelope = document.getElementById('envelopeBtn');
    const modal = document.getElementById('letterModal');

    if (envelope) envelope.classList.add('open');
    playCuteChime();

    setTimeout(() => {
        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
        }
        document.body.style.overflow = 'hidden';
        if (!typewriterStarted) {
            startTypewriter();
            typewriterStarted = true;
        }
    }, 400);
}

function closeLetterModal(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    const envelope = document.getElementById('envelopeBtn');
    const modal = document.getElementById('letterModal');

    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
    if (envelope) {
        envelope.classList.remove('open');
    }
    document.body.style.overflow = '';
    playCuteChime();
}

function startTypewriter() {
    const target = document.getElementById('typewriterText');
    target.innerHTML = '';
    
    const paragraphs = LETTER_TEXT_INDONESIA.split('\n\n');
    let pIdx = 0;

    function typeParagraph() {
        if (pIdx >= paragraphs.length) return;
        
        const p = document.createElement('p');
        target.appendChild(p);
        
        let text = paragraphs[pIdx];
        let charIdx = 0;
        
        const interval = setInterval(() => {
            if (charIdx < text.length) {
                p.textContent += text.charAt(charIdx);
                charIdx++;
            } else {
                clearInterval(interval);
                pIdx++;
                setTimeout(typeParagraph, 200);
            }
        }, 22);
    }

    typeParagraph();
}

function triggerLoveShower() {
    triggerMassiveConfetti();
    for(let i=0; i<30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerText = '💖';
            heart.style.position = 'fixed';
            heart.style.left = `${Math.random()*90 + 5}vw`;
            heart.style.top = '100vh';
            heart.style.fontSize = '2rem';
            heart.style.zIndex = '9999';
            heart.style.transition = 'all 2.5s ease-out';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.transform = 'translateY(-110vh) scale(1.5)';
                heart.style.opacity = '0';
            }, 50);

            setTimeout(() => heart.remove(), 2600);
        }, i * 80);
    }
}

// --- UNWRAP SURPRISE GIFT BOX ---
function openGiftBox() {
    const giftBox = document.getElementById('giftBox');
    const vouchers = document.getElementById('vouchersContainer');

    if (!giftBox.classList.contains('opened')) {
        giftBox.classList.add('opened');
        playCuteChime();
        triggerMassiveConfetti();

        setTimeout(() => {
            vouchers.classList.remove('hidden');
            vouchers.scrollIntoView({ behavior: 'smooth' });
        }, 600);
    }
}

function claimVoucher(btn) {
    btn.classList.add('claimed');
    btn.innerText = 'Claimed! (Berhasil Diclaim 💕)';
    triggerMiniConfetti();
}

// --- WISH LANTERN RELEASE ---
function launchWishLantern() {
    const input = document.getElementById('userWishInput');
    const wishText = input.value.trim();

    if (!wishText) {
        alert("Tuliskan doa atau harapan manismu terlebih dahulu ya!");
        return;
    }

    const list = document.getElementById('lanternsList');
    const item = document.createElement('div');
    item.className = 'lantern-item';
    item.innerHTML = `
        <span style="font-size: 1.4rem;">🏮</span>
        <div>
            <strong>Harapan Terbang Ke Langit Bintang:</strong><br>
            "${wishText}"
        </div>
    `;

    list.prepend(item);
    input.value = '';
    triggerMassiveConfetti();

    // Floating lantern visual element
    const lantern = document.createElement('div');
    lantern.innerText = '🏮✨';
    lantern.style.position = 'fixed';
    lantern.style.left = `${Math.random()*80 + 10}vw`;
    lantern.style.bottom = '10px';
    lantern.style.fontSize = '2.5rem';
    lantern.style.zIndex = '999';
    lantern.style.transition = 'all 4s ease-out';
    document.body.appendChild(lantern);

    setTimeout(() => {
        lantern.style.transform = 'translateY(-110vh) scale(0.6)';
        lantern.style.opacity = '0';
    }, 50);

    setTimeout(() => lantern.remove(), 4200);
}
