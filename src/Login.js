import React, { useState } from 'react';

function Login({ handleLogin, fetchFavorites }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        }

        fetch('http://localhost:3001/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: user})
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            handleLogin(data.user)
            fetchFavorites()
            setUsername("")
            setPassword("")
        })

    }
    return (
        <div>
          <h1>Log In</h1>        
          <form onSubmit={handleSubmit}>
           <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />         
          <button placeholder="submit" type="submit">Log In</button>          
          </form>
        </div>
    )
}

export default Login;
// import axios from 'axios';
// import {Link} from 'react-router-dom';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       username: '',
//       password: '',
//       errors: ''
//      };
//   }
// handleChange = (event) => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   };

// handleSubmit = (event) => {
//     event.preventDefault()
//     const user = {
//         username: username,
//         password: password}

// axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
//     .then(response => {
//       if (response.data.logged_in) {
//         this.props.handleLogin(response.data)
//         this.redirect()
//       } else {
//         this.setState({
//           errors: response.data.errors
//         })
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   };
// redirect = () => {
//     this.props.history.push('/')
//   }
// handleErrors = () => {
//     return (
//       <div>
//         <ul>
//         {this.state.errors.map(error => {
//         return <li key={error}>{error}</li>
//           })}
//         </ul>
//       </div>
//     )
//   };
// render() {
//     const {username, password} = this.statereturn (
        
//       <div>
//         <h1>Log In</h1>        
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
// <button placeholder="submit" type="submit">
//             Log In
//           </button>          
//           <div>
//             or <Link to='/signup'>sign up</Link>
//           </div>
//          </form>
//       </div>
//     );
//   }
// }
// export default Login;