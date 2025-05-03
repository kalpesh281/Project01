import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <div className="mt-4">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-3">Page Not Found</h2>
                    <p className="text-gray-600 mb-5">The page you are looking for does not exist.</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound