let educationExperienceElement;

$(document).ready(function () {
    educationExperienceElement = $('#education-experience');
    educationExperienceElement.css('visibility', 'hidden');
});

$(window).scroll(function (){
    const scrollTopPos = $(this).scrollTop();
    const windowHeight = $(this).height();
    const scrollBottomPos = scrollTopPos + windowHeight;

    const educationExperienceOffsetTop = educationExperienceElement.position().top;
    
    if (scrollBottomPos >= educationExperienceOffsetTop) {
        educationExperienceElement.css('visibility', 'visible');
        educationExperienceElement.addClass("animate__animated animate__fadeInUpBig animate__delay-1s");
    }
});

let navbarElement;
$(document).ready(function(){
    navbarElement = $(".bg");
    console.log(navbarElement)

});


$(window).scroll(function (){
    const navbarscrollTopPos = $(this).scrollTop();
    const navbarwindowHeight = $(this).height();
    const navbarscrollBottomPos = scrollTopPos + windowHeight;

    const navbarOffsetTop = educationExperienceElement.position().top;
    
    if (navbarscrollBottomPos >= navbarOffsetTop) {
        navbarElement.css('background', 'white');
        educationExperienceElement.addClass("animate__animated animate__fadeInUpBig animate__delay-1s");
    }
});
