// =========================
// Menampilkan Jam Real-Time
// =========================
function updateClock() {
    const clockElement = document.getElementById("real-time-clock");
    if (clockElement) {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        clockElement.innerText = now.toLocaleDateString('id-ID', options);
    }
}
setInterval(updateClock, 1000);

// ==============================
// Highlight Menu yang Sedang Aktif
// ==============================
function setupMenuHighlight() {
    const menuItems = document.querySelectorAll("header ul li a");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(link => link.parentElement.classList.remove("active"));
            this.parentElement.classList.add("active");
        });
    });
}
setupMenuHighlight();

// =========================
// Validasi Form (Opsional)
// =========================
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        const inputs = form.querySelectorAll("input, textarea, select");
        let valid = true;

        inputs.forEach(input => {
            if (input.required && input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "1px solid #ccc";
            }
        });

        if (!valid) {
            alert("Harap isi semua kolom yang wajib diisi!");
        }

        return valid;
    }
    return false;
}

// ==============================
// Galeri Responsif (Hover Slider)
// ==============================
function setupGalleryHoverEffect() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach(item => {
        item.style.flex = "1";
        item.addEventListener("mouseenter", () => {
            galleryItems.forEach(i => i.style.flex = "1");
            item.style.flex = "2";
        });
        item.addEventListener("mouseleave", () => {
            galleryItems.forEach(i => i.style.flex = "1");
        });
    });
}
setupGalleryHoverEffect();

// ==========================
// Toggle Menu untuk Mobile
// ==========================
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

function toggleMenu() {
    if (menu) {
        menu.classList.toggle('active');
        console.log("Menu toggle clicked!");
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

// =====================================
// Penyesuaian Tampilan untuk Perangkat Mobile
// =====================================
function adjustForMobile() {
    const width = window.innerWidth;
    const menu = document.querySelector("header ul");

    if (menu) {
        if (width > 768) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    }
}
window.addEventListener("resize", adjustForMobile);
adjustForMobile();
