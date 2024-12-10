// Inisialisasi indeks slide saat ini
let currentIndex = 0;

// Fungsi untuk memperbarui posisi slide
function updateSlide() {
    const slides = document.querySelector('.slides'); // Menyimpan referensi elemen kontainer slide
    // Menggeser slide ke kiri berdasarkan indeks saat ini
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Fungsi untuk menampilkan slide berikutnya
function nextSlide() {
    const slides = document.querySelectorAll('.slide'); // Menyimpan referensi semua elemen slide
    // Jika indeks saat ini belum mencapai slide terakhir, tambahkan 1 ke indeks
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Kembali ke slide pertama jika sudah mencapai slide terakhir
    }
    updateSlide(); // Memperbarui posisi slide
}

// Fungsi untuk menampilkan slide sebelumnya
function prevSlide() {
    const slides = document.querySelectorAll('.slide'); // Menyimpan referensi semua elemen slide
    // Jika indeks saat ini lebih dari 0, kurangi 1 dari indeks
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Kembali ke slide terakhir jika berada di slide pertama
    }
    updateSlide(); // Memperbarui posisi slide
}
