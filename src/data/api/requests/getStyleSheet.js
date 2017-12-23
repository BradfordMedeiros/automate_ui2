

const getStyleSheetOperations = (AUTOMATE_CORE_URL) => {
  //const accountsUrl = `${AUTOMATE_CORE_URL}/accounts`;

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

  const downloadStylesheet = () => {
    console.log('download placeholder!');
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