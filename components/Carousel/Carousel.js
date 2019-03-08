class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        console.log(this.carousel);
        this.imgList = document.querySelectorAll('.carousel img');
        console.log(this.imgList[0]);
    }
    
}

class CarouselPic {

}


let carousel = document.querySelectorAll('.carousel').forEach( function(carousel) {
    return new Carousel(carousel);
});
