import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text' 
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Contact Name'
          aria-label='Contact Name'
        />
      </label>
      <hr/>
      <label>
        <input
          type='tel'
          name='phone'
          //regex fir UK mob numbers
          pattern="^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder='Contact Phone (+447222555555 | +44 7222 555 555 | (0722) 5555555 #2222)'
          aria-label='Contact Phone'
        />
      </label>
      <hr/>
      <label>
        <input
          type='email' 
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Contact Email'
          aria-label='Contact Email'
        />
      </label>
      <hr/>
      <input type='submit' value='Add Contact' aria-label='Add Contact'/>
    </form>
  );
};