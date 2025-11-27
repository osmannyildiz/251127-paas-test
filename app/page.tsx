import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-16 min-h-[800px]">
      <div className="flex flex-col justify-center items-end">
        <Image
          className=""
          src="/next.svg"
          alt="Next.js logo"
          width={300}
          height={60}
          priority
        />
        <h1 className="text-8xl font-medium mt-8 text-end">
          The Best PaaS Test App
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-3xl font-medium">
          Launch your app to the orbit of your customers with our powerful PaaS
          platform.
        </p>
        <p className="text-3xl font-semibold mt-8">
          If you can dream it, we can build it.
        </p>
        <div className="flex gap-4 mt-8">
          <button
            type="button"
            className="bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 text-xl"
          >
            Get Started
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-8 py-2 rounded-md hover:bg-gray-600 transition-all duration-300 text-xl"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
