import FormComponent from "@/components/FormComponent";

export default function Home() {
  return (
      <>
        <div className="grid min-h-screen place-content-center bg-image">
          <div className="grid md:grid-cols-[50%_50%] gap-8 min-h-[600px] max-w-[1150px] ">
              <div className="flex flex-col p-8 gap-8 place-content-center  max-w-[600px] text-center md:text-left md:mb-18">
                  <h1 className="text-5xl font-bold text-white">Learn to code by watching others</h1>
                  <p className="text-white">See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                      but understanding how developers think is invaluable. </p>
              </div>
              <div className="flex flex-col place-content-center md:pr-8">
                  <h2 className="mb-8 rounded-xl opacity-90 text-white overflow-hidden text-center py-5 bg-[#5d54a3] "><span className=" font-semibold ">Try it for free</span> then $20/mo. thereafter</h2>
                  <div className="flex-1  ">
                      <FormComponent />
                  </div>
              </div>
          </div>
        </div>
      </>
  );
}
