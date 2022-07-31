import React from 'react';
import { FormField, TextArea, TextInput } from 'grommet';

const FormInput = (props: { name: string, type?: string }) => {
  return (
    <FormField
      name={props.name}
      htmlFor={props.name}
      label={props.name.slice(0,1).toUpperCase() + props.name.slice(1)}
      required={true}
    >
      {props.name !== 'message' && <TextInput id={props.name} name={props.name} type={props.type} />}
      {props.name === 'message' && <TextArea id={props.name} name={props.name} />}
    </FormField>
  )
}

export default FormInput;