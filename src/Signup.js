import React, { useState } from 'react';
import axios from "axios";

function Signup({ handleLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleUsernameOnChange(e){
        setUsername(e.target.value)
    }
    function handlePasswordOnChange(e){
        setPassword(e.target.value)
    }
    function handlePasswordConfirmationOnChange(e){
        setPasswordConfirmation(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newAccount = {
            username: username,
            password: password,
            password_confirmation: passwordConfirmation
        }

        console.log(newAccount)

    //     axios.post('http://localhost:3001/users', {user: newAccount}, {withCredentials: true})
    // .then(response => {
    //   if (response.data.status === 'created') {
    //     this.props.handleLogin(response.data)
    //     this.redirect()
    //   } else {
    //     this.setState({
    //       errors: response.data.errors
    //     })
    //   }
    // })
    // .catch(error => console.log('api errors:', error))
  

        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: newAccount})
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            handleLogin(data.user)
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
        })
    }

    return (
        <div>
          <h1>Sign Up</h1>        
          <form onSubmit={handleSubmit}>
           <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameOnChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordOnChange}
          />          
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationOnChange}
          />
          <button placeholder="submit" type="submit">Sign Up</button>
        </form>
      </div>
    )
}

export default Signup;
// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       username: '',
//       email: '',
//       password: '',
//       password_confirmation: '',
//       errors: ''
//      };
//   }
// handleChange = (event) => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   };
//   handleSubmit = (event) => {
//     event.preventDefault()
//     const {username, password, password_confirmation} = this.state
//     let user = {
//       username: username,
//       password: password,
//       password_confirmation: password_confirmation
//     }

// redirect = () => {
//     this.props.history.push('/')
//   }
// handleErrors = () => {
//     return (
//       <div>
//         <ul>{this.state.errors.map((error) => {
//           return <li> key={error}{error}</li>
//         })}
//         </ul> 
//       </div>
//     )
//   };
// render() {
//     const {username, password, password_confirmation} = this.state
// return (
//       <div>
//         <h1>Sign Up</h1>        
// <form onSubmit={this.handleSubmit}>
//           <input
//             placeholder="username"
//             type="text"
//             name="username"
//             value={username}
//             onChange={this.handleChange}
//           />
//           <input 
//             placeholder="password"
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />          
//           <input
//             placeholder="password confirmation"
//             type="password"
//             name="password_confirmation"
//             value={password_confirmation}
//             onChange={this.handleChange}
//           />
//           <button placeholder="submit" type="submit">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
// export default Signup;