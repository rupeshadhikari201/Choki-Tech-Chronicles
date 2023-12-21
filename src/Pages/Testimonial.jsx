import "../Css/testimonial.css";
import img1 from "../assets/logo1.jpg";
const Testimonial = () => {
  return (
    <section className="testimonial-section px-3">
      <div className="p-2 mb-4">
        <h1 className="text-center">Testimonial</h1>
      </div>
      <div
        className="testimonial-container
      d-flex justify-content-center justify-content-sm-between 
      align-items-center
      "
      >
        <div className="card-2 shadow">
          <div className="rounded-circle card-2-img ">
            <img
              src={
                "https://images.pexels.com/photos/17120644/pexels-photo-17120644/free-photo-of-a-black-and-white-dog-sitting-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </div>{" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
          <h2 className="mb-0">Steve Harrington</h2>
        </div>
        {/* cirular Image */}
        <div className="rounded-circle img-circle">
          <img
            src={
              "https://images.pexels.com/photos/17120644/pexels-photo-17120644/free-photo-of-a-black-and-white-dog-sitting-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
