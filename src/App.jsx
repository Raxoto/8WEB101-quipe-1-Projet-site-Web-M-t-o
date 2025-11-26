// src/App.jsx
import React, { useState } from "react";
import EarthScene from "./components/EarthScene";
import { articles } from "./data";
import "./App.css";

function App() {
    // mode active ('default' | 'pressure' | 'fronts')
    const [activeTopic, setActiveTopic] = useState("default");

    // cliquer article pour activer la planete
    const handleArticleEnter = (topicId) => {
        setActiveTopic(topicId);
    };

    // cliquer planete pour activer article
    const handle3DClick = (topicId) => {
        setActiveTopic(topicId);
        const element = document.getElementById(`article-${topicId}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="app-container">
            {/* header */}
            <header className="header">
                <div className="logo">Météo-Site</div>
                <div className="search-bar">Zone "recherche"</div>
            </header>

            <main className="main-content">
                {/* gauche, planete 3d */}
                <div className="earth-container">
                    <div className="overlay-title">
                        Planète 3D Interaction
                        <br />
                        <span style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              Mode actuel: {activeTopic === 'default' ? 'Vue Globale' : activeTopic.toUpperCase()}
            </span>
                    </div>
                    <EarthScene activeMode={activeTopic} onObjectClick={handle3DClick} />

                    {/* 3d controle pannel */}
                    <div className="earth-controls">
                        <button onClick={() => setActiveTopic('default')}>Reset</button>
                        <button onClick={() => setActiveTopic('pressure')}>Pression (H/L)</button>
                        <button onClick={() => setActiveTopic('fronts')}>Fronts</button>
                    </div>
                </div>

                {/* droite, articles */}
                <div className="articles-container">
                    <div className="hero-section">
                        <h1>Sujet de la semaine</h1>
                        <p>Comprendre la dynamique de l'atmosphère</p>
                    </div>

                    <div className="articles-list">
                        <h3>Articles Explicatifs</h3>

                        {articles.map((article) => (
                            <div
                                key={article.id}
                                id={`article-${article.id}`}
                                className={`article-card ${activeTopic === article.id ? 'active' : ''}`}
                                onClick={() => handleArticleEnter(article.id)}
                            >
                                <h2>{article.title}</h2>
                                {article.content.map((section, idx) => (
                                    <div key={idx} className="article-section">
                                        <h4>{section.subtitle}</h4>
                                        <p>{section.text}</p>
                                        {section.list && (
                                            <ul>
                                                {section.list.map((item, i) => <li key={i}>{item}</li>)}
                                            </ul>
                                        )}
                                        {/* dire au utilisateur de regardre la planete */}
                                        <div className="interaction-hint">
                                            👉 Voir sur la planète 3D
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;