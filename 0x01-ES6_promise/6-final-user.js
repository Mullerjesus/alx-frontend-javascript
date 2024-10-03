import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles user signup and photo upload.
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @param {string} fileName - The name of the photo file.
 * @returns {Promise<Array>} - A promise that resolves to an array of results.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => 
    results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }))
  );
}
