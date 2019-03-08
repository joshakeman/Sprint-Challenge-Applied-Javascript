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

        this.leftButton = document.querySelector('.left-button');
        this.leftButton.addEventListener('click', (e) => {
            this.clickLeft();
        });
    }
    
    clickRight() {
        this.imgList.forEach( function(img) {
            img.style.display = 'none';
        });
        
        console.log(this.currentIndex);
        if (this.currentIndex + 1 <this.imgList.length) {
            this.currentIndex++;
        } else {
            this.currentIndex = this.currentIndex;
        }
        console.log(this.currentIndex);
        console.log(this.currentIndex != undefined);

        this.imgList[this.currentIndex].style.display = 'block';
    }

    clickLeft() {
        this.imgList.forEach( function(img) {
            img.style.display = 'none';
        });

        console.log(this.currentIndex);
        if (this.currentIndex > 0) {
            this.currentIndex--
        } else {
            this.currentIndex = this.currentIndex;
        }
        console.log(this.currentIndex);

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
