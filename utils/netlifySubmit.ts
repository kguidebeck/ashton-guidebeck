import axios from 'axios';

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
  // const keys = Object.keys(values);
  // const formData = new FormData();
  const formData = encode(values);

  // for (let i = 0; i < keys.length; i++) {
  //   formData.append(keys[i], values[keys[i]]);
  // }

  // fetch("/", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: encode({ "form-name": "contact-demo", ...values })
  // })

  return axios({
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: formData,
    url: '/connect',
  });
};

export default netlifySubmit;
