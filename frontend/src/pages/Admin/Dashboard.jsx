import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import Error from "../Error/Error";
import Title from "../../components/Layout/Title";

function Dashboard() {
  const [testUsers, setTestUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchTestUsers = () => {
    fetch("https://api-careerpaths.my.id/v1/test-user/all-result", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setTestUsers(data.result);
        }
      })
      .catch((error) => {
        console.error("Error fetching test users:", error);
      });
  };

  useEffect(() => {
    fetchTestUsers();
  }, []);

  const handleClick = (testResult) => {
    const personalityType = testResult.toUpperCase();

    navigate(`/personality/${personalityType}`);
  };

  const searchUsers = (searchTerm) => {
    return testUsers.filter((user) => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
  };

  const sortedTestUsers = testUsers.sort((a, b) => {
    const nameA = a.first_name.toLowerCase();
    const nameB = b.first_name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const filteredUsers = searchUsers(searchTerm);

  return (
    <>
      {localStorage.getItem("token") ? (
        <>
          <Title title="Admin">
            <>
              <div className="dashboard">
                <p className="intro-title">Admin Dashboard</p>
                <p className="intro-subtitle">
                  Berikut adalah hasil tes beberapa mahasiswa yang sudah
                  menyelesaikan tes MBTI
                </p>
                <Form.Control
                  className=" search mb-3 mt-4"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search name here..."
                />

                {testUsers.length === 0 ? (
                  <p className="intro-subtitle" style={{ fontWeight: "bold" }}>
                    Data tidak tersedia
                  </p>
                ) : (
                  <Table striped bordered className="table-admin">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Test Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user, index) => (
                        <tr
                          className="baris"
                          key={`${user.id}_${index}`}
                          onClick={() => handleClick(user.test_result)}
                        >
                          <td>{index + 1}</td>
                          <td>{user.email}</td>
                          <td>
                            {user.first_name} {user.last_name}
                          </td>
                          <td>{user.test_result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </div>
            </>
          </Title>
        </>
      ) : (
        <>
          <>
            <Error />
          </>
        </>
      )}
    </>
  );
}

export default Dashboard;
