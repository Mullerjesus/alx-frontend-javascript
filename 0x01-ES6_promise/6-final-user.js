import signUpUser from './4-user-promise';  
import uploadPhoto from './5-photo-reject';  

export default function handleProfileSignup(firstName, lastName, fileName) {  
  return Promise.allSettled([  
    signUpUser(firstName, lastName),  
    uploadPhoto(fileName),  
  ]).then((values) => {  
    const arr = [];  
    for (const item of values) {  
      // Check if the promise was fulfilled  
      if (item.status === 'fulfilled') {  
        arr.push({ status: item.status, value: item.value });  
      } else {  
        // It was rejected, capture the reason  
        arr.push({ status: item.status, value: item.reason });  
      }  
    }  
    return arr;  
  });  
}
