/**
 * Created by priyanshujain on 12/9/15.
 */
function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(22.3118839,114.2244025),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(22.3118839, 114.2244025)});
    infowindow = new google.maps.InfoWindow({content:"<b>Future Plaza</b><br/>111-113 How Ming Street, Kwun Tong,  Kowloon<br/>  Hong Kong" });
    google.maps.event.addListener(marker, "click", function(){
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);

}
google.maps.event.addDomListener(window, 'load', initialize);
