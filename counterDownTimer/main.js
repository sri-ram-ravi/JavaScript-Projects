const days=document.getElementById('days')
const hours=document.getElementById('hours')
const mins=document.getElementById('mintues')
const seconds=document.getElementById('seconds')
const eventName=document.getElementById('eventName')

const EventName=prompt("Enter the event Name")
const newYear=prompt("Enter your event need to be count format: 1 Jan 2024")

function countDown(){
    const newYearDate=new Date(newYear)
    const currentDate=new Date()
    const totalSeconds=(newYearDate-currentDate)/1000
    const day=Math.floor(totalSeconds/86400)
    const hour=Math.floor(totalSeconds/3600)%24
    const mintue=Math.floor(totalSeconds/60)%60
    const second=Math.floor(totalSeconds)%60
    days.innerText=day
    hours.innerText=hour
    mins.innerText=mintue
    seconds.innerText=second
    eventName.innerText=EventName + " Countdown"
}

countDown()

setInterval(countDown,1000)