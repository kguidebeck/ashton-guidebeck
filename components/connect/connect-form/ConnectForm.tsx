import { Formik } from 'formik';
import { VisuallyHidden } from '@styles/helpers';
import * as Styled from './ConnectForm.styled';
import { FormValues, InputWidth } from './ConnectForm.model';
import { Input, TextArea } from '@components/primitives/input';
import Button from '@components/button/Button';

const ConnectForm = () => {
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  };

  return (
    <Styled.Form>
      <Formik
        initialValues={initialValues}
        validate={(values: FormValues) => {
          const errors = {};
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
          <form onSubmit={handleSubmit} role="form">
            <Styled.Field width={InputWidth.HALF}>
              <VisuallyHidden as="label" htmlFor="first_name">
                First Name
              </VisuallyHidden>
              <Input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="First Name*"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
              />
              <Styled.Error>
                {errors.first_name && touched.first_name && errors.first_name}
              </Styled.Error>
            </Styled.Field>
            <Styled.Field width={InputWidth.HALF}>
              <VisuallyHidden as="label" htmlFor="last_name">
                Last Name
              </VisuallyHidden>
              <Input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Last Name*"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
              />
              <Styled.Error>
                {errors.last_name && touched.last_name && errors.last_name}
              </Styled.Error>
            </Styled.Field>
            <Styled.Field>
              <VisuallyHidden as="label" htmlFor="email">
                Email
              </VisuallyHidden>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email*"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Styled.Error>
                {errors.email && touched.email && errors.email}
              </Styled.Error>
            </Styled.Field>
            <Styled.Field>
              <VisuallyHidden as="label" htmlFor="message">
                Message
              </VisuallyHidden>
              <TextArea
                id="name"
                type="textarea"
                rows={8}
                name="message"
                placeholder="Type your message here."
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <Styled.Error>
                {errors.message && touched.message && errors.message}
              </Styled.Error>
            </Styled.Field>
            <Styled.Field>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Styled.Field>
          </form>
        )}
      </Formik>
    </Styled.Form>
  );
};

export default ConnectForm;
