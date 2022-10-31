import React, { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const usersPerPage = 10;
  const totalPages = users.length / usersPerPage;

  const fetchData = async () => {
    setLoading(true);
    const fetchUserData = await fetch(
      "https://randomuser.me/api/?page=3&results=100&seed=abc"
    );
    const readableData = await fetchUserData.json();
    setUsers(readableData.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading, please wait...</h2>;
  }
  return (
    <div>
      <div className="heading">
        <h2>users data</h2>
      </div>

      {users
        .slice((page - 1) * usersPerPage, page * usersPerPage)
        .map((user, index) => {
          return (
            <div className="user-data" key={index}>
              <div className="user">
                <div className="user-image">
                  <img src={user.picture.large} alt={user.name.first} />
                </div>

                <div className="user-info">
                  <h3>
                    {user.name.first} {user.name.last}
                  </h3>
                  <p>{user.email}</p>
                  <p>{user.login.username}</p>
                  <p>{user.gender}</p>
                </div>
              </div>
            </div>
          );
        })}
      <div className="pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
          className="prev"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((each) => (
          <button
            onClick={() => setPage(each)}
            key={each}
            className="pagination-btn"
          >
            {each}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
          className="next"
        >
          Next
        </button>
      </div>
      <p className="btn-num">
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Users;
