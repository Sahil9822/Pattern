import Grid from "./Grid";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-9">
          <div className="text-pretty text-3xl text-black md:w-[400px] flex flex-row gap-3 justify-between items-center">
            <img src="src\components\fog-logo.webp" alt="" />
            FOG-Assignment
          </div>
          <Grid rows={15} cols={20} />
        </div>
      </div>
    </>
  );
}

export default Home;

