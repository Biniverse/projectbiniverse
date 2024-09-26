import { Avatar, Dropdown } from "flowbite-react";
import React from "react";

const ProfileComponent = () => {
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
            <span className="text-sm">Bonnie Green</span>
            <span className="truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProfileComponent;
