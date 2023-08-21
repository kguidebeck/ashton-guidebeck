import { useState } from 'react';
import { Formik } from 'formik';
import * as Styled from './ConnectForm.styled';
import { FormErrors, FormValues } from './ConnectForm.model';
import InputWrap from '@components/ui/input';
import netlifySubmit from '@utils/netlifySubmit';
import { VisuallyHidden } from '@styles/helpers';

const ConnectForm = () => {
  const [message, setMessage] = useState<string>();
  const initialValues = {
    'form-name': 'connect',
    full_name: '',
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
            if (!values.full_name) {
              errors.full_name = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values: FormValues, { setSubmitting, resetForm }) => {
            netlifySubmit(values)
              .then(() => {
                setSubmitting(false);
                resetForm();
                setMessage(
                  'Thank you for your message. I will be in touch shortly.'
                );
              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                setMessage(
                  `There was an error with your submission${
                    error ? `: ${error}` : '.'
                  }`
                );
              });

            setSubmitting(false);
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
              <VisuallyHidden as="div" aria-hidden="true">
                <input
                  type="hidden"
                  name="form-name"
                  value={values['form-name']}
                />
                <label htmlFor="bot-field">
                  Don&apos;t fill this out if you&apos;re human:
                  <input name="bot-field" />
                </label>
              </VisuallyHidden>
              <InputWrap
                id="full_name"
                label="Full Name"
                error={errors.full_name}
                touched={touched.full_name}
              >
                <input
                  id="full_name"
                  type="text"
                  name="full_name"
                  placeholder="FULL NAME*"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.full_name}
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
                  placeholder="EMAIL*"
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
                {isSubmitting ? 'Submitting' : 'Submit'}
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
