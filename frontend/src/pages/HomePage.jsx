import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import StorySection from '../Sections/StorySection'
import Programs from '../Sections/Programs'
import Impact from '../Sections/Impact'
import Donate from '../Sections/Donate'
import Volunteer from '../Sections/Volunteer'
import Footer from '../Sections/Footer'

export default function HomePage(){
  return(
    <>
      <Navbar />
      <Hero />
      <StorySection />
      <Programs />
      <Impact />
      <Volunteer />
      <Donate />
      <Footer />
    </>
  )
}