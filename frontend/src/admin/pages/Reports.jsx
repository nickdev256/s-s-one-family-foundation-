import "./Reports.css";

import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import {
  FaDonate,
  FaUsers,
  FaBook,
  FaHandshake,
  FaDownload,
  FaChartBar,
  FaSpinner
} from "react-icons/fa";

export default function Reports() {

  const [loading, setLoading] = useState(true);

  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  async function loadReports() {
    try {

      const response = await fetch(
        "http://localhost:5000/api/reports"
      );

      const data = await response.json();

      if (data.success) {

        setReports([
          {
            title: "Donations Report",
            icon: <FaDonate />,
            total: `UGX ${Number(
              data.reports.donations
            ).toLocaleString()}`,
            progress: "82%"
          },

          {
            title: "Volunteer Report",
            icon: <FaUsers />,
            total: data.reports.volunteers,
            progress: "71%"
          },

          {
            title: "Programs Report",
            icon: <FaBook />,
            total: data.reports.programs,
            progress: "89%"
          },

          {
            title: "Partnership Report",
            icon: <FaHandshake />,
            total: data.reports.partners,
            progress: "64%"
          }
        ]);
      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  function downloadReport(type) {

    alert(`${type} export coming soon`);

  }

  function generateReport(type) {

    alert(`${type} report generated`);

  }

  if (loading) {
    return (
      <AdminLayout>

        <div className="loading-box">

          <FaSpinner className="spin" />

          <h2>Loading Reports...</h2>

        </div>

      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="reports-page">

        <div className="reports-header">

          <span>
            REPORT CENTER
          </span>

          <h1>
            Reports Dashboard
          </h1>

          <p>
            Track NGO performance,
            export records and monitor growth.
          </p>

        </div>

        <div className="report-grid">

          {reports.map((report, index) => (

            <div
              key={index}
              className="report-card"
            >

              <div className="report-icon">
                {report.icon}
              </div>

              <h2>
                {report.title}
              </h2>

              <h3>
                {report.total}
              </h3>

              <div className="progress">

                <div
                  style={{
                    width: report.progress
                  }}
                />

              </div>

              <span>
                Completion {report.progress}
              </span>

              <div className="report-actions">

                <button
                  onClick={() =>
                    generateReport(
                      report.title
                    )
                  }
                >
                  <FaChartBar />
                  Generate
                </button>

                <button
                  onClick={() =>
                    downloadReport(
                      report.title
                    )
                  }
                >
                  <FaDownload />
                  Download
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>
  );
}