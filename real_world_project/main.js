let humburMenu = document.querySelector('.humburger_icon');
let menuInfo = document.querySelector('.menu_info');

humburMenu.addEventListener('click',() => {
    
    menuInfo.classList.toggle('active');
})





// slider
// shame this code :') i'm so lazy

let sliderMain  = document.querySelector('.slider_main');

    let preLeft = document.querySelector('.left_direction');
    let nxtLeft = document.querySelector('.right_direction');

let nxtofIdx = 0;
    nxtLeft.addEventListener('click',() => {
        nxtofIdx++;
       
        if (nxtofIdx == 1) {
            sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/slider2.jpg)";
        } else if (nxtofIdx == 2) {
            sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/slider3.jpg)";
        } else if (nxtofIdx == 3) {
            nxtofIdx = 0;
            sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/slider1.jpg)";
        }
        
       
    })
    preLeft.addEventListener('click',() => {
        nxtofIdx--;
        if(nxtofIdx < 0) {
            sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/slider3.jpg)";
            nxtofIdx = 2;
        }else if (nxtofIdx == 1){
             sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/slider2.jpg)";
        }else if(nxtofIdx == 0){
            sliderMain.style.backgroundImage = "url(file:///C:/Users/ojt%20project/real_world_project/slider1.jpg)";
        }
    })

