// var weatherApiKey = "7ed1d607ce80dbd08a78034b7e12147e";

var button = document.querySelector('.button')
var inputVal = document.querySelector('.inputVal')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click' ,function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid=7ed1d607ce80dbd08a78034b7e12147e")
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var temp = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name.innerHtml = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;

})



.catch(err => alert("Wrong City"))
})



