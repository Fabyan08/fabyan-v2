const Loading = () => {
  // Anda dapat menambahkan CSS styling atau animasi di sini

  return (
    <div className="bg-slate-100 md:w-full min-h-screen flex justify-center items-center mx-10">
      {/* Anda dapat mengganti pesan loading atau menambahkan elemen lain di sini */}
      <div className="">
        <div className="loading-animation">
          {/* Misalnya, Anda dapat menambahkan gambar animasi di sini */}
          <img src="/images/load2.gif" alt="Loading" />
          <h1 className="-mr-2 font-bold text-2xl text-primary">
            Mohon Tunggu Sebentar, Konten Sedang Dimuat...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
