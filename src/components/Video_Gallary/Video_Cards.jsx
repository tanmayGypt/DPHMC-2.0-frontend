export default function VideoCards() {
  return (
    <>
      <div className="w-2/12 hover:scale-110 transition-all">
        <div>
          <img
            className="aspect-auto rounded-s"
            src="https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg"
            alt=""
          />
        </div>
        <div>
          <h3 className="font-extralight">Title</h3>
          <p className="font-extralight">Description</p>
          <p className="font-extralight">Uploaded Date</p>
          <p className="font-extralight">Views</p>
        </div>
      </div>
    </>
  );
}
