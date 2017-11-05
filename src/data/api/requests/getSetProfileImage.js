
const getSetProfileImage = (AUTOMATE_CORE_URL) => {
  const accountsUrl = `${AUTOMATE_CORE_URL}/accounts`;

  const setProfileImage = async(email, imageUrl) => {
    if (typeof(email) !== typeof('')) {
      throw (new Error('email is undefined'));
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
        email,
        imageUrl,
      }),
    })
  }
  return setProfileImage;
};

export default getSetProfileImage;