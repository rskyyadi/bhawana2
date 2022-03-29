import React, { useState } from "react"
import { Col } from "react-bootstrap"
import { ActionButton } from "components"
import Config from "config"
import { 
  Formik 
} from "formik"
import * as Yup from "yup"
import {
  IoPersonOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoEyeOffOutline
} from "react-icons/io5"


const Login = ({handleLogin}) => {
//DETAILS
  const [details, setDetails] = useState({
    username:'',
    password:''
  })
//CONFIG
  const { MODUL } = Config
//INPUT USERNAME
  const Input = props => (
    <div className="mb-3">
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <span className={`input-group-text bg-white ${props.error ? 'border border-danger' : ''}`}>
            {props.icon}
          </span>
        </div>
        <input 
          {...props}
          className={`form-control ${props.error ? 'is-invalid' : ''}`}
          style={{borderLeft: 'none'}}
        />
      </div>
      {props.error && (
        <div class="text-danger">
          <small>{props.errorText}</small>
        </div>
      )}
    </div>
  )
//INPUT PASSWORD
  const InputPassword = props => {
    const [showPass, setShowPass] = useState(false)

    return (
      <div className="mb-3">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className={`input-group-text bg-white ${props.error ? 'border border-danger' : ''}`}>
              {props.icon}
            </span>
          </div>
          <input 
            {...props}
            type={showPass ? 'text' : 'password'}
            className={`form-control ${props.error ? 'is-invalid' : ''}`}
            style={{
              borderLeft: 'none',
              borderRight: 'none',
            }}
          />
          <div className="input-group-append" 
            style={{cursor: 'pointer'}}
            onClick={() => setShowPass(!showPass)}
          >
            <span className={`input-group-text bg-white ${props.error ? 'border border-danger' : ''}`}>
              {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </div>
        </div>
        {props.error && (
          <div class="text-danger">
            <small>{props.errorText}</small>
          </div>
        )}
      </div>
    )
  }
//LOGO INPUT
  const FormLogo = () => (
    <div sm={3} className="d-flex flex-column justify-content-center align-items-center">
      <img src={Config.LOGO} width={120} />
      <div className="pt-2 text-center" style={{width: '100%'}}>
        <b className="text-uppercase">LOGIN {MODUL}</b>
      </div>
    </div>
  )
//FORM LOGIN
  const FormLogin = () =>  {
  //INITIAL VALUES
    const formValues = {
      username: details.username,
      password: details.password
    }
  //VALIDATION
    const formValidation = Yup.object().shape({
      username: Yup.string().required("Masukan username"),
      password: Yup.string().required("Masukan password"),
    })
  //HANDLE SUBMIT
    const formSubmit = ({ resetForm }) => {
      handleLogin(details)
        resetForm({
          username:'',
          password:''
        })
    }
    //LAYOUT
    return(
      <Formik
        initialValues={formValues}
        validationSchema={formValidation}
        onSubmit={formSubmit}>

        {({ values, errors, touched, isSubmitting, handleChange, handleSubmit }) => (

          <form onSubmit={handleSubmit}>
            <hr />
            <Input
              icon={<IoPersonOutline />}
              type="text"
              name="username"
              placeholder="Username"
              defaultValue={values.username}
              onBlur={(e) => setDetails({...details, username: e.target.value})}
              error={errors.username && touched.username && true}
              errorText={errors.username}
            />
            <InputPassword
              icon={<IoLockClosedOutline />}
              type="text"
              name="password"
              placeholder="Password"
              defaultValue={values.password}
              onBlur={(e) => setDetails({...details, password: e.target.value})}
              error={errors.password && touched.password && true}
              errorText={errors.password}
            />
            <ActionButton 
              type="submit" 
              text="Login" 
              className="col mt-2" 
              loading={isSubmitting}
            />
          </form>
        )}
      </Formik>
    )
  }


  return (
    <div 
      className="d-flex justify-content-center align-items-center p-3"
      style={{height: '100vh', width: '100vw'}}>

      <Col xs={12} sm={6} md={4} lg={3} className="py-4 bg-white rounded shadow">
        <FormLogo />
        <FormLogin />
      </Col>

    </div>
  )
}
export default Login

//SUBMIT HANDLE
// const submitHandler = e => {
//   e.preventDefault()
//   handleLogin(details)
// }

// import JWTDecode from "jwt-decode"
// import { AuthMethod, AuthContext } from "utilities"
// import { AuthApi } from "api"

// const { dispatch } = useContext(AuthContext)
