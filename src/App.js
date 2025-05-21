import Features from './components/features/Features';
import Footer from './components/Footer';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Services from './components/featurePreview/Services';
import Comments from './components/comments/Comments';
import JoinUs from './components/join/Joins';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Services />
      <Comments />
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
