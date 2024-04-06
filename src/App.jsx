function App() {
  return (
    <div className="text-white bg-[#141414] min-h-screen grid place-items-center">
      <div className="w-[80%] sm:w-full max-w-[400px] rounded-xl bg-[#1F1F1F] p-10 flex flex-col items-center gap-4">
        <img className="rounded-full w-24 aspect-square" src="/Asif.JPG" />
        <div className="text-center">
          <h1 className="text-2xl font-bold">Muh. Asif Awaludin</h1>
          <p className="text-[#c5f82a] font-medium">Jakarta, Indonesia</p>
        </div>
        <p className="text-gray-300 text-center text-sm my-[8px]">
          "Web Developer And IT Enthusiast"
        </p>
        <div className="flex flex-col gap-4 w-full">
          <a
            href="https://www.instagram.com/muh.45if/"
            className="w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@sip230104"
            className="w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            Tiktok
          </a>
          <a
            href="https://www.linkedin.com/in/muh-asif-awaludin-397889285/"
            className="w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/muhasifawaludin"
            className="w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
