import { Sidebar } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "../../hooks/useNavigate";
import { ROUTES } from "../../shared/enum";

export default function DrawerComponent() {
  const { navigate } = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Sidebar className="self-stretch w-full h-[90vh] flex flex-col w-40 gap-4 items-center justify-between z-20  pb-4 ">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            onClick={() => navigate(ROUTES.DASHBOARD)}
            className="cursor-pointer"
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse label="Request">
            <Sidebar.Item href="#">Leave Request</Sidebar.Item>
            <Sidebar.Item href="#">Log Request</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#">Inbox</Sidebar.Item>
          <Sidebar.Item
            onClick={() => navigate(ROUTES.USER_LIST)}
            className="cursor-pointer"
          >
            Users list
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
