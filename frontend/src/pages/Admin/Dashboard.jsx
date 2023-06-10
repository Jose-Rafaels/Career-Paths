import Table from "react-bootstrap/Table";
import "./Styles.css";
import Error from "../Error/Error";
import Title from "../../components/Layout/Title";

function Dashboard() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <>
          <Title title="Dashboard">
            <>
              <div className="dashboard">
                <p className="intro-title">Admin Dashboard</p>
                <p className="intro-subtitle">
                  Berikut adalah hasil tes beberapa mahasiswa yang sudah
                  menyelesaikan tes MBTI
                </p>
                <Table striped bordered className="table-admin">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Test Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>ISTJ</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>ENFJ</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>ENFJ</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>ENFJ</td>
                    </tr>
                  </tbody>
                </Table>
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
