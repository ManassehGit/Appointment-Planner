import React, {useState, useEffect} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addAppointment, contacts}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currentTitle, setCurrentTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const defaultListValue = 'No contact selected';

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(currentTitle, contact, date, time);
   setCurrentTitle("");
   setContact("");
   setDate("");
   setTime("");   
   document.getElementById('contactList').value = defaultListValue;
  };

  useEffect(() => {
    
    for(const appointmentItem of appointments) {
      if (appointmentItem.date === date && appointmentItem.time === time) {
        console.log('Appointment is already booked.'); 
      } 
    }

  }, [appointments, date, time]);

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={contacts}
        setTitle={setCurrentTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        time={time}
        setDate={setDate}
        setTime={setTime}
        handleSubmit={handleSubmit}
        defaultListValue={defaultListValue}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={appointments}/>
      </section>
    </div>
  );
};
