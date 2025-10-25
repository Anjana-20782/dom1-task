document.getElementById("multiply").addEventListener(`click`,()=>{

    let x=document.getElementById("number").value;
    str=``
    for(i=1;i<=10;i++)
    {
        str+=`<p>${i}*${x}=${x*i}</p>`
    }

    document.getElementById("result").innerHTML=str
})