function iniciarMap(){
    var coord = {lat:-23.5566262 ,lng: -46.6588142};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

