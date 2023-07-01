import Head from "next/head";
import Box from "~/components/box";
import SmolBox from "~/components/smol-box";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].reverse();

export default function Home() {
  return (
    <>
      <Head>
        <title>Infinite Slider</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-around bg-gradient-to-b from-[#e0d7ec] to-[#15162c]">
        {/* 1. */}
        <div className="relative flex h-[200px] w-[calc(1px*(150*30+40*29))] items-center overflow-hidden border-b border-t border-gray-600">
          {/* 2. */}
          <div className="animate1 absolute right-[0px] flex h-[150px] w-[calc(1px*(150*30+40*29))] items-center justify-around gap-10">
            {/* 3 */}
            {arr.map((i) => {
              return <SmolBox key={i} i={i} />;
            })}
            {arr.map((i) => {
              return <SmolBox key={i} i={i} />;
            })}
          </div>
        </div>
        <div className="relative flex h-[200px] w-[calc(1px*(150*30+40*29))] items-center overflow-hidden border-b border-t border-gray-600">
          {/* 2. */}
          <div className="animate2 absolute right-[calc(-1px*(150*11+40*10))] flex h-[150px] w-[calc(1px*(150*30+40*29))] items-center justify-around gap-10">
            {/* 3 */}
            {arr.map((i) => {
              return <Box key={i} no={i} />;
            })}
            {arr.map((i) => {
              return <Box key={i} no={i} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
