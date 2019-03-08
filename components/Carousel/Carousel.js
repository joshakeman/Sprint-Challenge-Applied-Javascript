class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        console.log(this.carousel);
        this.imgList = document.querySelectorAll('.carousel img');
        console.log(this.imgList);
        // this.imgList.forEach( function (img) {
        //     return new CarouselPic;
        // });
        this.imgList[0].style.display = 'block';
        this.currentIndex = 0; 

        this.rightButton = document.querySelector('.right-button');
        this.rightButton.addEventListener('click', (e) => {
            this.clickRight();
        });
    }
    
    clickRight() {
        this.imgList.forEach( function(img) {
            img.style.display = 'none';
        });
        this.currentIndex ++
        this.imgList[this.currentIndex].style.display = 'block';
    }
}

// class CarouselPic {
//     constructor(img) {
//         this.img = img;

//     }
// }


let carousel = document.querySelectorAll('.carousel').forEach( function(carousel) {
    return new Carousel(carousel);
});
