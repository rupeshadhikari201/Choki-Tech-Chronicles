const Support = () => {
  return (
    <div>
      <div
        className="bg-dark-blue rounded p-2 d-flex align-items-center"
        style={{
          height: 200,
        }}
      >
        <h2 className="ms-4 text-white " style={{ maxWidth: "300px" }}>
          How can we help you?
        </h2>
        <div></div>
      </div>
      <div className="text-black-variant-1 mt-2">
        <h6>common search</h6>
        <div className="d-flex gap-4 mt-3 flex-wrap">
          <div className="border px-3 py-1" style={{ borderRadius: "30px" }}>
            how to create project
          </div>
          <div className="border px-3 py-1" style={{ borderRadius: "30px" }}>
            checking status
          </div>
          <div className="border px-3 py-1" style={{ borderRadius: "30px" }}>
            getting full project
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
