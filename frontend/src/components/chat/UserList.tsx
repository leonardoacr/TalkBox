import { useState } from "react";

type User = {
  id: string;
  name: string;
};

type UserListProps = {
  users: User[];
};

const UserList = ({ users }: UserListProps) => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList((prev) => !prev);
  };

  const renderUser = (user: User) => (
    <div key={user.id} className="flex items-center">
      <div className="w-4 h-4 rounded-full bg-gray-400 mr-2"></div>
      <div>{user.name}</div>
    </div>
  );

  if (users.length <= 2) {
    return (
      <div className="flex items-center">
        {users.map((user) => renderUser(user))}
      </div>
    );
  }

  return (
    <div className="relative pt-2">
      <div className="flex items-center space-x-2">
        {users.slice(0, 2).map((user) => renderUser(user))}
      </div>
      {showList && (
        <div className="absolute top-full right-0 z-10 bg-white border border-gray-300 rounded-md p-2">
          {users.slice(2).map((user) => renderUser(user))}
        </div>
      )}
      <button className="ml-2 text-sm text-gray-500" onClick={toggleList}>
        {showList ? "Hide" : `+${users.length - 2}`}
      </button>
    </div>
  );
};

export default UserList;
