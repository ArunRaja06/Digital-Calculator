let ampm=document.getElementById("ampm")

function displayTime(){

    const dateTime=new Date()

    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();

    if(hr>12){
        hr=hr-12
        ampm.innerHTML="PM"
    }


    document.getElementById("hr").innerHTML=padzero(hr)
    document.getElementById("min").innerHTML=padzero(min)
    document.getElementById("sec").innerHTML=padzero(sec)

    

    
}

function padzero(num){
    return num<10?"0"+num:num
    
}
setInterval(displayTime,500)