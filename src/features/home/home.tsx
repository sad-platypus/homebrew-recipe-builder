'use client';
import { H1 } from '@/components/elements/headers/h1';
import Link from 'next/link';

export const Home = () => {
  return (
    <>
      <H1>Homepage</H1>
      <div>
        Image by
        <Link href="https://www.freepik.com/free-photo/delicious-american-beer-arrangement_13295986.htm#query=hops%20and%20malt&position=17&from_view=search&track=ais&uuid=65b354b4-05a6-40ec-9ac5-30bd207dc1e7">
          Freepik
        </Link>
      </div>
    </>
  );
};
