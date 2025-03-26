import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup'
import { useFirebase } from '../../firebase/FirebaseContext'
import {Link, useNavigate} from 'react-router-dom'
import { useAppwrite } from '../../appwrite/AppwriteContext';
const signUpScehma = Yup.object({
    name:Yup.string().min(2).max(30).required("Please enter your name"),
    email:Yup.string().email().required("*Please enter your email"),
    password: Yup.string().min(6).required("*Please enter your password"),
    number:Yup.string().min(10).max(10).required("Please provide a phone number")
})
const initialValues = {
    name:"",
    email:"",
    password:"",
    number:""
}
const Register = ({setFoot,setNav}) => {
    const navigate = useNavigate();
    const appwrite = useAppwrite()
    useEffect(()=>{
        setFoot(false);
        setNav(false);
    },[])
    const { values, handleBlur, handleChange, touched, handleSubmit, errors } = useFormik({
        initialValues,
        validationSchema:signUpScehma,
        onSubmit: (values, action) => {
          const myPromise=appwrite.signup(values.email,values.password,values.name,"+91"+values.number)
          toast.promise(myPromise, {
            loading: "Signing in...",
            success: "Signin successful! Redirecting...",
            error: (error) => error.message || "Something went wrong",
        });
          action.resetForm();
        }
      })    
     
     useEffect(()=>{
       if(appwrite.loggedInUser){
           navigate("/")
       }
           setFoot(false);
           setNav(false);
       },[appwrite.loggedInUser])
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-100 p-5 sm:py-10">

    {/* Login component */}
    <div className="flex shadow-md flex-col sm:flex-row ">
        {/* Login form */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '32rem' }}>
            <div className="w-72">
                {/* Heading */}
                <h1 className="text-xl font-semibold">Welcome To Marble Inlay</h1>
                <small className="text-gray-400">Please enter your details</small>

                {/* Form */}
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-semibold">Name</label>
                        <input type="text" placeholder="Enter your name" className="block w-full rounded-md border border-gray-300 focus:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700 py-1 px-1.5 text-gray-500"
                        name='name'
                         value={values.name}
                         onChange={handleChange}
                         onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? <p className='text-red-500 text-sm m-0.5'>{errors.name}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-semibold">Email</label>
                        <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700 py-1 px-1.5 text-gray-500" 
                        name='email'
                         value={values.email}
                         onChange={handleChange}
                         onBlur={handleBlur}/>
                         {errors.email && touched.email ? <p className='text-red-500 text-sm m-0.5'>{errors.email}</p> : null}
                    </div>

                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-semibold">Phone Number</label>
                        <input type="text" placeholder="eg:939492392" className="block w-full rounded-md border border-gray-300 focus:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700 py-1 px-1.5 text-gray-500" 
                        name='number'
                         value={values.number}
                         onChange={handleChange}
                         onBlur={handleBlur}/>
                         {errors.number && touched.number ? <p className='text-red-500 text-sm m-0.5'>{errors.number}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-semibold">Password</label>
                        <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700 py-1 px-1.5 text-gray-500" 
                        name='password'
                         value={values.password}
                         onChange={handleChange}
                         onBlur={handleBlur}/>
                         {errors.password && touched.password ? <p className='text-red-500 text-sm m-0.5'>{errors.password}</p> : null}
                    </div>

                    <div className="mb-3 flex flex-wrap content-center">
                        <input id="remember" type="checkbox" className="mr-1 checked:bg-slate-700" /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                        <a href="#" className="text-xs font-semibold text-slate-700">Forgot password?</a>
                    </div>

                    <div className="mb-3">
                        <button type='submit' className="mb-1.5 block w-full text-center text-white bg-slate-700 hover:bg-slate-900 px-2 py-1.5 rounded-md">Sign in</button>
                    </div>
                </form>
                {/* Footer */}
                <div className="text-center">
                    <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                    <Link to="/login" className="text-xs font-semibold text-slate-700">Login</Link>
                </div>
            </div>
        </div>

        {/* Login banner */}
        <div className="hidden sm:flex bg-white flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
            <img className="w-full h-[80%] bg-center bg-no-repeat bg-cover rounded-r-md" src="https://img.freepik.com/free-vector/access-control-system-abstract-concept-vector-illustration-security-system-authorize-entry-login-credentials-electronic-access-password-passphrase-pin-verification-abstract-metaphor_335657-5746.jpg?w=740&t=st=1701424258~exp=1701424858~hmac=b66b75a3bff83174c95f51576dce7a45c1ebe32152a3954777191c76fe39a33f" alt="Login Banner" />
        </div>
        <Toaster />
    </div>
</div>
  )
}

export default Register