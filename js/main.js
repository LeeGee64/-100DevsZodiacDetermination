//Lee: This function will return the zodiac sign that will be used to get the right zodiac info from our list of arrays
 
function getZodiacInfo (birthDate, birthMonth) {
  
  //Lee: This array of objects will contain the name, image path, and description of each zodiac to be returned after input
  const zodiacArray = [
  "Capricorn",  {
      name : "Capricorn", 
      dateRange :"Dec 22 - Jan 19", 
      image: "#" , 
      description: "Earth cardinal. Represented by the Sea-Goat. Capricorn is steady, goal-oriented, and ambitious. They are competent and always “has their eye on the prize.” Capricorns are patient, wise, and can be uptight in their desire to reach their goals."
  },
  "Aquarius", {
  name : "Aquarius", 
  dateRange : "Jan 20 - Feb 18",
   image: "#" ,
  description: "Air fixed. Represented by the Water Bearer. Aquarius is unique, individualistic, active, and enigmatic. They are trailblazers and free thinkers; highly values freedom and intellect. Has an air of rebellion to them."
  },
  "Pisces", {
      name : "Pisces",
      dateRange : "Feb 19 - Mar 20",
      image: "#", 
      description: "Water mutable. Represented by the Fish. Pisces are dreamy, emotional, and imaginative. They live in their heads as daydreaming and idealistic folks. Often artistic and romantic. Pisces are intuitive and deep, philosophical thinkers."
  },
  "Aries", {
  name : "Aries",
   dateRange : "Mar 21 - Apr 19", 
   image: "#", 
   description: "Fire cardinal. Represented by the Ram. Aries is reactive, energetic, and enthusiastic. Bold and passionate, They do not let their voices get drowned. Their heart is fiery and they are often brilliant leaders, leading with determination."
  },
  "Taurus", {
      name : "Taurus",
   dateRange : "Apr 20 - May 20", 
   image: "#", 
   description: "Earth fixed. Represented by the Bull. Down-to-earth, strong-willed, gentle. Taurus can be very stubborn when they want to be. Likes comfort and material stability. Does not like to be rushed into making choices or actions."

  },
  "Gemini", {
      name : "Gemini",
       dateRange : "May 21 - Jun 20",
        image: "#", 
        description: "Air mutable. Represented by the Twins. Gemini is imaginative, lighthearted, and often silly. Their attitudes and ideas can shift quickly, making them appear indecisive or flighty. Curious folks who has a need to satisfy the mind."
      },
  "Cancer", {
      name : "Cancer",
       dateRange : "Jun 21 - Jul 22", 
       image: "#",
      description: "Water cardinal. Represented by the Crab. Sensitive, emotional, and nurturing. Cancer is a protective sign. Known to be loyal to who they love, Cancers are intuitive and personal. They can be defensive and moody at times."
  },
  "Leo", {
      name : "Leo",
       dateRange : "Jul 23 - Aug 22", 
       image: "#", 
       description: "Fire fixed. Represented by the Lion. Leo is vibrant, bold, and entertaining. They are often very dramatic, expressive, and loves attention. Commonly stereotyped to be attention-seeking and egoistical, but Leo has a great big heart."
      },
  "Virgo", {
      name : "Virgo",
       dateRange : "Aug 23 - Sep 22",
        image: "#", 
        description: "Earth mutable. Represented by the Maiden. Virgo is reserved, observant, and detail-oriented. Organized and can be seen as nit-picky or fussy by others. They are patiently adaptive and is levelheaded. Sensitive to external environment."
      },
  "Libra", {
      name : "Libra",
       dateRange : "Sep 23 - Oct 22",
       vimage: "#", 
       description: "Air cardinal. Represented by the Scale. Libra appears peaceful, gentle, and fair. They are artful folks who are attracted to aesthetics and beauty. Libra is sociable and active. Diplomatic and does not like conflict, but they are often great leaders."
      },
  "Scorpio", 
  {name : "Scorpio", 
  dateRange : "Oct 23 - Nov 21",
   image: "#", 
   description: "Water fixed. Represented by the Scorpion. Scorpios are intense, dedicated, and fixative. Closed off and watchful at first, but in comfort they are loving, committed, and selfless. Scorpio can be vengeful and grudge-holding if betrayed."
  },
  "Sagittarius", 
  {name : "Sagittarius", 
  dateRange : "Nov 22 - Dec 21", 
  image: "#",
   description: "Fire mutable. Represented by the Archer. Sagittarius is free-spirited, adventurous, and honest. They are known for their biting honesty and their bluntness. Wise and open-minded, Sagittarius are young at heart and born travelers."

  }   
];

  
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

//Lee: this will export the above function to our node.js file
//Crystal: I'm not sure what this problem is ts(1128) (Declaration or statement expected.) Please advise! What goes right here please change if I'm wrong I put exportType(Please advise!!!)
exportType (getZodiacInfo);
