import React from 'react'
import "../components/Home.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        
        <section className="hero">

        <div className="hero-content">

            <p className="small-text">WELCOME TO MY WEBSITE</p>

            <h1>
                Build Something
                <span>Amazing.</span>
            </h1>

            <p className="description">
                Create beautiful websites, powerful applications
                and amazing digital experiences with modern technology.
            </p>

            <div className="hero-buttons">
                <button className="primary-btn">Get Started →</button>
                <button className="secondary-btn">Learn More</button>
            </div>

        </div>

        <div className="hero-image">
            <div className="circle"></div>

            <div className="card">
                <div className="card-icon">⚡</div>
                <h3>Modern Design</h3>
                <p>Fast, clean and beautiful.</p>
            </div>
        </div>

    </section>


    <section className="features">

        <h2>Why Choose Us?</h2>

        <p className="section-description">
            Everything you need to build something great.
        </p>

        <div className="feature-container">

            <div className="feature-card">
                <div className="icon">🚀</div>
                <h3>Fast Performance</h3>
                <p>
                    Lightning-fast performance for a smooth
                    user experience.
                </p>
            </div>

            <div className="feature-card">
                <div className="icon">🎨</div>
                <h3>Beautiful Design</h3>
                <p>
                    Modern and attractive designs that users
                    love to interact with.
                </p>
            </div>

            <div className="feature-card">
                <div className="icon">🔒</div>
                <h3>Secure</h3>
                <p>
                    Built with security and reliability
                    in mind.
                </p>
            </div>

        </div>

    </section>


    <footer>
        <p>© 2026 MyWebsite. All rights reserved.</p>
    </footer>
      
    </div>
  )
}

export default Home
