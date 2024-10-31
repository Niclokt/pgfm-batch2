let momobae = {
    name:"Momobae",
    specialty: "K-Pop",
    power: 49,
    hitpoints: 28,
    level: 7,
    gender: "Female"
}

console.log(momobae);


let singer = {
    singerProfile: function() {
        console.log();
        console.log();
        console.log();
    } 
}


///////////////////////// Travis Code
let momobae = {
    Name: "Momobae",
    Specialty: "K-Pop",
    Power: 49,
    Hitpoints: 28,
    Level: 7,
    Gender: "Female",
  };
  
  function Singer(Name, Specialty, Power, Hitpoints, Level, Gender) {
    this.Power = Power;
    this.Level = Level;
    this.Hitpoints = Hitpoints;
    this.Name = Name;
    this.Specialty = Specialty;
    this.Gender = Gender;
  
    this.maxP = function () {
      return this.Power * this.Level - this.Hitpoints;
    };
  
    this.singleProfile = function () {
      const hitpointStats = this.Hitpoints;
      if (hitpointStats >= 71) {
        return `${this.Name} Level:${this.Level},gender ${this.Gender},specialty '${this.Specialty}'.\nPower ${this.Power}!\nHitpoints: Amazing.`;
      } else if (hitpointStats < 71 && hitpointStats > 50) {
        return `${this.Name} Level:${this.Level},gender ${this.Gender},specialty '${this.Specialty}'.\nPower ${this.Power}!\nHitpoints: Strong.`;
      } else {
        return `${this.Name} Level:${this.Level},gender ${this.Gender},specialty '${this.Specialty}'.\nPower ${this.Power}!\nHitpoints: Weak.`;
      }
    };
  }
  
  const momobaeSinger = new Singer("Momobae", "K-Pop", 49, 28, 7, "Female");
  const minaeBaeSinger = new Singer("Minabae", "Ballad", 40, 55, 5, "Female");
  
  console.log(momobaeSinger.singleProfile());
  console.log(minaeBaeSinger.singleProfile());



  ///////////////////////////
  this.singerProfile = function(){
    console.log(
      `${this.name} Level ${this.level}, Gender: ${this.gender}, Speciality: ${this.speciality}. Power: ${this.power}!, Hitpoints: ${this.getHitpointStatus()}.`
    );
};

this.getHitpointStatus = function(){
    if (this.hitpoint < 50){
        return "Weak";
    }
    else if (this.hitpoint >= 51 && this.hitpoint <= 70){
        return "Strong";
    }
    else if (this.hitpoint >= 71 && this.hitpoint <= 100){
        return "Amazing";
    } else {
        return "Invalid hitpoint range";
    }
};

/////// Teacher's code:
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
  console.log(minabae)
 