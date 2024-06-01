import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      toast.success("Successfully Login!");
      console.log(data);
      if (data?.user?.email) {
        const userInfo = {
          name: data.user.displayName,
          email: data.user.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
      }
    });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
