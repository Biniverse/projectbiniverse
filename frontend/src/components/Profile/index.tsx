import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import useAuthStore from "../../store/useAuthStore";

const ProfileComponent = () => {
  const { user, logout } = useAuthStore();
  return (
    <div>
      <div className="relative flex leading-none">
        <Dropdown
          label={
            <Avatar alt="User settings" img="\assets\images\ron.jpg" rounded />
          }
          arrowIcon={false}
          inline
        >
          <Dropdown.Header>
            {/* <span className="text-sm">Bonnie Green</span> */}
            <span className="truncate text-sm font-medium">{user.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProfileComponent;
