import fetch from 'isomorphic-fetch';
import assert from 'assert';

const getWithMyAccount = ({ AUTOMATE_CORE_URL }, { refresh }) => {
  const ACCOUNTS_URL = `${AUTOMATE_CORE_URL}/accounts`;

  const setProfileImage = async (email, imageUrl) => {
    assert(email, typeof(''));
    assert(imageUrl, typeof(''));

    const response = await fetch(`${ACCOUNTS_URL}/setProfileImage`, {
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
    });
  };

  const getWithMyAccount = async token => {
    assert(typeof(token) === typeof(''), 'No token provided to my account.  This is a login error');
    const response = await fetch(`${ACCOUNTS_URL}/myAccount`, {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify({
          token,
        }),

    });
    return await response.json();
  }

  const enableUserAccountCreation = async () => await fetch(`${ACCOUNTS_URL}/enableUserAccountCreation`, {
    method: 'POST',
    mode: 'cors',
  });

  const disableUserAccountCreation = async () => await fetch(`${ACCOUNTS_URL}/disableUserAccountCreation`, {
    method: 'POST',
    mode: 'cors',
  });

  return {
    lifecycle: {
      getData: async ({ token }) => {
          const { admin, email, imageURL, isAdmin, alias } = await getWithMyAccount(token);
          return { admin, email, imageURL, isAdmin, alias };
      },  
    },
    props: {
      setProfileImage,
      enableUserAccountCreation: async () => {
        await enableUserAccountCreation();
        refresh();
      },
      disableUserAccountCreation: async () => {
        await disableUserAccountCreation();
        refresh();
      }
    }
  }
}

export default getWithMyAccount;