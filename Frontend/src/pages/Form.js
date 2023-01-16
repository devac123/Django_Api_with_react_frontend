import React from 'react'
import { useFormik } from 'formik';


export default function Form() {



    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
  return (
    <>
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <input
         id="name"
         name="name"
         type="password"
         onChange=''
         value=''
       />
 
       <button type="submit">Submit</button>
    </form>
    </>
  )
}
