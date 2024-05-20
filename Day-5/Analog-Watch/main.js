setInterval(() => {
    const d = new Date();
let h = (d.getHours());
let m = (d.getMinutes());
let s = (d.getSeconds());
let time = h + ":" + m + ":" + s;
console.log(time);

     
   let hrotation=30*h+m/2;
   let mrotation=6*m;
   let srotation=6*s;


    hours.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
}, 1000);