let humburMenu = document.querySelector('.humburger_icon');
let menuInfo = document.querySelector('.menu_info');

humburMenu.addEventListener('click',() => {
    
    menuInfo.classList.toggle('active');
})






    // i know this code like stupid :)  

        let sliderMain  = document.querySelector('.slider_main');

            let preLeft = document.querySelector('.left_direction');
            let nxtLeft = document.querySelector('.right_direction');

        let nxtofIdx = 0;
            nxtLeft.addEventListener('click',() => {
                nxtofIdx++;
            
                if (nxtofIdx == 1) {
                    sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/sliderImages/slider2.jpg)";
                } else if (nxtofIdx == 2) {
                    sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/sliderImages/slider3.jpg)";
                } else if (nxtofIdx == 3) {
                    nxtofIdx = 0;
                    sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/sliderImages/slider1.jpg)";
                }
                
            
            })
            preLeft.addEventListener('click',() => {
                nxtofIdx--;
                if(nxtofIdx < 0) {
                    sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/sliderImages/slider3.jpg)";
                    nxtofIdx = 2;
                }else if (nxtofIdx == 1){
                    sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/sliderImages/slider2.jpg)";
                }else if(nxtofIdx == 0){
                    sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/sliderImages/slider1.jpg)";
                }
            })




           

// that is another way to slide for slider ( but that doesn't work because code is  copied  from my another project ---> 

    // let image = document.querySelector('#image');
    // let preBtn = document.querySelector('.btn_one');
    // let nxtBtn = document.querySelector('.btn_two');
    // let slideOne = document.querySelector('.slide_one');
    // let slideTwo = document.querySelector('.slide_two')

    // let imgAry = ['./images/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjirō-hd-wallpaper-preview.jpg', './images/32f479dd5d8df20faffdd15f7f342bb7.jpg'];


    // slideOne.addEventListener('click', () => {
    //     image.src = imgAry[0];
    //     slideTwo.style.backgroundColor = "";
    //     slideOne.style.backgroundColor = "green";
    // })
    // slideTwo.addEventListener('click', () => {
    //     image.src = imgAry[1];
    //     slideOne.style.backgroundColor = "";
    //     slideTwo.style.backgroundColor = "green";
    // })

    // let value = 0;
    // preBtn.addEventListener('click', () => {
    //     value -= 1;

    //     if (value < 0) {
    //         value = imgAry.length - 1;
    //         image.src = imgAry[value];
    //         slideOne.style.backgroundColor = "";
    //         slideTwo.style.backgroundColor = "green";
    //     } else {
    //         image.src = imgAry[value];
    //         slideTwo.style.backgroundColor = "";
    //         slideOne.style.backgroundColor = "green";
    //     }
    // })


    // nxtBtn.addEventListener('click', () => {
    //     value += 1;
    //     if (value == imgAry.length) {
    //         value = 0;
    //         image.src = imgAry[value]
    //         slideTwo.style.backgroundColor = "";
    //         slideOne.style.backgroundColor = "green";
    //     } else {
    //         image.src = imgAry[value];
    //         slideOne.style.backgroundColor = "";
    //         slideTwo.style.backgroundColor = "green";
    //     }
    // })