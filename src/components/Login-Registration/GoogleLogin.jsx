import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleLogin().then(() => {
      navigate(from);
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
