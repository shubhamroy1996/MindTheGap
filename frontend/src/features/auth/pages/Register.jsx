import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import Loader from '../../../components/Loader'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const { loading, handleRegister } = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/")
    }

    if(loading){
        return <Loader text="Constructing Neural Profile..." />
    }

    return (
        <main style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#0a0a0c', color: '#e2e8f0', fontFamily: "'Inter', 'Segoe UI', sans-serif",
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.03), transparent 60%)'
        }}>
            <div style={{
                width: '100%', maxWidth: '420px', padding: '3rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', overflow: 'hidden'
            }}>
                {/* Decorative top bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #00F2FE, #4FACFE)' }} />
                
                <h1 style={{ 
                    fontSize: '2rem', fontWeight: 300, textAlign: 'center', marginBottom: '2.5rem', 
                    letterSpacing: '-0.02em', color: '#fff' 
                }}>
                    Initialize <span style={{ fontWeight: 600, color: '#00F2FE' }}>Access</span>
                </h1>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="username" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8' }}>Alias (Username)</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" id="username" required minLength={3}
                            style={{
                                width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px',
                                color: '#f8fafc', fontSize: '1rem', outline: 'none', transition: 'all 0.3s'
                            }}
                            onFocus={e => { e.currentTarget.style.borderColor = '#00F2FE'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)' }}
                            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="email" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8' }}>Neural Identity (Email)</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" id="email" required
                            style={{
                                width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px',
                                color: '#f8fafc', fontSize: '1rem', outline: 'none', transition: 'all 0.3s'
                            }}
                            onFocus={e => { e.currentTarget.style.borderColor = '#00F2FE'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)' }}
                            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none' }}
                        />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="password" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8' }}>Access Cipher (Password)</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" id="password" required minLength={6}
                            style={{
                                width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px',
                                color: '#f8fafc', fontSize: '1rem', outline: 'none', transition: 'all 0.3s'
                            }}
                            onFocus={e => { e.currentTarget.style.borderColor = '#00F2FE'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)' }}
                            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none' }}
                        />
                    </div>

                    <button type="submit" style={{
                        marginTop: '1rem', width: '100%', padding: '1rem', border: 'none', borderRadius: '8px',
                        background: 'linear-gradient(90deg, #00F2FE, #4FACFE)', color: '#000',
                        fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em', cursor: 'pointer',
                        transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)'
                    }}
                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 242, 254, 0.5)' }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 242, 254, 0.3)' }}
                    >
                        Register Entity
                    </button>
                    
                </form>

                <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>
                    Already initialized? <Link to="/login" style={{ color: '#00F2FE', textDecoration: 'none', fontWeight: 500 }}>Authenticate</Link>
                </p>
            </div>
        </main>
    )
}

export default Register