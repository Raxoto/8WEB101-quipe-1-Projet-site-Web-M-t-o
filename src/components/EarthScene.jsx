// src/components/EarthScene.jsx
import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import { globeData } from "../data";

const EarthScene = ({ activeMode, onObjectClick }) => {
    const globeEl = useRef();

    // Le point de vue initial est orienté vers l'Atlantique Nord afin de faciliter l'observation du rapport H/L et du front.
    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.pointOfView({ lat: 45, lng: -40, altitude: 2.5 });
        }
    }, []);

    // afficher dependant de mode active
    // default, pressure, fronts
    const currentLabels = activeMode === "pressure" ? globeData.pressure.labels : [];
    const currentPaths = activeMode === "fronts" ? globeData.fronts.paths : [];

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

                // HL lables
                labelsData={currentLabels}
                labelLat={(d) => d.lat}
                labelLng={(d) => d.lng}
                labelText={(d) => d.text}
                labelSize={(d) => d.size}
                labelColor={(d) => d.color}
                labelAltitude={(d) => d.alt}
                onLabelClick={(d) => onObjectClick(d.id)} // cliquer H/L appeller parent

                // 路径层 (用于锋面线条)
                pathsData={currentPaths}
                pathPoints={(d) => d.coords}
                pathColor={(d) => d.color}
                pathStroke={3}
                pathDashLength={0.1}
                pathDashGap={0.05}
                pathDashAnimateTime={12000}
                onPathClick={(d) => onObjectClick(d.id)} // cliquer et appeller parent
            />
        </div>
    );
};

export default EarthScene;