import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">ようこそ、私のホームページへ！</h1>
          <p className="text-xl text-gray-600">クリーンでモダンなデザインのウェブサイトです</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold text-gray-800">自己紹介</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                ここに自己紹介を書きます。モダンなUIコンポーネントを使って、
                簡単にスタイリッシュなWebアプリケーションを作成しています。
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                もっと詳しく
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold text-gray-800">最近の投稿</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {['モダンなUIデザインのトレンド', 'Reactの最新機能を探る', '効果的なレスポンシブデザイン'].map((post, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-blue-500">●</span>
                    <span className="text-gray-600">{post}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <footer className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-500">
          © 2024 My Stylish Homepage. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;