import Image from "next/image";




 export default function Home() {
   return (
  <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-50">
    <div className="flex">
      <h2>Sales Activity</h2>
      <div className="grid grid-cols-4">
       <div className="rounded-lg border-slate-100 bg-slate-200 hover:border-blue-400 bg-white p-8">
        <h4>10</h4>
        <small>Qty</small>
        <div className="flex"></div>
       </div>
      </div>
    </div>
    </div> 
  );
 }


