// Inisialisasi semua swiper
const swipers = document.querySelectorAll('.mySwiper');
swipers.forEach(swiperElement => {
  new Swiper(swiperElement, {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: swiperElement.querySelector('.swiper-button-next'),
      prevEl: swiperElement.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: swiperElement.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});

// Modal Gambar
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const slideImages = document.querySelectorAll('.slide-images img'); // Ambil semua gambar

// Menambahkan event listener pada gambar
slideImages.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";  // Menampilkan modal
    modalImg.src = this.src;       // Menampilkan gambar yang diklik di modal
  });
});

// Menutup modal saat tombol close diklik
closeBtn.onclick = function() { 
  modal.style.display = "none";    
}

// Menutup modal saat area luar modal diklik
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
