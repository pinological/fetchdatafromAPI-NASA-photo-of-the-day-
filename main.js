const api_url = 'https://api.nasa.gov/planetary/apod?api_key=A1xIUOCYgz4lwCOtfvu27VBN3kpLX0XOkvRVZCQj';
async function getinfo() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.title);
    document.getElementById("photoday").innerHTML = data.title;
    document.getElementById("photo").src = data.url;
    document.getElementById("info").innerHTML = data.explanation;
    document.getElementById("hdlink").href = data.hdurl;
    document.getElementById("date").innerHTML = "Last Update " + data.date;
}
getinfo();