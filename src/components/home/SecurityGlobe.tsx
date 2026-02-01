import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Partner locations (lat, lng, name)
const partnerLocations = [
  { lat: 40.7128, lng: -74.006, name: "New York, USA" },
  { lat: 51.5074, lng: -0.1278, name: "London, UK" },
  { lat: 48.8566, lng: 2.3522, name: "Paris, France" },
  { lat: 35.6762, lng: 139.6503, name: "Tokyo, Japan" },
  { lat: 1.3521, lng: 103.8198, name: "Singapore" },
  { lat: -33.8688, lng: 151.2093, name: "Sydney, Australia" },
  { lat: 52.52, lng: 13.405, name: "Berlin, Germany" },
  { lat: 37.7749, lng: -122.4194, name: "San Francisco, USA" },
  { lat: 55.7558, lng: 37.6173, name: "Moscow, Russia" },
  { lat: 22.3193, lng: 114.1694, name: "Hong Kong" },
  { lat: 19.076, lng: 72.8777, name: "Mumbai, India" },
  { lat: -23.5505, lng: -46.6333, name: "São Paulo, Brazil" },
];

// Convert lat/lng to 3D position on sphere
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Globe mesh with dot grid
function GlobeMesh() {
  const globeRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  // Create dot grid for the globe surface
  const dotPositions = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const radius = 2;
    const dotDensity = 20;
    
    for (let lat = -90; lat <= 90; lat += 180 / dotDensity) {
      const latRad = lat * (Math.PI / 180);
      const circumference = Math.cos(Math.abs(latRad)) * dotDensity;
      
      for (let lng = -180; lng < 180; lng += 360 / Math.max(circumference, 1)) {
        positions.push(latLngToVector3(lat, lng, radius));
      }
    }
    return positions;
  }, []);

  // Partner marker positions
  const partnerPositions = useMemo(() => {
    return partnerLocations.map(loc => ({
      position: latLngToVector3(loc.lat, loc.lng, 2.05),
      name: loc.name
    }));
  }, []);

  return (
    <group ref={globeRef}>
      {/* Globe wireframe sphere */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial 
          color="#0d9488" 
          transparent 
          opacity={0.03} 
          wireframe 
        />
      </Sphere>
      
      {/* Dot grid */}
      {dotPositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.015, 6, 6]} />
          <meshBasicMaterial color="#14b8a6" transparent opacity={0.4} />
        </mesh>
      ))}
      
      {/* Partner locations - glowing dots */}
      {partnerPositions.map((partner, i) => (
        <group key={`partner-${i}`} position={partner.position}>
          {/* Core dot */}
          <mesh>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshBasicMaterial color="#14b8a6" />
          </mesh>
          {/* Glow ring */}
          <mesh>
            <ringGeometry args={[0.06, 0.12, 32]} />
            <meshBasicMaterial 
              color="#14b8a6" 
              transparent 
              opacity={0.5} 
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Pulse effect */}
          <PulsingRing delay={i * 0.3} />
        </group>
      ))}
      
      {/* Connection lines between some partners */}
      <ConnectionLines />
    </group>
  );
}

// Pulsing ring animation
function PulsingRing({ delay }: { delay: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = ((clock.getElapsedTime() + delay) % 2) / 2;
      const scale = 1 + t * 2;
      const opacity = 0.6 * (1 - t);
      ringRef.current.scale.set(scale, scale, scale);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = opacity;
    }
  });
  
  return (
    <mesh ref={ringRef}>
      <ringGeometry args={[0.08, 0.1, 32]} />
      <meshBasicMaterial 
        color="#14b8a6" 
        transparent 
        opacity={0.6} 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Connection lines between partner locations
function ConnectionLines() {
  const connections = useMemo(() => {
    const lines: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    const connectionPairs = [
      [0, 1], // NY - London
      [1, 2], // London - Paris
      [2, 6], // Paris - Berlin
      [3, 4], // Tokyo - Singapore
      [4, 9], // Singapore - Hong Kong
      [7, 0], // SF - NY
      [5, 4], // Sydney - Singapore
      [10, 4], // Mumbai - Singapore
    ];
    
    connectionPairs.forEach(([i, j]) => {
      const start = latLngToVector3(
        partnerLocations[i].lat, 
        partnerLocations[i].lng, 
        2.02
      );
      const end = latLngToVector3(
        partnerLocations[j].lat, 
        partnerLocations[j].lng, 
        2.02
      );
      lines.push({ start, end });
    });
    
    return lines;
  }, []);

  return (
    <>
      {connections.map((conn, i) => (
        <CurvedLine key={i} start={conn.start} end={conn.end} />
      ))}
    </>
  );
}

// Curved connection line
function CurvedLine({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const geometry = useMemo(() => {
    const midPoint = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(2.5);
    
    const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
    const points = curve.getPoints(32);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end]);

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "#14b8a6", transparent: true, opacity: 0.3 }))} />
  );
}

export function SecurityGlobe() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Trusted <span className="text-gradient">Globally</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprises across the world rely on ZROTrust.AI to secure their GenAI deployments
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Glow effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/20 rounded-full blur-[100px]" />
          </div>
          
          <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <GlobeMesh />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        </div>
        
        {/* Partner count stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">12+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Enterprise Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">1B+</div>
            <div className="text-sm text-muted-foreground">Data Points Secured</div>
          </div>
        </div>
      </div>
    </section>
  );
}
