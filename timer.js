const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');

const updateTime=()=>{
    const currentyear=new Date().getFullYear();
    const newyear=new Date(`January 1 ${currentyear+1} 00:00:00`);
    const currentdate=new Date();
    const diff=newyear-currentdate;
    const ds=Math.floor(diff/1000/60/60/24);
    const hs=Math.floor((diff/1000/60/60)%24);
    const ms=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
    days.innerText=ds<10?"0"+ds:ds;
    hours.innerText=hs<10?"0"+hs:hs;
    minutes.innerText=ms<10?"0"+ms:ms;
    seconds.innerText=s<10?"0"+s:s;
}

setInterval(updateTime,1000);
