// import axios from 'axios';

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

/**
 * send form values to netlify
 * @param {object} values
 */
const netlifySubmit = async (values: any) => {
  const formData = encode(values);

  return fetch('/connect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData,
  });

  // const keys = Object.keys(values);
  // const formData = new FormData();

  // for (let i = 0; i < keys.length; i++) {
  //   formData.append(keys[i], values[keys[i]]);
  // }

  // return axios({
  //   method: 'post',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   data: formData,
  //   url: '/connect',
  // });
};

export default netlifySubmit;
