// Api Classı
class API {
  // Kurucu metot
  constructor() {
    // baseUrl'i class yapısı içerisinde tekrar kullanabilmek için tanımlayalım
    this.baseUrl = "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US";
    // Options objesini class yapısı içerisinde tanımla
   this.options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b0ec1d01e2msh25dde7d36fa77ddp125197jsn63edfed982ba',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

  }
  // Popüler müzikleri alacak fonsiyon
  async getPopularMusics() {
    // Api istek at
    const response = await fetch(
      "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US",
      this.options
    );
// Api'den gelen response'u Js nesnesine çevir
const data = await response.json();

// Elde edilen veriyi proje içeriisnde kullanacağımız formata getirmek için dönüştür.
const songs = data.tracks.hits.map((item) => item.track);
console.log(songs);
  }

  // Aratılan şarkıları alacak fonsiyon
}

export default API;
