
import download from 'downloadjs';

const getStyleSheetOperations = (AUTOMATE_CORE_URL) => {
  const themeUrl = `${AUTOMATE_CORE_URL}/theme`;

  const deleteStylesheet = async() => {
    const response = await fetch(themeUrl, {
      method: 'DELETE',
      mode: 'cors',
    });
  };

  const downloadStylesheet = async() => {
    const response = await fetch(themeUrl, {
      method: 'GET',
      mode: 'cors',
    });
    const blob = await response.blob();
    download(blob, "user_style.css", "text/plain");
  };

  const uploadStylesheet = async stylesheetData => {
    window.sd = stylesheetData;
    const response = await fetch(themeUrl, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        style: stylesheetData,
      }),
    });
  };

  return ({
    deleteStylesheet,
    downloadStylesheet,
    uploadStylesheet,
  });
};

export default getStyleSheetOperations;