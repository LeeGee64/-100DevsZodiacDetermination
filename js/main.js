//Lee: This array of objects will contain the name, image path, and description of each zodiac to be returned after input

const zodiacArray = [
 "Capricorn": {name = "Capricorn"; dateRange = "Dec 22 - Jan 19"; image= "#"; description= "";},
 "Aquarius": {name = "Aquarius"; dateRange = "Jan 20 - Feb 18"; image= "#"; description= "";},
 "Pisces": {name = "Pisces"; dateRange = "Feb 19 - Mar 20"; image= "#"; description= "";},
 "Aries": {name = "Aries"; dateRange = "Mar 21 - Apr 19"; image= "#"; description= "";},
 "Taurus": {name = "Taurus"; dateRange = "Apr 20 - May 20"; image= "#"; description= "";},
 "Gemini": {name = "Gemini"; dateRange = "May 21 - Jun 20"; image= "#"; description= "";},
 "Cancer": {name = "Cancer"; dateRange = "Jun 21 - Jul 22"; image= "#"; description= "";},
 "Leo": {name = "Leo"; dateRange = "Jul 23 - Aug 22"; image= "#"; description= "";},
 "Virgo": {name = "Capricorn"; dateRange = "Aug 23 - Sep 22"; image= "#"; description= "";},
 "Libra": {name = "Libra"; dateRange = "Sep 23 - Oct 22";vimage= "#"; description= "";},
 "Scorpio": {name = "Scorpio"; dateRange = "Oct 23 - Nov 21"; image= "#"; description= "";},
 "Sagittarius": {name = "Sagittarius"; dateRange = "Nov 22 - Dec 21"; image= "#"; description= "";}   
]


//Lee: This function will return the zodiac sign that will be used to get the right zodiac info from our list of arrays

function returnZodiac(birthMonth,birthDate){
  switch(birthMonth){
   case "Jan":
    birthDate <= 19 ? return "Capricorn" : return "Aquarius";
    break;
   //Lee: add a case for each other month of the year similar to the above
   default:
    alert("Please enter a valid month!");
  }
}

//Lee: create some test cases to make sure that switch functions and that Zodiac Array returns the right values
