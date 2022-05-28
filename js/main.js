//Lee: This array of objects will contain the name, image path, and description of each zodiac to be returned after input

const zodiacArray = [
  "Capricorn":  {
      name : "Capricorn", 
      dateRange :"Dec 22 - Jan 19", 
      image: "#" , 
      description: ""
  },
  "Aquarius": {
  name : "Aquarius", 
  dateRange : "Jan 20 - Feb 18",
   image: "#" ,
  description: ""
  },
  "Pisces": {
      name : "Pisces",
      dateRange : "Feb 19 - Mar 20",
      image: "#", description: "",
  },
  "Aries": {
  name : "Aries",
   dateRange : "Mar 21 - Apr 19", 
   image: "#", 
   description: ""
  },
  "Taurus": {
      name : "Taurus",
   dateRange : "Apr 20 - May 20", 
   image: "#", 
   description: ""
  },
  "Gemini": {
      name : "Gemini",
       dateRange : "May 21 - Jun 20",
        image: "#", 
        description: ""
      },
  "Cancer": {
      name : "Cancer",
       dateRange : "Jun 21 - Jul 22", 
       image: "#",
      description: ""
  },
  "Leo": {
      name : "Leo",
       dateRange : "Jul 23 - Aug 22", 
       image: "#", 
       description: ""
      },
  "Virgo": {
      name : "Virgo",
       dateRange : "Aug 23 - Sep 22",
        image: "#", 
        description: ""
      },
  "Libra": {
      name : "Libra",
       dateRange : "Sep 23 - Oct 22",
       vimage: "#", 
       description: ""
      },
  "Scorpio": 
  {name : "Scorpio", 
  dateRange : "Oct 23 - Nov 21",
   image: "#", 
   description: ""
  },
  "Sagittarius": 
  {name : "Sagittarius", 
  dateRange : "Nov 22 - Dec 21", 
  image: "#",
   description: ""
  }   
];

//Lee: This function will return the zodiac sign that will be used to get the right zodiac info from our list of arrays

let birthDate = ""
let birthMonth =  ""

 
function getZodiacInfo (birthDate, birthMonth) {
if((birthMonth == 12 &&  birthDate >= 22) || (birthMonth == 1 && birthDate <= 19)){
    return zodiacArray["Capricon"]; 
}else if((birthMonth == 1 && birthDate>=20)||(birthMonth == 2 && birthDate<=18)){
  return zodiacArray["Aquarius"];
}else if((birthMonth == 2 && birthDate>=19)|| (birthMonth== 3 && birthDate<= 20)){
  return zodiacArray["Pisces"];
}else if((birthMonth == 3 && birthDate>=21)|| (birthMonth== 4 && birthDate<= 19)){
  return zodiacArray["Aries"];
}else if((birthMonth == 4 && birthDate>=20)|| (birthMonth== 5 && birthDate<= 20)){
  return zodiacArray["Taurus"];
}else if((birthMonth == 5 && birthDate>=21)|| (birthMonth== 6 && birthDate<= 20)){
  return zodiacArray["Gemini"];
}else if((birthMonth == 6 && birthDate>=21)|| (birthMonth== 7 && birthDate<= 22)){
  return zodiacArray["Cancer"];
}else if((birthMonth == 7 && birthDate>=23)|| (birthMonth== 8 && birthDate<= 22)){
   return zodiacArray["Leo"];
}else if((birthMonth == 8 && birthDate>=23)|| (birthMonth== 9 && birthDate<= 22)){
   return zodiacArray["Virgo"];
}else if((birthMonth == 9 && birthDate>=23)|| (birthMonth== 10 && birthDate<= 22)){
   return zodiacArray["Libra"];
}else if((birthMonth == 10 && birthDate>=23)|| (birthMonth== 11 && birthDate<= 21)){
   return zodiacArray["Scorpio"];
}else if((birthMonth == 11 && birthDate>=22)|| (birthMonth== 12 && birthDate<= 21)){
   return zodiacArray["Saggaritus"];}
}

