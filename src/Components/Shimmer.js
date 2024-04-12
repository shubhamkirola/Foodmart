const Shimmer = () => {
  return (
    <>
    <div className="py-4  flex justify-center mt-4"> CORS EXTENSION IS REQUIRED TO RETRIEVE THE DATA FROM THE API, PLEASE ENABLE IT</div>
    <div data-testId="shimmer" className="mt-1 flex justify-center flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-64 h-64 m-8 border-2 p-2 hover:shadow-2xl bg-gray-300"
          ></div>
        ))}
    </div>
    </>
  );
};

export default Shimmer;