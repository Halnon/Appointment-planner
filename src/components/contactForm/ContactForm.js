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
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text' 
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Contact Name'
            aria-label='Contact Name'
          />
        </label>
        <hr/>
        <label>
          <input
            type='tel'
            name='phone'
            pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Contact Phone'
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
            placeholder='Contact Email'
            aria-label='Contact Email'
          />
        </label>
        <hr/>
        <input type='submit' value='Add contact' aria-label='Add contact'/>
      </form>
    </>
  );
};