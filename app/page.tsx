import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const musicianName = "John Doe";
const blogTitle = "John Doe's Music Journey";
const postTitles = ["My Latest Album Release", "Behind the Scenes of My Music Video", "Upcoming Tour Dates"];
const postContents = [
  "I am thrilled to announce the release of my latest album. It has been a journey of creativity and hard work. I hope you all enjoy it!",
  "Here's a sneak peek behind the scenes of my latest music video. It was an incredible experience working with such a talented team.",
  "Excited to share my upcoming tour dates. Can't wait to see you all on the road!"
];
const buttonText = "Read More";
const commentPlaceholder = "Leave a comment...";
const submitButtonText = "Submit";
const backgroundImageUrl = "https://thumb.ac-illust.com/06/068b034322e850492718389afb3a7a04_t.jpeg";

export default function Blog() {
  return (
    <div className="relative min-h-screen bg-gray-100 p-8">
      {/* 背景画像をぼやけさせるためのdiv */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: -1, // 背景を後ろに配置
        }}
      ></div>

      {/* コンテンツ */}
      <div className="relative bg-white bg-opacity-80 p-8 rounded-lg">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">{blogTitle}</h1>
          <p className="text-xl text-gray-600">by {musicianName}</p>
        </header>
        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <main className="max-w-4xl mx-auto">
          {postTitles.map((title, index) => (
            <Card key={index} className="mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold">{title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{postContents[index]}</p>
                <Button className="mt-4">{buttonText}</Button>
              </CardContent>
            </Card>
          ))}
          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>
            <form className="mb-4">
              <Textarea placeholder={commentPlaceholder} className="w-full mb-2" />
              <Button>{submitButtonText}</Button>
            </form>
            <div>
              <p className="text-gray-700">
                <strong>Jane Smith:</strong> Love your new album!
              </p>
              <p className="text-gray-700">
                <strong>Mike Johnson:</strong> Can't wait for the tour!
              </p>
            </div>
          </section>
        </main>
        <footer className="text-center mt-8">
          <p className="text-gray-600">© 2024 {musicianName}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}


