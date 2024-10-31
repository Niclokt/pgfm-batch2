function Singer(singerName, speciality, power, hitpoints, level, gender){
    this.singerName = singerName;
    this.speciality =speciality;
    this.power = power;
  this.hitpoints = hitpoints
  this.level  = level
  this.gender = gender
  
  this.maximumPower = function(){
    return this.power * this.level - this.hitpoints;
  }
 
  this.singerProfile = function (){
   return `${singerName} Level ${level}, gender ${gender}, speciality ${speciality}.\n Power: ${power}! \n Hitpoints: ${this.calculateHP()}`
  };
  
  this.calculateHP =function(){
    if(this.hitpoints <= 50){ return "Weak"}
    else if(this.hitpoints >50 && this.hitpoints <= 70){ return "Strong"}
    else if(this.hitpoints >70 && this.hitpoints <= 100){return "Amazing"}
  }
  }
  
  let minabae = new Singer("superk", "snore",10,10,10,"Male")
  console.log(minabae);
 
  let momobae = new Singer("superB", "sneeze",10,10,10,"Female")
  console.log(minabae);

  let singer = []

  /////////
l

  let singers = [momobae, minabae];
for (let singer of singers) {
  console.log(singer.singerProfile());
}

// another approach:
let singerList = [new Singer("superk", "snore",10,10,10,"Male"), new Singer("superk", "snore",10,10,10,"Male")];
console.log(singerList[0]);
console.log(singerList[1]);