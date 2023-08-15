import { Formik } from 'formik';
import * as Styled from './ConnectForm.styled';
import { FormErrors, FormValues } from './ConnectForm.model';
import InputWrap from '@components/ui/input';
import Button from '@components/ui/button/Button';

const ConnectForm = () => {
  const initialValues = {
    full_name: '',
    email: '',
    message: '',
  };

  return (
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
        onSubmit={(values: FormValues, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          <form onSubmit={handleSubmit}>
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
                placeholder="Full Name*"
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
                placeholder="Email*"
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
                rows={8}
                name="message"
                placeholder="Type your message here."
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
            </InputWrap>
            <Styled.Button type="submit" disabled={isSubmitting}>
              Submit
            </Styled.Button>
          </form>
        )}
      </Formik>
    </Styled.Form>
  );
};

export default ConnectForm;
