
$('.owl-carousel2').owlCarousel({
    margin:0,
    autoWidth:true,
    items:1
})

$('.owl-carousel').owlCarousel({
    margin:80,
    autoWidth:true,
    items:1
})
function charcountupdate(str) {
	var lng = str.length;
	document.getElementById("charcount").innerHTML = lng + ' out of 400 characters';
}