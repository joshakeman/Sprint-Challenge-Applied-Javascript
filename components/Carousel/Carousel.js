class Carousel {
    constructor(img) {
        this.img = img;
        console.log(this.img);
        this.imgList = document.querySelectorAll('.carouselImg');
        console.log(this.imgList);
        
        
        
    }


}


let carousel = document.querySelectorAll('.carouselImg').forEach( function(img) {
    return new Carousel(img);
});
