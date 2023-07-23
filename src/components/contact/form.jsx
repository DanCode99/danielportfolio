import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const  Form = () => {
  const [state, handleSubmit] = useForm("xnqknglj");

  if (state.succeeded) {
      return <p className='contact-msg'>Thanks for contact me!</p>;
  }

  return (
      <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
