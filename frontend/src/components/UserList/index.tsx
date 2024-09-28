import React from "react";
import UserTable from "./Table/UserTable";
import { CardComponent } from "../../shared/components/CardNav";
import DrawerComponent from "../Sidebar";

export const UserListComponent = () => {
  return (
    <CardComponent>
      <DrawerComponent />
      <UserTable />
    </CardComponent>
  );
};
