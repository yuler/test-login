import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import GithubLogin from 'react-github-login';
import { OrbitControls, Stars } from '@react-three/drei';

const CLIENT_ID_GOOGLE = 'your-google-client-id';
const CLIENT_ID_GITHUB = 'your-github-client-id';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = (): boolean => {
    // Add form validation logic here
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login with email and password
    }
  };

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse) => {
    // Handle login with Google OAuth
  };

  const handleGoogleLoginFailure = (error: any) => {
    // Handle Google login error
  };

  const handleGithubLoginSuccess = (response: any) => {
    // Handle login with Github OAuth
  };

  const handleGithubLoginFailure = (error: any) => {
    // Handle Github login error
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Canvas>
        <OrbitControls />
        <Stars />
      </Canvas>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
          placeholder="邮箱"
        />
        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
          placeholder="密码"
        />
        <button type="submit" className="block w-full mb-4 p-2 bg-blue-600 text-white rounded">
          登录
        </button>
        {/* Google Login */}
        <GoogleLogin
          clientId={CLIENT_ID_GOOGLE}
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
          className="block w-full mb-4 p-2 border border-gray-300 rounded text-center"
        />
        {/* Github Login */}
        <GithubLogin
          clientId={CLIENT_ID_GITHUB}
          onSuccess={handleGithubLoginSuccess}
          onFailure={handleGithubLoginFailure}
          className="block w-full p-2 border border-gray-300 rounded text-center"
        />
      </form>
    </div>
  );
};

export default Login;
