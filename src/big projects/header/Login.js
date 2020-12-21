import React from 'react';
import { useGlobalContext } from '../context';
import './header.css';

const Login = () => {
  const { showModal, setShowModal, setLoading, accountLogin, setAccountLogin,
    passwordLogin, setPasswordLogin, checkLogin, setCheckLogin } = useGlobalContext();

  const handleCloseModal = () => {
    setShowModal(false)
    setAccountLogin('')
    setPasswordLogin('')

    setTimeout(() => {
      setLoading(false)
      setShowModal(true)
    }, 500);
  };

  const handleSubmitLogin = () => {
    if (!accountLogin) {
      setCheckLogin(false)
    }
  }

  const handleKeyDown = () => {
    if (accountLogin) {
      setCheckLogin(true)
    }
  }

  return (
    <>
      <div className={`modal ${showModal ? 'show-modal' : ''}`}>
        <div className="modal-container">
          <div className="modal-header">
            <h3 className="modal-title">Dang nhap</h3>
            <button
              className="close-modal-btn"
              onClick={handleCloseModal}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <hr />
          <div className="modal-content">
            {/* account-email */}
            <div className="modal-account-email">
              <label htmlFor="account-email">Tai khoan hoac email</label>
              <input type="text" name="account-email" value={accountLogin} onChange={(e) => setAccountLogin(e.target.value)} onKeyDown={handleKeyDown} />
              <p className="modal-check">
                {checkLogin ? '' : `Nhap tai khoan hoac email`}
              </p>
            </div>
            {/* password */}
            <div className="modal-password">
              <label htmlFor="password">Mat khau</label>
              <input type="password" name="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
              {/* <p className="modal-check">
                {checkLogin ? '' : `Nhap mat khau`}
              </p> */}
            </div>

            {/* login-btn */}
            <div className="modal-btn">
              <button
                className="login-btn"
                onClick={handleSubmitLogin}
              >
                Dang nhap
              </button>
              <button className="new-account-btn">Tao moi tai khoan</button>
              <button className="forget-password-btn">Bam vao day neu quen mat khau</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;