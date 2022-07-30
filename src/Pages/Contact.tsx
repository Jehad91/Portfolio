import React from 'react';
import { Button, Form } from 'grommet';
import FormInput from '../Components/FormInput';
import Header from '../Components/Heading';
import emailjs from 'emailjs-com';

const Contact = () => {
  
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm('service_tzac04h', 'template_x9sb6fi', e.target, 'Zutsg4V2XwjAenEnJ')
        .then((res) => {
          console.log(res)
        }).catch((err) => {
            console.log(err)
        })
  }
  return (
    <>
      <Header title="Contact" colour="#ffffff26" top="40px" right="20%"/>
        <Form
          messages={{ invalid: "invalid", required: "required" }}
          onSubmit={sendEmail}
          style={{
            width: "70vw",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <FormInput name="name" type="text"  />
          <FormInput name="email" type="email" />
          <FormInput name="message" />
          <Button
            type="submit"
            color="#fcf6f4"
            label="Send"
            fill={true}
          />
        </Form>
    </>
  )
}

export default Contact;