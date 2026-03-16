import React, { useState, useRef } from 'react'
import "../style/home.scss"
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate } from 'react-router'
import Loader from '../../../components/Loader'

const Home = () => {

    const { loading, generateReport,reports } = useInterview()
    const [ jobDescription, setJobDescription ] = useState("")
    const [ selfDescription, setSelfDescription ] = useState("")
    const [ resumeFile, setResumeFile ] = useState(null)
    const resumeInputRef = useRef()

    const navigate = useNavigate()

    const handleGenerateReport = async () => {
        const resumeFile = resumeInputRef.current.files[ 0 ]
        const data = await generateReport({ jobDescription, selfDescription, resumeFile })
        navigate(`/interview/${data._id}`)
    }

    if (loading) {
        return <Loader text="Synthesizing Interview Strategy..." />
    }

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0a0a0c',
            backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(0, 242, 254, 0.05), transparent 40%), radial-gradient(circle at 85% 30%, rgba(79, 172, 254, 0.05), transparent 40%)',
            color: '#e2e8f0',
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            padding: 'clamp(2rem, 5vw, 4rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Ambient glowing orb behind main content */}
            <div style={{
                position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '600px', height: '600px', background: 'rgba(0, 242, 254, 0.08)',
                filter: 'blur(100px)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1200px' }}>
                
                {/* Page Header */}
                <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ 
                        display: 'inline-block', marginBottom: '1rem', padding: '0.4rem 1rem', 
                        background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.2)', 
                        borderRadius: '20px', color: '#00F2FE', fontSize: '0.75rem', 
                        letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600
                    }}>
                        AI Interview Copilot
                    </div>
                    <h1 style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, 
                        lineHeight: 1.1, margin: '0 0 1rem 0', letterSpacing: '-0.02em', color: '#fff'
                    }}>
                        Architect Your <br/>
                        <span style={{ 
                            background: 'linear-gradient(90deg, #00F2FE 0%, #4FACFE 100%)', 
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            fontWeight: 600
                        }}>Winning Strategy</span>
                    </h1>
                    <p style={{ 
                        fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px', 
                        margin: '0 auto', fontWeight: 300, lineHeight: 1.6
                    }}>
                        Initialize our neural engine with your target role and profile. We'll synthesize a hyper-personalized roadmap for success.
                    </p>
                </header>

                {/* Main Dashboard Interface */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        
                        {/* Left Panel - Job Desc */}
                        <div style={{ flex: '1 1 500px', padding: '3rem', position: 'relative' }}>
                            <div style={{ 
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                                marginBottom: '2rem' 
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '8px', height: '8px', background: '#00F2FE', borderRadius: '50%', boxShadow: '0 0 10px #00F2FE' }} />
                                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 400, color: '#f8fafc', letterSpacing: '0.05em' }}>Target Parameters</h2>
                                </div>
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b' }}>// REQUIRED</span>
                            </div>
                            
                            <textarea
                                onChange={(e) => setJobDescription(e.target.value)}
                                style={{
                                    width: '100%', height: '320px', background: 'rgba(0,0,0,0.2)',
                                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
                                    padding: '1.5rem', color: '#e2e8f0', fontFamily: 'monospace',
                                    fontSize: '0.9rem', lineHeight: 1.6, resize: 'none', outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                placeholder={`Enter target job specifications...\n\n{\n  "role": "Senior Engineer",\n  "stack": ["React", "System Design"],\n  "expectations": "..."\n}`}
                                onFocus={(e) => e.target.style.borderColor = 'rgba(0, 242, 254, 0.4)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                            />
                        </div>

                        {/* Divider */}
                        <div style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent)' }} />

                        {/* Right Panel - Profile */}
                        <div style={{ flex: '1 1 500px', padding: '3rem' }}>
                            <div style={{ 
                                display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' 
                            }}>
                                <div style={{ width: '8px', height: '8px', background: '#eab308', borderRadius: '50%', boxShadow: '0 0 10px #eab308' }} />
                                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 400, color: '#f8fafc', letterSpacing: '0.05em' }}>Candidate Vector</h2>
                            </div>

                            {/* Resume Upload */}
                            <label style={{
                                display: 'block', width: '100%', padding: '2.5rem 2rem', 
                                border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '12px',
                                background: resumeFile ? 'rgba(0, 242, 254, 0.05)' : 'rgba(0,0,0,0.2)', textAlign: 'center', cursor: 'pointer',
                                transition: 'all 0.3s ease', marginBottom: '2rem',
                                borderColor: resumeFile ? '#00F2FE' : 'rgba(255,255,255,0.15)'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#00F2FE'; e.currentTarget.style.background = 'rgba(0, 242, 254, 0.05)' }}
                            onMouseOut={(e) => { e.currentTarget.style.borderColor = resumeFile ? '#00F2FE' : 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = resumeFile ? 'rgba(0, 242, 254, 0.05)' : 'rgba(0,0,0,0.2)' }}
                            >
                                <div style={{ color: resumeFile ? '#00F2FE' : '#94a3b8', marginBottom: '1rem' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                                        {resumeFile ? (
                                            <>
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                                            </>
                                        ) : (
                                            <>
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
                                            </>
                                        )}
                                    </svg>
                                </div>
                                <div style={{ fontSize: '1rem', color: resumeFile ? '#00F2FE' : '#f8fafc', marginBottom: '0.5rem', fontWeight: resumeFile ? 500 : 400 }}>
                                    {resumeFile ? resumeFile.name : 'Upload Neural Data (Resume)'}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Supported formats: PDF, DOCX (Optimal results)</div>
                                <input ref={resumeInputRef} type="file" hidden accept=".pdf,.docx" onChange={(e) => {
                                    if(e.target.files && e.target.files.length > 0) {
                                        setResumeFile(e.target.files[0])
                                    }
                                }} />
                            </label>

                            <div style={{ 
                                display: 'flex', alignItems: 'center', gap: '1rem', 
                                margin: '2rem 0', color: '#475569', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em'
                            }}>
                                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                                OR INTERFACE MANUAL OVERRIDE
                                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                            </div>

                            <textarea
                                onChange={(e) => setSelfDescription(e.target.value)}
                                style={{
                                    width: '100%', height: '100px', background: 'rgba(0,0,0,0.2)',
                                    border: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)',
                                    padding: '1rem', color: '#e2e8f0', fontFamily: 'monospace',
                                    fontSize: '0.9rem', resize: 'none', outline: 'none', transition: 'border-color 0.3s'
                                }}
                                placeholder="// Raw profile string input..."
                                onFocus={(e) => e.target.style.borderBottomColor = 'rgba(0, 242, 254, 0.4)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
                            />
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div style={{ 
                        padding: '2rem 3rem', background: 'rgba(0,0,0,0.3)', 
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        flexWrap: 'wrap', gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#64748b', fontSize: '0.85rem' }}>
                            <div style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e' }} />
                            Systems Ready
                        </div>
                        <button 
                            onClick={handleGenerateReport}
                            style={{
                                background: 'linear-gradient(90deg, #00F2FE 0%, #4FACFE 100%)',
                                color: '#000', border: 'none', padding: '1rem 2.5rem',
                                borderRadius: '50px', fontSize: '1rem', fontWeight: 600,
                                letterSpacing: '0.05em', cursor: 'pointer', outline: 'none',
                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                boxShadow: '0 10px 25px -5px rgba(0, 242, 254, 0.4)',
                                transition: 'transform 0.2s, boxShadow 0.2s'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(0, 242, 254, 0.6)' }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 242, 254, 0.4)' }}
                        >
                            Initialize Sequence
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>

                {/* Data Records (Reports) */}
                {reports.length > 0 && (
                    <div style={{ marginTop: '5rem' }}>
                        <h3 style={{ 
                            fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', 
                            color: '#64748b', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' 
                        }}>
                            Historical Vectors
                            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {reports.map((report, idx) => (
                                <div 
                                    key={report._id} 
                                    onClick={() => navigate(`/interview/${report._id}`)}
                                    style={{
                                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                                        borderRadius: '16px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease',
                                        position: 'relative', overflow: 'hidden'
                                    }}
                                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.3)' }}
                                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}
                                >
                                    <div style={{ 
                                        position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', 
                                        background: report.matchScore >= 80 ? '#22c55e' : report.matchScore >= 60 ? '#eab308' : '#ef4444' 
                                    }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500, color: '#f8fafc' }}>
                                            {report.title || 'Unknown Objective'}
                                        </h4>
                                        <span style={{ 
                                            background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px',
                                            fontSize: '0.8rem', fontFamily: 'monospace', color: report.matchScore >= 80 ? '#22c55e' : report.matchScore >= 60 ? '#eab308' : '#ef4444'
                                        }}>
                                            {report.matchScore}%
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                        {new Date(report.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                <footer style={{ 
                    marginTop: '6rem', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.8rem', color: '#64748b'
                }}>
                    <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='#f8fafc'} onMouseOut={e => e.currentTarget.style.color='#64748b'}>Protocol_Alpha</span>
                    <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='#f8fafc'} onMouseOut={e => e.currentTarget.style.color='#64748b'}>Security_Params</span>
                    <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='#f8fafc'} onMouseOut={e => e.currentTarget.style.color='#64748b'}>System_Status</span>
                </footer>
            </div>
        </div>
    )
}

export default Home