import { useAuth } from "../context/AuthContext";
const Profile = () => {
  const { user} = useAuth();

  return (
    <>
      <h1>My Profile</h1>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </>
  );
};

export default Profile;
