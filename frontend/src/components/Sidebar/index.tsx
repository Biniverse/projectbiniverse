import { Sidebar } from "flowbite-react";
import { useState } from "react";

export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar className="self-stretch w-full h-[90vh] flex flex-col w-40 gap-4 items-center justify-between z-20  pb-4 ">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Dashboard</Sidebar.Item>
            <Sidebar.Collapse label="E-commerce">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#">Inbox</Sidebar.Item>
            <Sidebar.Item href="#">Users</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sign In</Sidebar.Item>
            <Sidebar.Item href="#">Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
