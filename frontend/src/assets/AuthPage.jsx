// const AuthPage = (props) => {
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { value } = e.target[0];
//     props.onAuth({ username: value, secret: value });
//   };

//   return (
//     <div className="background">
//       <form onSubmit={onSubmit} className="form-card">
//         <div className="form-title">Welcome 👋</div>

//         <div className="form-subtitle">Set a username to get started</div>

//         <div className="auth">
//           <div className="auth-label">Username</div>
//           <input className="auth-input" name="username" />
//           <button className="auth-button" type="submit">
//             Enter
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AuthPage;
import axios from 'axios'
import PropTypes from 'prop-types';


const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post(
      'http://localhost:3001/authenticate',
      {username: value}
    )
    .then(r => props.onAuth({ ...r.data, secret: value }))
    .catch(e => console.log('error',e))
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
