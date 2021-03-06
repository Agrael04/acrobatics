import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'

export default ({ field, label, required, disabled, onChange, className }) => {
  return (
    <FormControl className={ className } required={required}>
      <InputLabel>{label}</InputLabel>
      <Input {...field.input} disabled={disabled} onChange={ onChange || field.input.onChange}/>
      {field.meta.error && field.meta.touched && (
        <Typography>{field.meta.error}</Typography>
      )}
    </FormControl>
  )
}
