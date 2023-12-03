import "../Navbar/global.css";

export default function Main_Video(props) {
  console.log(props);
  return (
    <>
      <div className="w-3/4 flex h-screen flex-row mx-12">
        <div
          className="w-full h-2/3 ml-44 mt-4 px-2 pt-2  
                    rounded-xl border-2 border-slate-400"
        >
          <iframe
            className="w-full h-5/6"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5TCRWUKdCRc?si=IywvSwSG7iCnsDPY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <div className="mt-1 h-1/3 text-left text-xl text-slate-600">
            Title:
            <p className="text-lg pt-2">Description: my desk</p>
            <p>Views: </p>
          </div>
        </div>
      </div>
    </>
  );
}
