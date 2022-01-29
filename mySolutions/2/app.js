function setDate(){
    //select hands
    const second_hand = document.querySelector('.second-hand');
    const minute_hand = document.querySelector('.min-hand');
    const hour_hand = document.querySelector('.hour-hand');


    //get the time 
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();


    //transform time to degree
    const secondDegrees = ((second/60) * 360) + 90;
    const minuteDegrees = ((minute/60) * 360) + 90;
    const hourDegrees = ((hour/12) * 360) + 90;

    //rotate hands
    second_hand.style.transform=`rotate(${secondDegrees}deg)`;
    minute_hand.style.transform=`rotate(${minuteDegrees}deg)`;
    hour_hand.style.transform=`rotate(${hourDegrees}deg)`;
    console.log(second);
}

setInterval(setDate, 1000);