import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const ContactLeft = () => {

    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: ''
    })

    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg })
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    async function onSubmitForm(values) {
        if (values.name.trim() === '' || values.message.trim() === '') {
            window.alert("please don't put only white spaces")
            return
        }
        showAlert(true, 'success', "sending your submission")
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: values,
        }

        try {
            const response = await axios(config)
            if (response.status === 200) {
                reset()
                showAlert(true, 'success', "thank you for your message. I will contact you soon")
                console.log('sucess')
            }
        }
        catch (err) {
            showAlert(true, 'failed', "something went wrong")
            console.log(err)
        }
    }
    return (
        <div className="contact__left">
            <h3>Get In Touch</h3>

            <form onSubmit={handleSubmit(onSubmitForm)} className="form">
                <div className="form__control">
                    <label>Your Name</label>
                    <input type="text" name="name" {...register("name", { required: { value: true, message: 'please enter your name' } })} className='form__input' autoComplete='off' />
                    <span className='error'>{errors?.name?.message}</span>
                </div>
                <div className="form__control">
                    <label>Your Email</label>
                    <input type="text" name="email" {...register("email", {
                        required: { value: true, message: 'please enter your email' },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })} className='form__input' autoComplete='off' />
                    <span className='error'>{errors?.email?.message}</span>
                </div>
                <div className="form__control">
                    <label>Your Phone</label>
                    <input type="text" name="phone"{...register("phone", {
                        required: { value: true, message: 'please enter your phone number' },
                        pattern: {
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                            message: "invalid phone number"
                        }
                    })} className='form__input' autoComplete='off' />
                    <span className='error'>{errors?.phone?.message}</span>
                </div>
                <div className="form__control">
                    <label>Message </label>
                    <textarea name="message" id=""{...register("message", {
                        required: { value: true, message: 'please enter your message' },
                        maxLength: {
                            value: 1000,
                            message: "Your message can't be more than 1000 characters",
                        },
                        minLength: {
                            value: 20,
                            message: 'Your message must be longer than this!',
                        },
                    })} cols="30" rows="8" className='form__input' autoComplete='off'></textarea>
                    <span className='error'>{errors?.message?.message}</span>
                </div>
                <button type='submit' className="btn">Submit</button>
            </form>
            {alert.show && <>
                <p className={`${alert.type}`}>{alert.msg}</p>
            </>}
        </div>
    )
}

export default ContactLeft