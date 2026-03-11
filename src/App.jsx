import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import VideoPlayer from "./components/VideoPlayer";
import { useState } from "react";

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar onRegisterClick={() => setIsRegisterOpen(true)} />
      <Hero onWatchTrailer={() => setIsVideoOpen(true)} />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      <Register isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} onSwitchToLogin={() => { setIsRegisterOpen(false); setIsLoginOpen(true); }} />
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSwitchToRegister={() => { setIsLoginOpen(false); setIsRegisterOpen(true); }} />
      <VideoPlayer isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoSrc="/videos/Welcome to Zentry  Official Season Cinematic - ZENTRY-1920x1080-avc1-mp4a.mp4" />
    </main>
  );
}

export default App;