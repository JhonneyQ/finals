import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    price: Yup.number().min(2, 'Too Short!')
    .max(300, 'Too Long!').required('Required'),
  });

const Add = () => {


    const [cards, setCards] = useState([])

    const getAllData = async () => {
        try {
            const res = await axios("http://localhost:3000/")
            setCards(res.data.data)
        } catch (error) {
            console.log(error);

        }
    }
    const dell = async (id) => {
        await axios.delete(`http://localhost:3000/${id}`)
        getAllData()
    }

    useEffect(() => {
        getAllData()
    }, [])
    return (
        <section>
            <div>
                <h1>Signup</h1>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        price: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values =>  {
                        // same shape as initial values
                        async () =>{
                        await axios.post("http://localhost:3000/",values)
                        getAllData()
                    }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="title" />
                            {errors.title && touched.title ? (
                                <div>{errors.title}</div>
                            ) : null}
                            <Field name="description" />
                            {errors.description && touched.description ? (
                                <div>{errors.description}</div>
                            ) : null}
                            <Field name="price" />
                            {errors.price && touched.price ? (
                                <div>{errors.price}</div>
                            ) : null}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>description</th>
                            <th>price</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards && cards.map((p) => (
                            <tr key={p._id}>
                                <th>{p.title}</th>
                                <th>{p.description}</th>
                                <th>{p.price}</th>
                                <th><button onClick={async ()=>dell(p._id)}>
                                    delete
                                </button></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Add