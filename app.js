const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
    console.log(err);
});



// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This ...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("==================");

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };


// printProfileData(profileDataArgs);