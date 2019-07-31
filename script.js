var countriesInfo = {
  "Afghanistan": ["Currently, being LGBT in Afghanistan is illegal. In many cases, it is punishable by death.", "Avoid public displays of affection.", "We highly recommend not disclosing sexual-orientation and same-sex relationships.", "It is essential that you act in a considered and measured way at all times.", "No shorts, no mini skirts or no shirts that show a major part of a woman’s chest. If you have a wedding/engagement ring, we suggest that you take it off to avoid any misunderstandings."],

  "Albania": ["Homosexuality is legal, but there is widespread homophobia throught Albania.", "Avoid public displays of affection", "Due to general homophobia, we recommend not disclosing sexual-orientation and same-sex relationships.", "It is essential that you act in a considered and measured way at all times.","Please dress conservately (covered shoulders and knees) in mosques and churches. If you have a wedding/engagement ring, we suggest that you take it off to avoid any misunderstandings."],

  "Algeria": ["Since 1966 the Islamic Sharia law has been applied being LGBT in Algeria is illegal and same-sex marriage is illegal as well. ", "No", "We highly recommend not disclosing sexual-orientation and same-sex relationships.", "It is essential that you act in a considered and measured way at all times.","Please dress conservately (covered shoulders and knees). Long sleeves are suggested in southern cities. Shorts are only appropriate at the beach and in private. If you have a wedding/engagement ring, we suggest that you take it off to avoid any misunderstandings."],

  "Germany": ["", "No", "It is safe to disclose sexual-orientation and same-sex relationships.", "lol","Dress modestly and according to the weather."],

  "United States of America": ["Yes", "Yes", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "lol","Dress as you wish but be mindful in mid-western states."],

  "Canada": ["Yes", "No", "It is safe to disclose sexual-orientation and same-sex relationships.", "No","Dress as you wish and according to the weather."],

  "Spain": ["Yes", "Yes", "It is safe to disclose sexual-orientation and same-sex relationships.", "No","Dress as you wish but be mindful in religious areas."],

  "Italy": ["Homosexuality has been legal since 1890. However, older generations have had widely religious views on LGBT people. In 2016, Italy's parliament backed same-sex civil unions.", "Yes", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "Yes","Please dress conservately (covered shoulders and knees) in churches. You will be judged on the quality and style of your clothes"],

  "Ireland": ["Yes", "Yes", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "Yes","Please dress conservately and according to the weather. You will be judged on the quality and style of your clothes. Boots are always sensible item to pack."],

  "Iceland": ["Yes", "No", "It is safe to disclose sexual-orientation and same-sex relationships.", "Yes","Dress according to the weather. Layers are most advisable."],

  "France": ["Yes", "Yes", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "Yes","sure"],

  "Portugal": ["Yes", "No", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "Yes","never"],

  "Greece": ["Yes", "No", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "Yes","lmao"],

  "India": ["No", "No", "Due to general homophobia, we recommend not disclosing sexual-orientation nor same-sex relationships.", "No","alright"],

  "Japan": ["Being recognized as LGBT has been legal in Japan since 1880 and there are no laws against homosexuality. However, same-sex marriage has not been recognized. Although marriage isn’t legal everyone is very welcoming, some of the most gay friendly cities in Japan are Tokyo, Osaka, Sapporo, Fukuoka, and Nagoya with many fun and inviteful activities to do.", "No", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "Yes","nevermind"],

  "China": ["In China being an LGBT member has been legal since 1997 and is recognized. However same-sex marriage has not been yet legalized or recognized.", "No", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "No","never"],

  "Israel": ["Homosexuality has been legal in Israel since 1988 and forgien same-sex marriage is recognized only. In fact Tel Aviv is known as Israrels gay capital with many liberal and lively people whom are part of the LGBT commnity.", "Yes", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "No","like"],

  "Egypt": ["Homosexuality and same-sex marriage is still illegal (imprsionment as punishment) in Egypt and sadly have not yet been recognized. It is recommended to be cautious if you do decide to travel to Egypt.", "No", "We highly recommend not disclosing sexual orientation nor same-sex relationships", "No","sure"],

  "Kenya": ["Homosexuality and same-sex marriage is still illegal (imprsionment as punishment) in Kenya and sadly have not yet been recognized. It is recommended to be cautious if you do decide to travel to Kenya.", "No", "We highly recommend not disclosing sexual orientation nor same-sex relationships", "No","awake"],

  "Thailand": ["Homosexuality is legal in Thailand. It has been legal since 1956 but unfortunately same-sex marriage is not yet legal or recognized.", "Yes", "It is safe to disclose sexual-orientation and same-sex relationships. However, keep caution.", "No","yes"],

  "Area 51": ["Aliens are pretty gay, ok."],
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
