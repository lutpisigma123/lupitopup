function openTopUp(gameName) {
    const amount = prompt(`Masukkan nominal untuk top-up di ${gameName}`);
    if (amount) {
      alert(`Top-up ${amount} di ${gameName} berhasil!`);
    }
  }
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih telah menghubungi kami!");
  });
  