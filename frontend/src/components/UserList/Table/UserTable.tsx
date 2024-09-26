import { Table, Button, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import { IUser } from "../../../shared/interface";
import http from "../../../service/httpService";
import { getAllUsers } from "../../../service/Sign-Up/signUpService";
import { toUpperCase } from "../../../utils/toUpperCase";

const UserTable = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [paginatedUser, setPaginatedUsers] = useState<IUser[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsDropDown = [5, 10, 15];
  const [itemsPerPage, setItemsPerPage] = useState<number>(itemsDropDown[0]);
  const getPaginationButtons = (): (number | string)[] => {
    const buttons: (number | string)[] = [];

    buttons.push(1);

    if (totalPages > 1) {
      if (currentPage > 3) {
        buttons.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }

      if (currentPage < totalPages - 2) {
        buttons.push("...");
      }

      if (totalPages > 1) {
        buttons.push(totalPages);
      }
    }

    const uniqueButtons: (number | string)[] = [];
    buttons.forEach((button) => {
      if (!uniqueButtons.includes(button)) {
        uniqueButtons.push(button);
      }
    });

    return uniqueButtons.slice(0, 5);
  };

  const handlePageChange = (page: number | string) => {
    if (page === "...") return;
    setCurrentPage(page as number);
  };

  const getUsers = async () => {
    try {
      const data = await getAllUsers();
      if (data) {
        setUsers(data);
        const totalPage = Math.ceil(data.length / itemsPerPage);
        setTotalPages(totalPage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPaginatedUsers(() => {
      return users.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    });
  }, [users, currentPage, itemsPerPage, totalPages]);

  useEffect(() => {
    const totalPageCount = Math.ceil(users.length / itemsPerPage);
    setTotalPages(totalPageCount);
    setCurrentPage(1);
  }, [users, itemsPerPage]);

  const init = () => {
    getUsers();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="p-5 w-full mt-0 self-start">
      <Table striped={true} className="w-full">
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Contact</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {paginatedUser.map((user: IUser, index: number) => (
            <Table.Row className="bg-white" key={index}>
              <Table.Cell>{user.employeeId}</Table.Cell>
              <Table.Cell>
                {toUpperCase(`${user.firstName} ${user.lastName}`)}
              </Table.Cell>
              <Table.Cell>{toUpperCase(user.role)}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.contact}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className="flex justify-end mt-4 space-x-2 items-center">
        <Dropdown label={`Rows ${itemsPerPage}`} inline={true}>
          {itemsDropDown.map((item) => (
            <Dropdown.Item key={item} onClick={() => setItemsPerPage(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown>
        {getPaginationButtons().map((button, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(button)}
            disabled={currentPage === button || button === "..."}
            color={currentPage === button ? "dark" : "light"}
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
