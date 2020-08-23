import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PartnerContext from '../../Context/PartnerContext';

const LoginService = () => {
  const { setEmail, setPassword } = useContext(PartnerContext);
  const creatInputs = (classText='sem prop', text='sem prop', typeInput='text', setValue) => {
    return(
      <div className={classText}>
        <label htmlFor={classText}>{ text }</label>
        <input type={typeInput}
        className=''
        name={classText}
        onChange={(e) => setValue(e.target.value)}
        />
      </div>
    )
  }
  return (
    <div id='login'>
      <form>
        {creatInputs('email', 'Email', 'email', setEmail)}
        {creatInputs('password', 'Password', 'password', setPassword)}
        <div className='createAccount'>
          <button>
            <Link
              style={{textDecoration: 'none'}}
              type='button'
              to={`/authentication`}
            >Log In</Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginService;
