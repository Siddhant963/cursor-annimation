var main = document.querySelector('.main');
var cursor = document.querySelector('.cursor');

main.addEventListener("mousemove", function(dates){ 
    // console.log(dates.x);
    gsap.to(cursor,{ 
        x: dates.x,
        y:dates.y,
        // duration: ,
        
        
    })
    
})