import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const {user} = useAuth();
  // const user = {
  //   name: "John Doe",
  //   email: "sjsdf",
  //   username: "johndoe",
  // };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto my-10">
      <h1 className="text-3xl font-bold text-center my-6">User Information</h1>

      <div className="space-y-4">
      <div className="avatar flex justify-center items-center">
              <div className="w-64 rounded-full border-2 border-black">
                <img src={user?.photoURL || "/public/placeholder.jpg"} />
              </div>
            </div>
        <div className=" flex gap-2 text-xl justify-center">
          <h2 className="font-bold">Name</h2>
          <p>{user?.displayName}</p>
        </div>
        <div className="justify-center text-xl flex gap-2">
          <h2 className="font-bold">Email :</h2>
          <p>{user.email}</p>
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;

// const Dashboard = () => {
//   return <div className="">This is Dashboard here</div>;
// };

// export default Dashboard;
