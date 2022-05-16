
let options=document.querySelectorAll(".Product .container .box>span");
let paragraph=document.querySelectorAll(".Product .container .paragraph");
options.forEach((e)=>{
    e.addEventListener("click",(ele)=>{
        options.forEach((x)=>{
        x.classList.add("prod-info-option")
        x.classList.remove("clicked")
        })
        paragraph.forEach((p)=>{
            if(!p.classList.contains("hide")){
                p.classList.add("hide")
            }
            if(e.innerHTML===p.id){
                if(p.classList.contains("hide")){
                p.classList.remove("hide");
                e.classList.remove("prod-info-option")
                e.classList.add("clicked")
                }
            }
        })
    })
})
