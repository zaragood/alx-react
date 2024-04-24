/** @format */

function getFullYear(data) {
  const today = new Date();
  const year = today.getFullYear();

  return `${year}`;
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}
function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

export { getFullYear, getFooterCopy, getLatestNotification };
