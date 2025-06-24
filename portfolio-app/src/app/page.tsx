import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import FloatingActionButton from '../components/FloatingActionButton';
import LoadingScreen from '../components/LoadingScreen';

const Page = () => {
    return (
        <>
            <LoadingScreen />
            <ScrollProgress />
            <main className="flex flex-col items-center scroll-smooth">
                <Header />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </main>
            <FloatingActionButton />
        </>
    );
};

export default Page;