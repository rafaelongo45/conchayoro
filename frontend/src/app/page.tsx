<<<<<<< HEAD
export default function Home() {
return (
<main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div className="z-10 max-w-5xl w-full items-center justify-between font-mono
  text-sm lg:flex">
    <h1> Welcome to the ConchaYOro App - deploy v2</h1>
    <h2> This is a really cool website! </h2>
  </div>
</main>
)
}
=======
import { blackFridayFlag } from './flag.tsx';

export default async function Page() {
  const black_friday = await blackFridayFlag();

  return (
    <html>
      <body>
        <div>
          <h1> Welcome to the ConchaYOro App - deploy v3a</h1>
          { black_friday ? <button> Promo </button> : <button> Normal </button> } 
        </div>
      </body>
    </html>
  )
};
>>>>>>> a7c8c44 (includes feature flag)
