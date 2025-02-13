const input = document.querySelector("#search");
const button = document.querySelector("#submit");



button.addEventListener("click",()=>{
    const value = input.value.trim();
    if(!value){
        alert("Please enter a city name");
        return;
    }
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid="Your Api key"&units=metric`;
   
    fetch(url).then((response)=>{
        if(response.ok){
            return response.json();
        }
        throw new Error("No city found");
    }).then((data)=>{
        document.querySelector("h2").innerHTML = data.name;
        document.querySelector("#temp").innerHTML=data.main.temp + "°C";
        document.querySelector("#desc").innerHTML=data.weather[0].description;
        document.querySelector("img").src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
        document.querySelector("img").classList.add("icon");
        console.log(document.querySelector("img"));
    }).catch((error)=>{
        console.log(error);
    })
})


