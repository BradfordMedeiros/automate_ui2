/**
 * Created by brad on 10/30/17.
 */

const getSetProfileImage = (AUTOMATE_CORE_URL) => {
  const accountsUrl = `${AUTOMATE_CORE_URL}/accounts`;

  const setProfileImage = async(username, imageUrl) => {
    if (typeof(username) !== typeof('')) {
      throw (new Error('username is undefined'));
    }
    if (typeof(imageUrl) !== typeof('')) {
      throw (new Error('password is undefined'));
    }

    const response = await fetch(`${accountsUrl}/setProfileImage`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        username,
        imageUrl,
      }),
    })
  }
  return setProfileImage;
};

export default getSetProfileImage;