$(document).ready(function (){
    $(".image-silder").slick({
        slidesToShow: 4,
        infinite:true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><</button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'>></button>`,
        dots : false,
    })
})
