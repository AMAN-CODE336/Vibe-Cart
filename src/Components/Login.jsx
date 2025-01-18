
import { useReducer } from "react"




const initialstate = {
  FormData: {
    username: "",
    password: "",
  }
}
function reducer(state, action) {
  switch (action.type) {
    case "add_username":
      return {
        ...state,
        formdata: { ...state.formdata, username: action.payload }
      }
    case "add_password ":
      return {
        ...state,
        formdata: { ...state.formdata, password: action.payload }

      }
    default:
      return state
  }
}


export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialstate)

  return (
    <section>
      <div className='flex justify-center items-center w-full h-screen'>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => {
                  dispatch({ type: "add_username", payload: e.target.value })
                }
                }

                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  dispatch({ type: "add_password", payload: e.target.value })
                }
                }

                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"

                  className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

