// Ui işlemleri için oluşturulan UI classı
class UI {
  // Kurucu metod
  constructor() {
    // Html'den Js'e elemanları çekme
    this.musicList = document.querySelector("music-list");
  }

  // Şarkı kartlarını renderlayacak fonksiyon
  renderCard(songs) {
    //Bu fonksiyondan beklentimiz api'dan alınan her şarkı elemanı için arayüze bir şarkı kartı render etmesi

    // musicList'in html içeriği sıfırla
    this.musicList.innerHTML = "";

    // Parametre olarak verilen songs'u dön ve içerisindeki her şarkı elemanı için bir card html'i oluştur

    songs.forEach((song) => {
      // Bir tane card elemanı oluştur
      const card = document.createElement("div");

      // Oluşturulan Card elemanına "card" classı ekle
      // card.classList.add("card");
      card.className = "card";
      // Oluşturulan,classı belirlenen card elemanın Html içeriğini belirle
      card.innerHTML = `<figure>
              
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e5/4a/26/e54a26c4-fcce-b763-bea5-901a821ddb49/859720717961_cover.jpg/400x400cc.jpg"
                  alt="music-image"
                />
             
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

             
              <div class="music-info">
                <h4>Rumors</h4>
                <h4>NEFFEX</h4>
              </div>`;

      // Oluşturulan, class eklemesi yapılan ve html içeriği belirlenen card'ları arayüze ekle
  this.musicList.appendChild(card);
      console.log(card);
    });
  }
}
export default UI;
