async function getdata(cityname){
    let x = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=9e1b64921bf649a1e41052f1dc05a120");
    let data = await x.json();
    return data;

}
function kelvintocelsius(kelvin){
    return kelvin - 273.15;
}

async function main(){



    let a = document.getElementById("search");
    a.addEventListener("click",search);

    async function search(event){
        event.preventDefault();
        let value1 =  document.getElementById("city").value;
        console.log(value1);
  
       let data = await getdata(value1);
       displaydata(data);
       

    } 


    function displaydata(data){

    let currentTempCelsius = kelvintocelsius(data.main.temp);
    let feelsLikeTempCelsius = kelvintocelsius(data.main.feels_like);
    let minTempCelsius = kelvintocelsius(data.main.temp_min);
    let maxTempCelsius = kelvintocelsius(data.main.temp_max);
    let condition = data.weather[0].main;
    let description = data.weather[0].description;

   
    

    let c = document.getElementById("temprature");
    c.innerHTML="Current temperature: " + currentTempCelsius.toFixed(2) +"°C<br>" +
    "Feels like temprature: " + feelsLikeTempCelsius.toFixed(2) +"°C<br>" + "Minimum temperature:" + minTempCelsius.toFixed(2) + "°C<br>" +
    "Maximum temperature:" + maxTempCelsius.toFixed(2) + "°C<br>" + "Current Condition :  " + condition +"<br>" + "Description : " +description ;
    

   
 
    }
}
    
main();



let change = document.getElementById("time");
setInterval(()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
   
change.textContent =  + hours + ":" + minutes + ":" + seconds;

},1000)




    


