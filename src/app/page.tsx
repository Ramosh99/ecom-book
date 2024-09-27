import Image from "next/image";

export default function Home() {
  return (
    <main className="m-10">
      <h1 className="text-center text-4xl text-blue-500">
        hello
      </h1>
      <input type="text" placeholder="add" className="rounded-md m-10 px-4" />
      <button className="bg-orange-500 rounded-md px-2">
        add
      </button>
    </main>
  );
}
