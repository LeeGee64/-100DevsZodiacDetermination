
const zodiacArray = [
        {
      "name" : "Capricorn", 
      "dateRange" :"Dec 22 - Jan 19", 
      "image": "images/capricorn.png" , 
      "description": "Earth cardinal. Represented by the Sea-Goat. Capricorn is steady, goal-oriented, and ambitious. They are competent and always “has their eye on the prize.” Capricorns are patient, wise, and can be uptight in their desire to reach their goals."
  },
   {
  "name" : "Aquarius", 
  "dateRange" : "Jan 20 - Feb 18",
   "image": "images/aquarius.png" ,
  "description": "Air fixed. Represented by the Water Bearer. Aquarius is unique, individualistic, active, and enigmatic. They are trailblazers and free thinkers; highly values freedom and intellect. Has an air of rebellion to them."
  },
  {
      "name" : "Pisces",
      "dateRange" : "Feb 19 - Mar 20",
      "image": "images/pisces.png", 
      "description": "Water mutable. Represented by the Fish. Pisces are dreamy, emotional, and imaginative. They live in their heads as daydreaming and idealistic folks. Often artistic and romantic. Pisces are intuitive and deep, philosophical thinkers."
  },
   {
  "name" : "Aries",
   "dateRange" : "Mar 21 - Apr 19", 
   "image": "images/aries.png", 
   "description": "Fire cardinal. Represented by the Ram. Aries is reactive, energetic, and enthusiastic. Bold and passionate, They do not let their voices get drowned. Their heart is fiery and they are often brilliant leaders, leading with determination."
  },
   {
      "name" : "Taurus",
   "dateRange" : "Apr 20 - May 20", 
   "image": "images/taurus.png", 
   "description": "Earth fixed. Represented by the Bull. Down-to-earth, strong-willed, gentle. Taurus can be very stubborn when they want to be. Likes comfort and material stability. Does not like to be rushed into making choices or actions."

  },
   {
      "name" : "Gemini",
       "dateRange" : "May 21 - Jun 20",
        "image": "images/gemini.png", 
        "description": "Air mutable. Represented by the Twins. Gemini is imaginative, lighthearted, and often silly. Their attitudes and ideas can shift quickly, making them appear indecisive or flighty. Curious folks who has a need to satisfy the mind."
      },
   {
      "name" : "Cancer",
       "dateRange" : "Jun 21 - Jul 22", 
       "image": "images/cancer.png",
      "description": "Water cardinal. Represented by the Crab. Sensitive, emotional, and nurturing. Cancer is a protective sign. Known to be loyal to who they love, Cancers are intuitive and personal. They can be defensive and moody at times."
  },
  {
      "name" : "Leo",
       "dateRange" : "Jul 23 - Aug 22", 
       "image": "images/leo.png", 
       "description": "Fire fixed. Represented by the Lion. Leo is vibrant, bold, and entertaining. They are often very dramatic, expressive, and loves attention. Commonly stereotyped to be attention-seeking and egoistical, but Leo has a great big heart."
      },
   {
      "name" : "Virgo",
       "dateRange" : "Aug 23 - Sep 22",
        "image": "images/virgo.png", 
        "description": "Earth mutable. Represented by the Maiden. Virgo is reserved, observant, and detail-oriented. Organized and can be seen as nit-picky or fussy by others. They are patiently adaptive and is levelheaded. Sensitive to external environment."
      },
   {
      "name" : "Libra",
       "dateRange" : "Sep 23 - Oct 22",
       "image": "images/libra.png", 
       "description": "Air cardinal. Represented by the Scale. Libra appears peaceful, gentle, and fair. They are artful folks who are attracted to aesthetics and beauty. Libra is sociable and active. Diplomatic and does not like conflict, but they are often great leaders."
      },
   
  {
    "name" : "Scorpio", 
  "dateRange" : "Oct 23 - Nov 21",
   "image": "images/scorpio.png", 
  "description": "Water fixed. Represented by the Scorpion. Scorpios are intense, dedicated, and fixative. Closed off and watchful at first, but in comfort they are loving, committed, and selfless. Scorpio can be vengeful and grudge-holding if betrayed."
  },
  
  {
    "name" : "Sagittarius", 
  "dateRange" : "Nov 22 - Dec 21", 
  "image": "images/sagittarius.png",
   "description": "Fire mutable. Represented by the Archer. Sagittarius is free-spirited, adventurous, and honest. They are known for their biting honesty and their bluntness. Wise and open-minded, Sagittarius are young at heart and born travelers."

  }   
]

document.querySelector('.submit-btn').addEventListener('click', getZodiac)
function getZodiac() { 
  
  let birthMonth = Number(document.getElementById('day').value.split('-')[1]); //pulls 'month' value from Date entry 
  let birthDate= Number(document.getElementById('day').value.split('-')[2]); // pulls 'day' value from Date entry
  let userZodiac = {}; 

if(birthMonth == 12 &&  birthDate >= 22 || birthMonth == 1 && birthDate <= 19){
    userZodiac = zodiacArray.find(x => x.name == "Capricorn")
}else if((birthMonth == 1 && birthDate>=20)||(birthMonth == 2 && birthDate<=18)){
  userZodiac = zodiacArray.find(x => x.name == "Aquarius")
}else if((birthMonth == 2 && birthDate>=19)|| (birthMonth== 3 && birthDate<= 20)){
  userZodiac = zodiacArray.find(x => x.name == "Pisces")
}else if((birthMonth == 3 && birthDate>=21)|| (birthMonth== 4 && birthDate<= 19)){
  userZodiac = zodiacArray.find(x => x.name == "Aries")
}else if((birthMonth == 4 && birthDate>=20)|| (birthMonth== 5 && birthDate<= 20)){ 
  userZodiac = zodiacArray.find(x => x.name == "Taurus")
}else if((birthMonth == 5 && birthDate>=21)|| (birthMonth== 6 && birthDate<= 20)){
  userZodiac = zodiacArray.find(x => x.name == "Gemini")
}else if((birthMonth == 6 && birthDate>=21)|| (birthMonth== 7 && birthDate<= 22)){
   userZodiac = zodiacArray.find(x => x.name == "Cancer")
}else if((birthMonth == 7 && birthDate>=23)|| (birthMonth== 8 && birthDate<= 22)){
  userZodiac = zodiacArray.find(x => x.name == "Leo")
}else if((birthMonth == 8 && birthDate>=23)|| (birthMonth== 9 && birthDate<= 22)){
  userZodiac = zodiacArray.find(x => x.name == "Virgo")
}else if((birthMonth == 9 && birthDate>=23)|| (birthMonth== 10 && birthDate<= 22)){
  userZodiac = zodiacArray.find(x => x.name == "Libra")
}else if((birthMonth == 10 && birthDate>=23)|| (birthMonth== 11 && birthDate<= 21)){
  userZodiac = zodiacArray.find(x => x.name == "Scorpio")
}else if((birthMonth == 11 && birthDate>=22)|| (birthMonth== 12 && birthDate<= 21)){
  userZodiac = zodiacArray.find(x => x.name == "Sagittarius")
} 

//need to make sure that these append to the right document        
document.querySelector('#zodiacName').innerText= userZodiac.name //append name in zodiac array to DOM
document.querySelector('#zodiacImage').src = userZodiac.image // append image in zodiac array to DOM
document.querySelector('#zodiacDescription').innerText= userZodiac.description //append description in zodiac array to DOM
}


