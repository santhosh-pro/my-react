import { ErrorMessage, useField } from 'formik';

export const TextInputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field} {...props}
      />
      <ErrorMessage component="div" name={field.name} />
    </div>
  )
}