import { useState } from 'react';
import { Formik } from 'formik';
import netlifySubmit from '@utils/netlifySubmit';
import { VisuallyHidden } from '@styles/helpers';
import InputWrap from '@components/ui/input';
import { FormErrors, FormValues } from './ConnectForm.model';
import * as Styled from './ConnectForm.styled';

const ConnectForm = () => {
  const [message, setMessage] = useState<string>();
  const initialValues = {
    'form-name': 'connect',
    fullName: '',
    email: '',
    message: '',
  };

  return (
    <>
      <Styled.Form>
        <Formik
          initialValues={initialValues}
          validate={(values: FormValues) => {
            const errors = {} as FormErrors;
            if (!values.fullName) {
              errors.fullName = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.message) {
              errors.message = 'Required';
            }
            return errors;
          }}
          onSubmit={(values: FormValues, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            const botField = document.getElementsByName(
              'bot-field'
            )[0] as HTMLInputElement;

            if (botField && botField.value !== '') {
              values['bot-field'] = botField.value;
            }

            netlifySubmit(values)
              .then(() => {
                setTimeout(() => {
                  resetForm();
                  setMessage(
                    'Thank you for your message. I will be in touch shortly.'
                  );
                  window.scrollTo({
                    top: 100,
                    left: 100,
                    behavior: 'smooth',
                  });
                  setSubmitting(false);
                }, 500);
              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                setTimeout(() => {
                  setMessage(
                    `There was an error with your submission${
                      error ? `: ${error}` : '.'
                    }`
                  );
                  setSubmitting(false);
                }, 500);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              name="connect"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input
                type="hidden"
                name="form-name"
                value={values['form-name']}
              />
              <VisuallyHidden as="div">
                <label htmlFor="bot-field">
                  Don&apos;t fill this out if you&apos;re human:
                  <input name="bot-field" />
                </label>
              </VisuallyHidden>
              <InputWrap
                id="fullName"
                label="Full Name"
                error={errors.fullName}
                touched={touched.fullName}
              >
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME*"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                />
              </InputWrap>
              <InputWrap
                id="email"
                label="Email"
                error={errors.email}
                touched={touched.email}
              >
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS*"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </InputWrap>
              <InputWrap
                type="textarea"
                id="message"
                label="Message"
                error={errors.message}
                touched={touched.message}
              >
                <textarea
                  id="message"
                  name="message"
                  placeholder="TYPE YOUR MESSAGE HERE."
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </InputWrap>
              <Styled.Submit type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Connecting' : 'Let’s Connect'}
              </Styled.Submit>
            </form>
          )}
        </Formik>
      </Styled.Form>
      <Styled.Message active={!!message}>{message}</Styled.Message>
    </>
  );
};

export default ConnectForm;
