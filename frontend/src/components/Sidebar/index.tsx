import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";

export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Sidebar className="self-stretch w-full h-[90vh] flex flex-col w-40 gap-4 items-center justify-between z-20  pb-4 ">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Dashboard</Sidebar.Item>
            <Sidebar.Collapse label="Request">
              <Sidebar.Item href="#">Leave Request</Sidebar.Item>
              <Sidebar.Item href="#">Log Request</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#">Inbox</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
