import API from "./api.js";
import UI from "./ui.js";

// API clasının bir örneğini al
const api = new API();

// Uı classının da bir öreniğini al
const ui = new UI ();

// ! Sayfa yüklendiği 
document.addEventListener("DOMContentLoaded", async() => {
  // Loader'ı render et
  ui.renderLoader();

    // Api'e istek at ve popüler müzikleri al
   const songs = await api.getPopularMusics();
  

   // Api'den alınan şarkı verileri için birer card render edecek fonsksiyon
   ui.renderCard(songs);
});
