import "./Dashboard.css";

import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import {
  FaDonate,
  FaUsers,
  FaHandshake,
  FaEnvelope,
  FaArrowUp,
  FaCalendarAlt,
  FaBell,
  FaImages,
  FaArrowRight,
  FaChartLine,
  FaUserFriends,
  FaSpinner
} from "react-icons/fa";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    donations: 0,
    volunteers: 0,
    partners: 0,
    messages: 0
  });

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/dashboard/stats"
      );

      const data = await response.json();

      if (data.success) {
        setStats(data.stats);
        setActivity(data.activity);
      }
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  }

  const cards = [
    {
      title: "Total Donations",
      value: `UGX ${Number(
        stats.donations
      ).toLocaleString()}`,
      growth: "+12%",
      icon: <FaDonate />
    },

    {
      title: "Volunteers",
      value: stats.volunteers,
      growth: "+24",
      icon: <FaUsers />
    },

    {
      title: "Partners",
      value: stats.partners,
      growth: "+4",
      icon: <FaHandshake />
    },

    {
      title: "Messages",
      value: stats.messages,
      growth: "+8",
      icon: <FaEnvelope />
    }
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="dashboard-loading">
          <FaSpinner className="spin" />
          <h2>Loading Dashboard...</h2>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="dashboard">

        {/* HEADER */}
        <div className="dashboard-header">
          <div>
            <span>ADMIN PANEL</span>

            <h1>
              Welcome Back 👋
            </h1>

            <p>
              Manage S&S One Family Foundation
              from one dashboard.
            </p>
          </div>

          <div className="dashboard-actions">
            <button>
              <FaBell />
              Notifications
            </button>

            <button>
              <FaCalendarAlt />
              Schedule
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="admin-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="admin-card"
            >
              <div className="card-top">
                <div className="card-icon">
                  {card.icon}
                </div>

                <div className="growth">
                  <FaArrowUp />
                  {card.growth}
                </div>
              </div>

              <h2>{card.value}</h2>

              <p>{card.title}</p>
            </div>
          ))}
        </div>

        {/* LOWER */}
        <div className="dashboard-lower">

          {/* ACTIVITY */}
          <div className="activity">

            <div className="section-header">
              <h2>Recent Activity</h2>

              <button>
                View All
                <FaArrowRight />
              </button>
            </div>

            {activity.length === 0 ? (
              <div className="empty-state">
                No activity found
              </div>
            ) : (
              activity.map((item) => (
                <div
                  key={item.id}
                  className="activity-item"
                >
                  <div className="dot" />

                  <div>
                    <h4>{item.title}</h4>

                    <span>
                      {new Date(
                        item.created_at
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="side-area">

            <div className="quick-actions">
              <h2>Quick Actions</h2>

              <button>
                <FaDonate />
                View Donations
              </button>

              <button>
                <FaUserFriends />
                Manage Volunteers
              </button>

              <button>
                <FaImages />
                Open Gallery
              </button>
            </div>

            <div className="mini-card">
              <div className="mini-icon">
                <FaChartLine />
              </div>

              <h3>Performance</h3>

              <p>
                Foundation growth is being
                tracked in real time.
              </p>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}