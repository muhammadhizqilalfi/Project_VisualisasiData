// Handle card clicks
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const link = this.querySelector('a');
        if (link) {
            link.click();
        }
    });
  });
  
  // Event listeners for visualization links
  document.getElementById('Skenario1-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Korelasi Faktor Depresi Mahasiswa');
  });


  document.getElementById('Skenario2-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Durasi Tidur vs Presentase Depresi');
  });
  
  document.getElementById('Skenario3-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Faktor Sosial vs rata-rata Depresi');
  });
  
  document.getElementById('gender-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Perbandingan Gejala Berdasarkan Gender');
  });
  
  document.getElementById('risiko-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Pengaruh Alkohol terhadap Kesehatan Paru');
  });

  document.getElementById('Skenario6-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Pengaruh Alkohol terhadap Kesehatan Paru');
  });

  document.getElementById('alkohol-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Pengaruh Alkohol terhadap Kesehatan Paru');
  });

  document.getElementById('Skenario8-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Pengaruh Alkohol terhadap Kesehatan Paru');
  });

  document.getElementById('alkohol-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Pengaruh Alkohol terhadap Kesehatan Paru');
  });

  document.getElementById('alkohol-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Membuka visualisasi Pengaruh Alkohol terhadap Kesehatan Paru');
  });

  // Tombol kembali dari halaman visualisasi ke dashboard
const backButton = document.getElementById("back-button");
if (backButton) {
  backButton.addEventListener("click", () => {
    window.location.href = "Dashboard.html";
  });
}