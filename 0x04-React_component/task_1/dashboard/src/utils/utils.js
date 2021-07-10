export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  let msg;

  if (isIndex) {
    msg = 'Holberton School';
  } else {
    msg = 'Holberton School Main Dashboard';
  }

  return msg;
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
