const Loading = () => {
  // Anda dapat menambahkan CSS styling atau animasi di sini

  return (
    <div className="bg-white md:w-full min-h-screen flex justify-center items-center ">
      {/* Anda dapat mengganti pesan loading atau menambahkan elemen lain di sini */}
      <div className="">
        <div className="loading-animation">
          {/* Misalnya, Anda dapat menambahkan gambar animasi di sini */}
          <img src="/images/load2.gif" alt="Loading" />
          <h1 className=" font-bold text-2xl text-center text-primary">
            Loading...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
