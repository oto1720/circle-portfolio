import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">サークル作品集へようこそ</h1>
      <p className="mb-8">制作系サークルのメンバーの作品を展示するサイトです</p>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">注目の作品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ここに作品のプレビューを追加 */}
          <div className="border p-4 rounded-lg">作品1</div>
          <div className="border p-4 rounded-lg">作品2</div>
          <div className="border p-4 rounded-lg">作品3</div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Link href="/works" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          すべての作品を見る
        </Link>
      </div>
    </main>
  );
}
