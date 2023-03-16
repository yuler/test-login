import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login'
import GithubLogin from 'react-github-login'
import { OrbitControls, Stars } from '@react-three/drei'
import Earth from './Earth'

const CLIENT_ID_GOOGLE = 'your-google-client-id'
const CLIENT_ID_GITHUB = 'your-github-client-id'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateForm = (): boolean => {
    // Add form validation logic here
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle login with email and password
    }
  }

  const handleGoogleLoginSuccess = (response: GoogleLoginResponse) => {
    // Handle login with Google OAuth
  }

  const handleGoogleLoginFailure = (error: any) => {
    // Handle Google login error
  }

  const handleGithubLoginSuccess = (response: any) => {
    // Handle login with Github OAuth
  }

  const handleGithubLoginFailure = (error: any) => {
    // Handle Github login error
  }

  return (
    <>
      <div className="absolute inset-0 w-screen h-screen -left-1/4">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <Earth position={[0, 0, 0]} scale={[0.35, 0.35, 0.35]} />
        </Canvas>
      </div>
      <div className="min-h-screen flex items-center justify-center w-[800px] mx-auto relative z-10">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full">
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
    </>
  )
}

export default Login
