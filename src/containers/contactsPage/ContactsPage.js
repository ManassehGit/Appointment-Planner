import React from "react";
import { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicate){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
  
    for(const contactItem of contacts) {
      if (contactItem.name === name) {
        if (!duplicate) {
          setDuplicate(true);
          console.log('Contact is already in the list.');
        } 
        return;
      } else {
        setDuplicate(false);
      }
    }

  }, [contacts, name, duplicate]);


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        phone={phone}
        email={email}
        setEmail={setEmail}
        setPhone={setPhone}
        setName={setName}
        handleSubmit={handleSubmit}        
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={contacts} />
      </section>
    </div>
  );
};
