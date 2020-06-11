const text=document.querySelector(".text");
const Value=document.querySelector("#area");
const second=document.querySelector("#total");
const start=document.querySelector("#start");
const corr=document.getElementsByTagName("span")[1];

var timer;
var Count=-1;

function count(){
    timer=setInterval(()=>{
        Count+=1;
         second.textContent=Count;
    },1000);
}

Value.addEventListener("keypress",()=>{
    if(Count==-1)
    {
        count();
        Count++;
    }
});

Value.addEventListener("keyup",()=>{
    // console.log(Value.value);
})

document.addEventListener("keyup",(event)=>{
    if(event.keyCode===13)
    {
        clearInterval(timer); 
        
        var correct=0;

        for(var i=0;i<text.textContent.length;i++)
        {
            if(text.textContent[i]==Value.value[i])
            {
                correct++;
                console.log("yes");
            }
        }
        corr.innerHTML=correct;
    }
})

function reload(){
    location.reload();
}
