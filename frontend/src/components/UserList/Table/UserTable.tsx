import {
  Table,
  Button,
  Dropdown,
  Pagination,
  FloatingLabel,
  TableBody,
  TableHead,
  TableCell,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { IUser } from "../../../shared/interface";
import { getAllUsers } from "../../../service/Sign-Up/signUpService";
import { toUpperCase } from "../../../utils/toUpperCase";
import { useNavigate } from "../../../hooks/useNavigate";
import { ROUTES } from "../../../shared/enum";

const UserTable = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedUser, setPaginatedUsers] = useState<IUser[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsDropDown = [5]; //TODO: COMEBACK HERE, TO ADD MULTIPLE CHOICES, SET TO 5 FOR NOW SINCE CARD COMPONENT IS NOT SCROLLABLE
  const [itemsPerPage, setItemsPerPage] = useState<number>(itemsDropDown[0]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const { navigate } = useNavigate();
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
    const filteredUsers = users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase())
    );
    const totalPageCount = Math.ceil(filteredUsers.length / itemsPerPage);
    setTotalPages(totalPageCount);
    if (currentPage > totalPageCount) {
      setCurrentPage(1);
    }
    const paginated = filteredUsers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setPaginatedUsers(paginated);
  }, [users, debouncedSearchTerm, currentPage, itemsPerPage, totalPages]);

  // USEEFFECT TO WATCH SEARCH TERM
  useEffect(() => {
    const searchHandler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(searchHandler);
    };
  }, [searchTerm]);

  // USEEFFECT TO UPDATE TOTAL PAGE COUNT
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
    <div className="p-5 w-full self-start">
      <div className="flex justify-between items-center mt-3 mb-4">
        <FloatingLabel
          variant="filled"
          label="Search Employee"
          className="rounded-xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button color={"blue"} onClick={() => navigate(ROUTES.ADD_USER)}>
          Add Employee
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table striped className="w-full">
          <Table.Head>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {paginatedUser.length > 0 ? (
              paginatedUser.map((user: IUser, index: number) => (
                <Table.Row className="bg-white" key={index}>
                  <Table.Cell>{user.employeeId}</Table.Cell>
                  <Table.Cell>
                    {toUpperCase(`${user.firstName} ${user.lastName}`)}
                  </Table.Cell>
                  <Table.Cell>{toUpperCase(user.role)}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.contact}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row className="bg-white">
                <Table.Cell className="text-center" colSpan={5}>
                  No data available
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-around items-center space-x-3">
          <div>
            <p className="text-sm text-gray-800">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          <Dropdown label={`Show ${itemsPerPage}`} color={"blue"} size={"xs"}>
            {itemsDropDown.map((item) => (
              <Dropdown.Item key={item} onClick={() => setItemsPerPage(item)}>
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>

        <div className="flex space-x-2 items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            showIcons
            color={"blue"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
