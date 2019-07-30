var countriesInfo = {
  "Afghanistan": ["None", "Sure", "Heck Yeah", "Do what you want", "yeah"],
  "Albania": ["no", "no", "yes", "lol","no"],
  "Algeria": ["Yes", "No", "Yes", "lol","sure"],
  "Germany": ["Yes", "No", "Yes", "lol","yes"],
  "United States of America": ["Yes", "Yes", "Yes", "lol","alright"],
  "Canada": ["Yes", "No", "Yes", "No","yup"],
  "Spain": ["Yes", "Yes", "Yes", "No","sure"],
  "Italy": ["Yes", "Yes", "Yes", "Yes","never"],
  "Ireland": ["Yes", "Yes", "Yes", "Yes","well"],
  "Iceland": ["Yes", "No", "Yes", "Yes","yeah"],
  "France": ["Yes", "Yes", "No", "Yes","sure"],
  "Portugal": ["Yes", "No", "Yes", "Yes","never"],
  "Greece": ["Yes", "No", "Yes", "Yes","lmao"],
  "India": ["No", "No", "No", "No","alright"],
  "Japan": ["No", "No", "No", "Yes","nevermind"],
  "China": ["No", "No", "Yes", "No","never"],
  "Israel": ["Yes", "Yes", "Yes", "No","like"],
  "Egypt": ["No", "No", "No", "No","sure"],
  "Kenya": ["No", "No", "No", "No","awake"],
  "Thailand": ["Yes", "Yes", "No", "No","yes"],
}
var nameOfAttributes = ["Legality", "PDA", "Publicity","Behavior", "Dress Code"];
/*
<html>
<h1> country </h1>
<h2> Legality </h2>
<div>
index 0
</div>
<h2> PDA </h2>
index 1
</html>
*/
function info(){
  var country = countryForm.myCountry.value;
  country = country.charAt(0).toUpperCase() + country.substring(1);
  if(countriesInfo.hasOwnProperty(country)){
    window.location.href = "country.html";
    for(i = 0; i < nameOfAttributes.length; i++){
       document.cookie = "CountryName=" + country;
       document.cookie = nameOfAttributes[i] +
       "=" + countriesInfo[country][i];
    }
    }
  else{
    alert("NOT A VALID COUNTRY NAME");
  }
}
//s.substring(1); amazon mazon
//s.charAt(0); amazon a

//country.charAt(0).toUpperCase + coun
//window.href.location = ""country.htmlt

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.width = "300px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.width = "300px";
  }
}
