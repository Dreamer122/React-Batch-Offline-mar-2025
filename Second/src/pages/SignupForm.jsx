import React ,{ useState} from 'react'
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
export const SignupForm = () => {
  // const [username, setUsername] = useState('');
  // const [phone,setPhone]=useState("")
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [signupdata, setSignupdata]=useState({
    username:'',
    phone:'',
    email:'',
    password:'',
    gender:"",
    hobbies:[]
  })

  const [error,setError]=useState({
    username:"",
    phone:"",
    email:"",
  });

  // const {username,phone,email,password}=signupdata;

  const handleinput=(e)=>{
    const {name,value,type}=e.target
    handleerror(name,value)

    if(type=="radio"){
      if(e.target.checked){
        setSignupdata((prevstate)=>{
          return({
            ...prevstate,
            [name]:value
          })
        })

    }
  }
  else if(type=="checkbox"){
    if(e.target.checked){
      setSignupdata((prevstate)=>{
        return({
          ...prevstate,
          [name]:[...prevstate.hobbies,value]
        })
      })
    }
    else{
      setSignupdata((prevstate)=>{
        return({
          ...prevstate,
          [name]:prevstate.hobbies.filter((v)=>value!==v)
        })
      })
    }
  }
    else{
      setSignupdata((prevstate)=>{
        return({
          ...prevstate,
          [name]:value
        })
      })
    }

  console.log(signupdata)
  }


  // handle error

  const handleerror=(name,value)=>{
    if(name==="username"){
      value.length<3?setError((prev)=>{
        return {
          ...prev,
          [name]:" invalid username , name should be 3 character long"
        }
      }):

      setError((prev)=>{
        return {
          ...prev,
          [name]:""
        }
      })
     
    }
    else if(name==="email"){
     !value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?
     setError((prev)=>{
      return {
        ...prev,
        [name]:" invalid email"
        } 
        }):
        setError((prev)=>{
          return {
            ...prev,
            [name]:""
            } 
            })
          }

  }

const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(signupdata);
}

  return (
  <>
  <div>
 



   {/* form starts from here */}

   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handlesubmit}>
          {/* username */}

          <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                username 
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  // required
                  // value={signupdata.username}
                  onChange={handleinput}
                  // autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
               />
              </div>
              {/* <span className='text-xl '>{error?<MdError className='text-red-600' />:<FaCheckCircle className='text-green-600' />}</span> */}
              <span className='text-xl '>{error.username && error.username}</span>
            </div>
          {/* username */}

          {/* phone number */}

          <div>
              <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                phone number 
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  required
                  autoComplete="phone"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              //  value={phone}
               onChange={handleinput}
               />
              </div>
            </div>

          {/* phone number ends here */}
          
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  // required
                  // autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              //  value={email}
               onChange={handleinput}
               />
              </div>
            <span className='text-red-500'>  {error.email && error.email}</span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                // value={password}
                onChange={handleinput

                }
              
              />
              </div>
            </div>
            {/* radio button gender */}

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="Gender" className="block text-sm/6 font-medium text-gray-900">
                  Gender
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="male"
                  name="Gender"
                  type="radio"
                  required
                
                  className="  rounded-md bg-white px-3 py-1.5 text-base text-gray-900   sm:text-sm/6"
                value={"male"}
                onChange={handleinput}
              
              />
              <label htmlFor="male" className=" px-2 text-sm/6 font-medium text-gray-900">
                  male
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="Female"
                  name="Gender"
                  type="radio"
                  required
                
                  className=" px-3 py-1.5 text-base text-gray-900   sm:text-sm/6"
                value={"Female"}
                onChange={handleinput}
              
              />
              <label htmlFor="Female" className="px-2 text-sm/6 font-medium text-gray-900">
                  Female
                </label>
                
              </div>
            </div>

            {/* checkbox  */}

            <div>
            <label htmlFor="Hobbies" className="block px-2 text-sm/6 font-medium text-gray-900">
                Hobbies
                </label>
              <input type="checkbox" id='reading' name='hobbies' value={"reading"}
              onChange={handleinput}

              />
               <label htmlFor="reading" className=" px-2 text-sm/6 font-medium text-gray-900">
                reading
                </label>
              <input type="checkbox" id='painting' name='hobbies' value={"painting"}
              onChange={handleinput}

              />
               <label htmlFor="painting" className=" px-2 text-sm/6 font-medium text-gray-900">
                painting
                </label>
              <input type="checkbox" id='yoga' name='hobbies' value={"yoga"}
              onChange={handleinput}

              />
               <label htmlFor="yoga" className="px-2 text-sm/6 font-medium text-gray-900">
                yoga
                </label>

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>

   {/* form ends from here */}

  </div>
  
  </>
  )
}


