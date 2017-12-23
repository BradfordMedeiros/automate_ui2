
import download from 'downloadjs';

const getStyleSheetOperations = (AUTOMATE_CORE_URL) => {
  const themeUrl = `${AUTOMATE_CORE_URL}/theme`;

  const deleteStylesheet = async () => {
    const response = await fetch(themeUrl, {
      method: 'DELETE',
      mode: 'cors',
    });
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