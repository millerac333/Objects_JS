///2ND ATTEMPT AT EXCERCISE WHERE I PUT ALL DATA INTO ONE BIG OBJECT///
let sangerElizabeth = {
  tnCongressionalDistrict: "5th",
  platform: {
    taxes: "Cut Taxes",
    jobs: "Create Jobs",
    infrastructure: "Build roads",
    healthCare: "Universal healh care",
    CrimeAndEnforcement: "Prevent crime by enforcing laws"
  },
  urlDonation: "www.facebook.com",
  calendar: {
    events: [
      {
        event: "picnic",
        date: "4/5/18",
        time: "12:00"
      },
      {
        event: "speech",
        date: "4/10/18",
        time: "4:00"
      },
      {
        event: "break",
        date: "4/20/18",
        time: "4:20"
      }
    ]
  },
  volInfo: {
    volunteer: [
      {
        Name: "Lebron James",
        Address: "123 Cleveland St.",
        Email: "kingjames@gmail.com",
        Phone_number: "999-123-4567",
        Availabiltiy: "never",
        Activities: "none"
      },
      {
        Name: "Dwayne Wade",
        Address: "123 Miami St.",
        Email: "wade@wade.com",
        Availabiltiy: "always",
        Activities: "all"
      },
      {
        Name: "Kevin Love",
        Address: "123 LA St.",
        Email: "klove@nba.com",
        Availabiltiy: "never",
        Activities: "none"
      }
    ]
  },
  bio: {
    childhood: "hard childhood",
    education: "Virginia Tech",
    career: "This is my first run for office"
  },
  sangerImages: {
    Head_shot:
      "https://pophealth.wisc.edu/sites/default/files/sanger_elizabeth.jpg",
    Family:
      "https://www.nobelprize.org/nobel_prizes/medicine/laureates/2009/blackburn_autobio_2.jpg",
    Constituents:
      "https://i.pinimg.com/originals/ce/37/44/ce37440a8780c12ef11f47ce8a3d09af.jpg"
  },
  missionStatement: {
    statement: "To be the very best and do the very best"
  },
  urlRegister: {
    siteURLr: "www.google.com"
  }
};

//CHALLENGE
//THIS FUNCTION WILL CHANGE THE STATE OF AN OBJECT LIKE THE ONE CREATED ABOVE

function changeObjectState(targetObject, propertyReference, equalsValue) {
  targetObject[propertyReference] = equalsValue;
}
console.log(sangerElizabeth);

changeObjectState(sangerElizabeth.platform, "jobs", "start a revolution");
console.log(sangerElizabeth);

changeObjectState(
  sangerElizabeth.platform,
  "taxes",
  "taxes? who needs taxes? REVOLT!"
);
console.log(sangerElizabeth);

changeObjectState(
  sangerElizabeth.missionStatement,
  "statement",
  "TAKE TO THE STREET MY FELLOW jedi AND RISE UP!"
);
console.log(sangerElizabeth);

changeObjectState(
  sangerElizabeth.volInfo.volunteer[1],
  "Avalibility",
  "never-DWADE is about to retire"
);
console.log(sangerElizabeth);

///FIRST ATTEMPT AT EXCERCISE///
// var district = {
//     tnDistrict: "5th"
// }
// function nameDistrict(numberOfDistrict) {
//     district.tnDistrict = numberOfDistrict;
//     console.log(numberOfDistrict);
// }
// console.log(district.tnDistrict);
// nameDistrict("Fifth");
// console.log(district.tnDistrict);

// const platforms = {
//     Taxes: "Cut Taxes",
//     Jobs: "Create Jobs",
//     Infrastructure: "Build roads",
//     Health_care: "Universal healh care",
//     Crime_and_enforcement: "Prevent crime by enforcing laws"
// }
// function changePlatforms(editTaxes) {
//     platforms.Taxes = editTaxes;
//     console.log(editTaxes);
// }
// console.log(platforms.Taxes);
// changePlatforms("I am going to get rid of all taxes");
// console.log(platforms.Taxes);

// var urlDonation = {
//     siteURLd: "www.facebook.com"
// }
// var calendar = {
//     events: [
//         {
//             event: "picnic",
//             date: "4/5/18",
//             time: "12:00"
//         },
//         {
//             event: "speech",
//             date: "4/10/18",
//             time: "4:00"
//         },
//         {
//             event: "break",
//             date: "4/20/18",
//             time: "4:20"
//         }
//     ]
// }
// const volInfo = {
//     volunteer: [
//         {
//             Name: "Lebron James",
//             Address: "123 Cleveland St.",
//             Email: "kingjames@gmail.com",
//             Phone_number: "999-123-4567",
//             Availabiltiy: "never",
//             Activities: "none"
//         },
//         {
//             Name: "Dwayne Wade",
//             Address: "123 Miami St.",
//             Email: "wade@wade.com",
//             Availabiltiy: "always",
//             Activities: "all"
//         },
//         {
//             Name: "Kevin Love",
//             Address: "123 LA St.",
//             Email: "klove@nba.com",
//             Availabiltiy: "never",
//             Activities: "none"
//         }
//     ]
// }
// var bio = {
//     childhood: "hard childhood",
//     education: "Virginia Tech",
//     career: "This is my first run for office"
// }
// const Images = {
//     Head_shot: "https://pophealth.wisc.edu/sites/default/files/sanger_elizabeth.jpg",
//     Family: "https://www.nobelprize.org/nobel_prizes/medicine/laureates/2009/blackburn_autobio_2.jpg",
//     Constituents: "https://i.pinimg.com/originals/ce/37/44/ce37440a8780c12ef11f47ce8a3d09af.jpg"
// }
// var missionStatement = {
//     statement: "To be the very best and do the very best"
// }
// var urlRegister = {
//     siteURLr: "www.google.com"
// }
