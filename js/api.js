// Api Classı
class API {
  // Kurucu metot
  constructor() {
    // baseUrl'i class yapısı içerisinde tekrar kullanabilmek için tanımlayalım
    this.baseUrl = "https://shazam.p.rapidapi.com";
    // Options objesini class yapısı içerisinde tanımla
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b0ec1d01e2msh25dde7d36fa77ddp125197jsn63edfed982ba",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };
  }
  // Popüler müzikleri alacak fonsiyon
  async getPopularMusics() {
    // Bu fonksiyondan beklentimiz api'dan popüler müzikleri alması ve return etmesi olacak.

    try {
      // Api istek at
      const response = await fetch(
        `${this.baseUrl}/search?term=inna`,
        this.options
      );
      // Api'den gelen response'u Js nesnesine çevir
      const data = await response.json();

      // müzik verisini formatla
      const formatted = data.tracks.hits.map((item) => item.track);

      // class'ın içerisine api'dan gelen müzkleri kaydet
      this.musics = formatted;

      // Elde edilen veriyi proje içeriisnde kullanacağımız formata getirmek için dönüştür.
     return formatted;
    } catch (error) {
      // Eğer Api isteği sırasında bir hata oluşursa bu durumda bir uyraı gönder
      alert("Şarkılar alınırken bir hata oluştu!!");

      // Hata durumunda boş bir dizi return et
      return [];
    }
  }

  // Aratılan şarkıları alacak fonsiyon
}

export default API;
