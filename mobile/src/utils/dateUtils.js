export const formatDate = (text) => {
    let newText = text.replace(/[^0-9]/g, "");
    if (newText.length > 4) newText = newText.slice(0, 4) + "-" + newText.slice(4);
    if (newText.length > 7) newText = newText.slice(0, 7) + "-" + newText.slice(7);
    return newText;
  };
  