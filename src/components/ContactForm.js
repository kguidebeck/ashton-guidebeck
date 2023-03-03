import * as React from 'react';
import { useState } from 'react';
import { css, styled } from '../styles/stitches.config';
import Button from './UnstyledButton';
import VisuallyHidden from './VisuallyHidden';
import netlifySubmit from '../util/netlifySubmit';

const StyledForm = styled('form', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '20px',

  '@bpPortrait': {
    marginTop: '40px',
  },

  '@bpMobile': {
    gridTemplateColumns: '1fr',
  },
});

const InputWrap = styled('div', {
  position: 'relative',

  '&.submit': {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  variants: {
    width: {
      full: {
        gridColumn: '1 / -1'
      }
    }
  }
});

const StyledLabel = styled('label', {
  color: '$blue',
  display: 'block',
  fontSize: '14px',
  fontWeight: '$semiBold',
  fontFamily: '$noto',
  textTransform: 'uppercase',
  marginBottom: '5px',
});

const inputStyles = css({
  border: '3px solid $blue',
  color: '$blue',
  backgroundColor: 'transparent',
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  fontFamily: '$noto',

  '&:focus': {
    outline: '2px dotted $blue',
  },

  '&::placeholder':  {
    color: '$blue',
    opacity: '1',
  }
});

const StyledInput = styled('input', inputStyles);

const StyledTextArea = styled('textarea', inputStyles, {
  resize: 'none',
});

const StyledSubmit = styled(Button, {
  position: 'relative',
  backgroundColor: '$darkBlue',
  color: '$white',
  padding: '10px 30px',
  fontFamily: '$noto',
  textTransform: 'uppercase',
  fontWeight: '$bold',

  '&::before': {
    content: "",
    position: 'absolute',
    abs: '-5px',
    border: '2px solid $darkBlue',
    opacity: 0,
    transition: 'opacity 350ms ease',
  },

  '&:hover': {
    '&::before': {
      opacity: 1,
    }
  }
});

const StyledError = styled('span', {
  position: 'absolute',
  fontSize: '11px',
  left: '5px',
  bottom: '-16px',
  fontFamily: '$noto',
  textTransform: 'uppercase',
  color: '$coral',
});

const ThankYou = styled('span', {
  display: 'block',
  fontFamily: '$noto',
  fontSize: '18px',
  textTransform: 'uppercase',
  color: '$darkBlue',
  textAlign: 'center',
  marginTop: '20px',
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialValues = { 
    'form-name': 'contact',
    firstName: '',
    lastName: '',
    emailAddress: '',
    message: '',
  };
  const [values, setValues] = useState({...initialValues});
  const [errors, setErrors] = useState({});
  const [invalidForm, setInvalidForm] = useState(true);
  const [submissonComplete, setSubmissonComplete] = useState(false);

  const handleValidation = () => {
    if (!values.firstName) {
      setErrors(prevState => ({
        ...prevState,
        'firstName': 'Please enter your first name.'
      }));
    }
    if (!values.lastName) {
      setErrors(prevState => ({
        ...prevState,
        'lastName': 'Please enter your last name.'
      }));
    }
    if (!values.emailAddress) {
      setErrors(prevState => ({
        ...prevState,
        'emailAddress': 'Please enter your email address.'
      }));
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)
    ) {
      setErrors(prevState => ({
        ...prevState,
        'emailAddress': 'Please enter a valid email address.'
      }));
    }
    if (!values.message) {
      setErrors(prevState => ({
        ...prevState,
        'message': 'Please provide a brief message.'
      }));
    }

    if (Object.keys(errors).length === 0) {
      setInvalidForm(false);
    }
  };

  const handleChange = (e) => {
    const inputId = e.target.id;

    setValues(prevState => ({
      ...prevState,
      [inputId]: e.target.value,
    }))
  };

  const handleBlur = (e) => {
    const inputId = e.target.id;

    if (inputId === 'firstName') {
      if (!values.firstName) {
        setErrors(prevState => ({
          ...prevState,
          'firstName': 'Please enter your first name.'
        }));
      } else {
        setErrors(prevState => ({
          ...prevState,
          'firstName': null,
        }));
      }
    }
    if (inputId === 'lastName') {
      if (!values.lastName) {
        setErrors(prevState => ({
          ...prevState,
          'lastName': 'Please enter your last name.'
        }));
      } else {
        setErrors(prevState => ({
          ...prevState,
          'lastName': null,
        }));
      }
    }
    if (inputId === 'emailAddress') {
      if (!values.emailAddress) {
        setErrors(prevState => ({
          ...prevState,
          'emailAddress': 'Please enter your email address.'
        }));
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)
      ) {
        setErrors(prevState => ({
          ...prevState,
          'emailAddress': 'Please enter a valid email address.'
        }));
      } else {
        setErrors(prevState => ({
          ...prevState,
          'emailAddress': null,
        }));
      }
    }
    if (inputId === 'message') {
      if (!values.message) {
        setErrors(prevState => ({
          ...prevState,
          'message': 'Please provide a brief message.'
        }));
      } else {
        setErrors(prevState => ({
          ...prevState,
          'message': null,
        }));
      }
    }
  };

  const resetForm = () => {
    setErrors({});
    setValues({...initialValues});
    setInvalidForm(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation();

    console.log('submitting');

    if (!invalidForm) {
      setIsSubmitting(true);

      netlifySubmit(values)
        .then(() => {
          setSubmissonComplete(true);
          setIsSubmitting(false);
          resetForm();
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  };

  return (
    <>
      <StyledForm
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <VisuallyHidden>
          <input
            name="form-name"
            value="contact"
            type="hidden"
          />
          <label htmlFor="bot-field">
            Don&apos;t fill this out if you&apos;re human:
            <input name="bot-field" />
          </label>
        </VisuallyHidden>

        <InputWrap>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <StyledInput
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName ?
            <StyledError>{errors.firstName}</StyledError>
            : null
          }
        </InputWrap>

        <InputWrap>
          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          <StyledInput
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName ?
            <StyledError>{errors.lastName}</StyledError>
            : null
          }
        </InputWrap>

        <InputWrap width="full">
          <StyledLabel htmlFor="emailAddress">Email Address</StyledLabel>
          <StyledInput
            type="email"
            name="emailAddress"
            id="emailAddress"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.emailAddress ?
            <StyledError>{errors.emailAddress}</StyledError>
            : null
          }
        </InputWrap>

        <InputWrap width="full">
          <StyledLabel htmlFor="message">Message</StyledLabel>
          <StyledTextArea
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            rows="4"
          />
          {errors.message ?
            <StyledError>{errors.message}</StyledError>
            : null
          }
        </InputWrap>

        <InputWrap width="full" className="submit">
          <StyledSubmit
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Submitting'
              : 'Let’s Connect'
            }
          </StyledSubmit>
        </InputWrap>

        {submissonComplete ?
          <InputWrap width="full">
            <ThankYou>Thank you for your message, I will be in touch soon.</ThankYou>
          </InputWrap>
          : null
        }
      </StyledForm>
    </>
  );
};

export default ContactForm;
