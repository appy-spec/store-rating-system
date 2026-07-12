import Card from "../common/Card";

const ProfileCard = ({ user }) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      <div className="space-y-5">
        <div>
          <p className="text-gray-500">Name</p>

          <p className="font-semibold">{user?.name}</p>
        </div>

        <div>
          <p className="text-gray-500">Email</p>

          <p className="font-semibold">{user?.email}</p>
        </div>

        <div>
          <p className="text-gray-500">Address</p>

          <p className="font-semibold">{user?.address}</p>
        </div>

        <div>
          <p className="text-gray-500">Role</p>

          <p className="font-semibold capitalize">{user?.role}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
