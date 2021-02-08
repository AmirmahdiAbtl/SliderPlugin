let flag = 0;
let navflag = 0;

$(document).scroll(()=>{
    const scrollTop = $(document).scrollTop();
    const navHeight = $("nav").height();
    if(scrollTop>=navHeight) {
        $("nav").addClass("nav-fixed");
        $(".navbar-default").css({
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,0.2)"
        })
    }else{
        if(flag===0){
            $("nav").removeClass("nav-fixed");
            $(".navbar-default").css({
                backgroundColor: "transparent",
                borderColor: "transparent"
            })
        }
    }
})
$(".navbar-toggle").click(()=>{
    if(flag === 0){
        $(".navbar-default").css({
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,0.2)"
        })
        flag += 1;
    }else{
        $(".navbar-default").css({
            backgroundColor: "transparent",
            borderColor: "transparent"
        })
        flag = 0;
    }
})
const nav = document.getElementById("nav");
const scrollLinks = document.querySelectorAll(".nav-item");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        if(e.target.innerText !== "Document"){
            e.preventDefault();
        const id = e.target.innerText;
        const divCont = document.getElementById(id);
        let divHeight = divCont.offsetTop;
        // console.log(nav)
        let navHeight;
        if (nav.classList[1]!=="nav-fixed"){
            navHeight = 85;
            if(window.outerWidth <= 996){
                navHeight = 45;
            }
        }else{
            navHeight = 84;
        }
        window.scrollTo({
            left: 0,
            top: divHeight - navHeight,
            behavior: 'smooth'
        });
        }
    });
});