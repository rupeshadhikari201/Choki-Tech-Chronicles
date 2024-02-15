import CustomerProjectTable from "../dashboard/customer/projects";

const Projects = () => {
  const dummyData = [
    {
      title: "Project 1",
      created: "2024-02-01",
      payment: "Paid",
      progress: "Completed",
      submission: "2024-02-10",
      budget: "$1000",
    },
    {
      title: "Project 6",
      created: "2024-02-01",
      payment: "Paid",
      progress: "Completed",
      submission: "2024-02-10",
      budget: "$1000",
    },
    {
      title: "Project 7",
      created: "2024-02-01",
      payment: "Paid",
      progress: "Completed",
      submission: "2024-02-10",
      budget: "$1000",
    },
    {
      title: "Project 2",
      created: "2024-02-02",
      payment: "Pending",
      progress: "In Progress",
      submission: "2024-02-12",
      budget: "$1500",
    },
    {
      title: "Project 3",
      created: "2024-02-03",
      payment: "Paid",
      progress: "Completed",
      submission: "2024-02-15",
      budget: "$2000",
    },
    // Add more dummy data entries here...
    {
      title: "Project 10",
      created: "2024-02-10",
      payment: "Pending",
      progress: "In Progress",
      submission: "2024-02-25",
      budget: "$3000",
    },
  ];
  return (
    <div className={`text-black-variant-1 ps-2`}>
      <h5 className={`font-weight-400`}>All Projects</h5>
      <CustomerProjectTable data={dummyData} />
    </div>
  );
};

export default Projects;
