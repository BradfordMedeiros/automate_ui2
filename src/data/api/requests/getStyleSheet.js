
import download from 'downloadjs';

const getStyleSheetOperations = (AUTOMATE_CORE_URL) => {
  const themeUrl = `${AUTOMATE_CORE_URL}/theme`;

  /*const response = await fetch(`${accountsUrl}/loginWithToken`, {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify({
      token,
    }),
  });*/

  /*
   theme

   get
   post const content = req.body.style;
   delete
   */

  const deleteStylesheet = () => {
    console.log('delete placeholder!');
  };

  const downloadStylesheet = async () => {
    const response = await fetch(themeUrl, {
      method: 'GET',
      mode: 'cors',
    });
    const blob = await response.blob();
    download(blob, "user_style.css", "text/plain");
  };

  const uploadStylesheet =  stylesheetData => {
    console.log('upload placeholder');
  };

  return ({
    deleteStylesheet,
    downloadStylesheet,
    uploadStylesheet,
  });
};

export default getStyleSheetOperations;