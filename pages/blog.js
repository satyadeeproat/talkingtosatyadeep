import Link from 'next/link';
import Image from 'next/image';

import Container from '../components/Container';
// import avatar from 'public/avatar.jpg';
// import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Satyadeep Roat">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          {/* <h3>Job Title</h3>
          <p>Satyadeep Roat, Frontend Engineer at Vercel</p> */}
          <h3>Frontend Engineer, Mollie</h3>
          <p>
            Building Capital Business line at{' '}
            <a href="https://www.mollie.com/products/capital">Mollie</a>
          </p>
          <h3>Software Development Engineer, Swiggy</h3>
          <p>
          Build the payment and onboarding feature for Swiggy Diners one (offline dining) at {' '}
            <a href="https://www.swiggy.com/">Swiggy</a>

          </p>
          <h3>Senior Software Engineer, Vdocipher</h3>
          <p>
          Worked as a full-stack engineer in the company at{' '}
            <a href="https://www.vdocipher.com/">Vdocipher</a>. I build company dashboard, end to end payment and multi tenant system.  
          </p>
          <div className="flex space-x-8">
            <a href="https://ngl.link/satyadeeproat" target="_blank">
                <h1 style={{color:'red'}}>Ask Me anything</h1>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}