import './Loggin.css';
import eye from '../../images/eye-disable.svg'
import basket from '../../images/shopping-cart.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Loggin = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
         console.log('username', username)
         console.log('password', password)
         setUsername('')
         setPassword('')
    }

    function toggleShowPassword(){
        setShowPassword(!showPassword)
    }

 
    return(
        <>
        <div className='background'>
            <img src={basket} alt="basket" />
            <h2 className='logo'>MOBI MARKET</h2>
        </div>
        <div className="content">
            <form className='formUser' onSubmit={handleSubmit}>
                <label htmlFor="username" className={username ? 'active' : 'non_active'}>Имя пользователя</label>
                <input className='name formInput' 
                        type="text" 
                        placeholder='Имя пользователя' 
                        name="name" 
                        id='userName' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/> 
                <label htmlFor="userpassword" className={password ? 'active' : 'non_active'}>Пароль</label>
                <div className="passwordInput">
                <input className='password formInput' 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder='Пароль' 
                        name="password" 
                        id="userPassword" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                <button type='button' onClick={toggleShowPassword}><img src={eye} alt="huge_eye" /></button>
                </div>
                <a href='#' className='forgot'>Забыли пароль?</a>
                <button className='login_btn'>Войти</button>
                <Link to='/register' className='register_btn'>Зарегистрироваться</Link>
            </form>
        </div>
        
        </>
    )
}

export default Loggin

