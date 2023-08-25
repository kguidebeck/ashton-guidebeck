/**
 * send form values to netlify
 * @param {object} values
 */
const netlifySubmit = async (values: any) => {
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode(values),
  });
};

export default netlifySubmit;
