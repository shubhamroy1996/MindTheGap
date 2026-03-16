import React from 'react';

const Loader = ({ text = "Initializing Systems..." }) => {
    return (
        <div style={{
            position: 'fixed', inset: 0,
            background: '#0a0a0c',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            zIndex: 9999, color: '#f8fafc',
            fontFamily: "'Inter', 'Segoe UI', sans-serif"
        }}>
            {/* Outer glowing ring */}
            <div style={{
                position: 'relative', width: '120px', height: '120px',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                {/* Style block for CSS animation since inline styles don't support @keyframes easily */}
                <style>
                    {`
                        @keyframes spin { 100% { transform: rotate(360deg); } }
                        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
                        .orbit {
                            position: absolute; inset: 0;
                            border-radius: 50%;
                            border: 2px solid transparent;
                            border-top-color: #00F2FE;
                            border-right-color: rgba(0, 242, 254, 0.3);
                            animation: spin 1.5s linear infinite;
                            box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
                        }
                        .orbit-inner {
                            position: absolute; inset: 15px;
                            border-radius: 50%;
                            border: 2px solid transparent;
                            border-bottom-color: #4FACFE;
                            border-left-color: rgba(79, 172, 254, 0.3);
                            animation: spin 2s linear infinite reverse;
                        }
                        .pulse-core {
                            width: 30px; height: 30px;
                            background: #00F2FE;
                            border-radius: 50%;
                            box-shadow: 0 0 30px #00F2FE, 0 0 60px #4FACFE;
                            animation: pulse 2s ease-in-out infinite;
                        }
                        .loading-text {
                            margin-top: 2rem;
                            font-size: 0.85rem;
                            letter-spacing: 0.3em;
                            text-transform: uppercase;
                            color: #00F2FE;
                            animation: pulse 2s ease-in-out infinite;
                        }
                    `}
                </style>
                <div className="orbit" />
                <div className="orbit-inner" />
                <div className="pulse-core" />
            </div>
            
            <div className="loading-text">{text}</div>
            
            <div style={{
                marginTop: '1rem', width: '150px', height: '2px', background: 'rgba(255,255,255,0.05)',
                position: 'relative', overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, height: '100%', width: '30%',
                    background: 'linear-gradient(90deg, transparent, #00F2FE, transparent)',
                    animation: 'spin 1.5s linear infinite' // Reusing spin as a generic ticker
                }} />
            </div>
        </div>
    );
};

export default Loader;
