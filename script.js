// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Cari elemen-elemen di HTML
    const textElement = document.getElementById('type-text');
    const cursorElement = document.querySelector('.cursor');
    // Ubah selektor menjadi ID baru untuk pixel heart utama
    const mainPixelHeartElement = document.getElementById('main-pixel-heart'); 
    const startButton = document.querySelector('.btn-start');
    
    const textToType = "Hello, My Love!";
    let index = 0;
    
    // Fungsi untuk animasi mengetik
    function type() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 150); // Kecepatan ketik (ms)
        } else {
            // 1. Selesai ngetik, sembunyikan kursor
            cursorElement.style.display = 'none';
            
            // 2. Munculkan hati utama dengan animasi
            mainPixelHeartElement.style.visibility = 'visible';
            // Gunakan nama animasi baru
            mainPixelHeartElement.style.animation = 'popInHeart 0.5s forwards, beatHeart 1.5s infinite 0.5s';

            // 3. Munculkan tombol START
            setTimeout(() => {
                // Cek tampilan, 'block' untuk mobile, 'inline-block' untuk desktop
                const displayType = window.innerWidth <= 768 ? 'block' : 'inline-block';
                startButton.style.display = displayType;
                
                startButton.style.animationName = 'fadeInSlideUp, pulse-start';
                startButton.style.animationDuration = '0.5s, 1.5s';
                startButton.style.animationIterationCount = '1, infinite';
                startButton.style.animationDelay = '0s, 0.5s';
            }, 500); // Muncul 0.5 detik setelah hati
        }
    }
    
    // Mulai animasi setelah halaman siap
    setTimeout(type, 800); // Tunggu 0.8 detik
});