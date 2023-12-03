import "../Navbar/global.css";

import Video from "./mainVideo";

import VideoCards from "./Video_Cards";
export default function VideoList() {
  return (
    <div className="flex flex-col h-full pt-2">
      <Video />
      <div className="flex justify-center w-4/5 mx-auto mb-5 flex-wrap">
        <div className="flex justify-start flex-wrap  space-x-4 space-y-5">
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
        </div>
      </div>
    </div>
  );
}
