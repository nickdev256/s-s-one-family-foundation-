import "./DonationsAdmin.css";

import {
FaSearch,
FaDonate,
FaMoneyBillWave,
FaSpinner
} from "react-icons/fa";

import {
useState,
useEffect
} from "react";

import AdminLayout from "../layout/AdminLayout";

export default function Donations() {

const API_URL =
import.meta.env.VITE_API_URL;

const [search, setSearch] =
useState("");

const [loading, setLoading] =
useState(true);

const [donations, setDonations] =
useState([]);

useEffect(() => {

fetchDonations();


}, []);

async function fetchDonations() {


try {

  setLoading(true);

  const response =
    await fetch(
      `${API_URL}/api/donations/all`
    );

  const data =
    await response.json();

  if (data.success) {

    setDonations(
      data.donations
    );

  }

} catch (error) {

  console.error(error);

} finally {

  setLoading(false);

}


}

const filtered =
donations.filter(item =>


  `${item.first_name || ""} ${item.last_name || ""}`
    .toLowerCase()
    .includes(
      search.toLowerCase()
    )

);


const totalReceived =
donations.reduce(
(sum, item) =>
sum + Number(item.amount || 0),
0
);

return (


<AdminLayout>

  <div className="donations">

    <div className="page-header">

      <div>

        <h1>
          Donations
        </h1>

        <p>
          Manage donor transactions
        </p>

      </div>

    </div>

    <div className="donation-stats">

      <div className="stat">

        <FaDonate />

        <div>

          <h3>
            UGX {totalReceived.toLocaleString()}
          </h3>

          <p>
            Total Received
          </p>

        </div>

      </div>

      <div className="stat">

        <FaMoneyBillWave />

        <div>

          <h3>
            {donations.length}
          </h3>

          <p>
            Total Donations
          </p>

        </div>

      </div>

    </div>

    <div className="search-box">

      <FaSearch />

      <input
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        placeholder="Search donor"
      />

    </div>

    <div className="table-card">

      {loading ? (

        <div
          style={{
            padding: "40px",
            textAlign: "center"
          }}
        >

          <FaSpinner
            className="spin"
          />

          <p>
            Loading donations...
          </p>

        </div>

      ) : (

        <table className="admin-table">

          <thead>

            <tr>

              <th>
                Donor
              </th>

              <th>
                Email
              </th>

              <th>
                Amount
              </th>

              <th>
                Frequency
              </th>

              <th>
                Payment
              </th>

              <th>
                Status
              </th>

              <th>
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.length === 0 ? (

              <tr>

                <td
                  colSpan="7"
                  style={{
                    textAlign:
                      "center"
                  }}
                >

                  No donations found

                </td>

              </tr>

            ) : (

              filtered.map(item => (

                <tr
                  key={item.id}
                >

                  <td>

                    {item.first_name}
                    {" "}
                    {item.last_name}

                  </td>

                  <td>

                    {item.email}

                  </td>

                  <td>

                    UGX {
                      Number(
                        item.amount
                      ).toLocaleString()
                    }

                  </td>

                  <td>

                    {item.frequency}

                  </td>

                  <td>

                    {
                      item.payment_method
                    }

                  </td>

                  <td>

                    <span
                      className={
                        item.status
                          ?.toLowerCase()
                      }
                    >

                      {item.status}

                    </span>

                  </td>

                  <td>

                    {
                      new Date(
                        item.created_at
                      ).toLocaleDateString()
                    }

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      )}

    </div>

  </div>

</AdminLayout>


);

}
