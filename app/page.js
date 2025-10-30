import Navbar from './components/navbar';
import Footer from './components/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <img src="/assets/me.jpg" alt="" className="w-full m-auto  h-[700px]" />
      <Footer/>
      <h1>remove this</h1>
    </>
  );
}