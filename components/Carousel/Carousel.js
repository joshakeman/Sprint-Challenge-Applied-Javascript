class Carousel {
    constructor(img, currentIndex) {
        this.img = img;
        // console.log(this.img);
        this.currentIndex = currentIndex;
        // console.log(this.currentIndex);
        this.imgList = document.querySelectorAll('.carousel img');
        console.log(this.imgList);
        
        // this.currentImg = this.ImgList[currentIndex];
        
        if (this.currentIndex == 0) {
            this.img.style.display = 'block';
        }

        this.rightButton = document.querySelector('.right-button');
        this.rightButton.addEventListener('click', (event) => {
            this.show();
        });
    }
    show () {
        this.img.style.display = 'none';
        if (currentIndex+1 != undefined) {
            console.log(this.imgList[this.currentIndex+1]);
        }
    }
}

class CarouselPic {

}

currentIndex = -1;
let carousel = document.querySelectorAll('.carousel img').forEach( function(img) {
    currentIndex ++
    return new Carousel(img, currentIndex);
});
