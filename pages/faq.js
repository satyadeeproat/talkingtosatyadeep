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
            Write to me 
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <div className="flex space-x-12">
            <p>You can write about anything you want to ask, or want to see in this website. eg: blogs, roadmaps,
                This is still work in progress. 
            </p>
                
            </div>
            <div>
            <a href="https://ngl.link/satyadeeproat" target="_blank">
              Click here to write
            </a>

            <p>
                You can see all the latest features coming soon on this {' '}
                <a href="https://trello.com/b/YnKWP7Y9/satyadeep" target="_blank">Trello board</a>
            </p>

          </div>
        </div>
      </div>
    </Container>
  );
}