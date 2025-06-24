import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Page = () => {
    return (
        <main className="flex flex-col items-center scroll-smooth">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    );
};

export default Page;