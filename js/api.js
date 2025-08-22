// Api Classı
class API {
    // Kurucu metot
    constructor () {
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
getPopularMusics () {
    // Api istek at
   const response = fetch ("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US", this.options);

   console.log(response);
}
    // Aratılan şarkıları alacak fonsiyon
}

export default API;
