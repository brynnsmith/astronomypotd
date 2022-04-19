//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto() {
    let date = document.querySelector('input').value
    let token = config.MY_API_TOKEN
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${token}&date=${date}`)
    .then(res => res.json())
        .then(data => {
            if (data.media_type === 'image') {
                document.querySelector('.image').style.visibility = "visible"
                document.querySelector('.image').style.display = "block"
                document.querySelector('.image').src = data.url
                document.querySelector('iframe').style.display = "none"
            } else if (data.media_type === "video") {
                document.querySelector('iframe').style.display = "block"
                document.querySelector('iframe').src = data.url
                document.querySelector('.image').style.display = "none"
            }
            document.querySelector('.name').style.visibility = "visible"
            document.querySelector('.name').innerText = data.title
            document.querySelector('h3').style.visibility = "visible"
            document.querySelector('h3').innerText = data.explanation
            data[date]
            .catch(err => {
                console.log(`error ${err}`);
            });
    });
}

window.onload = displayClock();

function displayClock() {
    let dt = new Date();
    document.querySelector('.currentDate').innerHTML=dt;
    setTimeout(displayClock,1000);
}

