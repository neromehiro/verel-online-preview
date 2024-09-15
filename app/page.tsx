// pages/index.js
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import 'tailwindcss/tailwind.css';

const news = [
  {
    title: "KDDIとOpenAIの対談",
    content: "KDDIの高橋誠社長が、OpenAIの日本法人社長と対談し、AIの可能性について語りました。特に、オンデバイスAIに対する期待が高まっています。",
  },
  {
    title: "ChatGPT-4の眼科知識",
    content: "ChatGPT-4は、眼科関連の知識と臨床推論力において、眼科専門医と同等のレベルに達していることが報告されました。",
  },
  {
    title: "新しいAIモデル「o1」",
    content: "OpenAIは、新たなAIモデル「o1」を発表しました。このモデルは、ユーザーの入力に対して時間をかけて考え、より複雑なタスクを正確に解決する能力を持っています。",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {news.map((item, index) => (
        <Card key={index} className="w-full max-w-md mb-4">
          <CardHeader>
            <h2 className="text-xl font-bold">{item.title}</h2>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{item.content}</p>
            <Button className="w-full">もっと見る</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
