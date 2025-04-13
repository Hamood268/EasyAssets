import { useState } from "react"
import IssuesList from "../../components/IssueTracker/IssuesList";
import { issue } from "../../types/issue";

const IssueTrackerDashboard = () => {

  // MockData
  const mockIssues: issue[] = [
    {
      issueId: "ISSUE-001",
      assetId: "ASSET-1001",
      reportedBy: "Alice_W",
      description: "Screen flickers intermittently during login.",
      status: "open",
      createdAt: new Date("2025-04-01T10:15:00Z"),
      updatedAt: new Date("2025-04-01T10:15:00Z"),
    },
    {
      issueId: "ISSUE-002",
      assetId: "ASSET-1002",
      reportedBy: "Dev_James",
      description: "Unable to submit timesheet from mobile app.",
      status: "resolved",
      createdAt: new Date("2025-03-30T08:00:00Z"),
      updatedAt: new Date("2025-04-02T09:30:00Z"),
    },
    {
      issueId: "ISSUE-003",
      assetId: "ASSET-1003",
      reportedBy: "Maria98",
      description: "Dashboard takes too long to load after update.",
      status: "open",
      createdAt: new Date("2025-04-05T13:45:00Z"),
      updatedAt: new Date("2025-04-05T13:45:00Z"),
    },
    {
      issueId: "ISSUE-004",
      assetId: "ASSET-1004",
      reportedBy: "Rajeev_T",
      description: "Email notifications fail to trigger on task completion.",
      status: "resolved",
      createdAt: new Date("2025-03-25T11:20:00Z"),
      updatedAt: new Date("2025-04-01T15:05:00Z"),
    },
    {
      issueId: "ISSUE-005",
      assetId: "ASSET-1005",
      reportedBy: "Clara_K",
      description: "Profile image upload results in unknown error.",
      status: "open",
      createdAt: new Date("2025-04-06T09:10:00Z"),
      updatedAt: new Date("2025-04-06T09:10:00Z"),
    },
    {
      issueId: "ISSUE-006",
      assetId: "ASSET-1006",
      reportedBy: "Benito_Tech",
      description: "QR scanner fails to initiate in warehouse module.",
      status: "resolved",
      createdAt: new Date("2025-03-28T07:45:00Z"),
      updatedAt: new Date("2025-04-03T10:00:00Z"),
    },
    {
      issueId: "ISSUE-007",
      assetId: "ASSET-1007",
      reportedBy: "Nina_Dev",
      description: "System logs out automatically after 5 minutes of inactivity.",
      status: "open",
      createdAt: new Date("2025-04-07T08:30:00Z"),
      updatedAt: new Date("2025-04-07T08:30:00Z"),
    },
    {
      issueId: "ISSUE-008",
      assetId: "ASSET-1008",
      reportedBy: "Mark_Zed",
      description: "Push notifications not received on Android devices.",
      status: "resolved",
      createdAt: new Date("2025-03-29T14:10:00Z"),
      updatedAt: new Date("2025-04-01T12:40:00Z"),
    },
    {
      issueId: "ISSUE-009",
      assetId: "ASSET-1009",
      reportedBy: "LilyM",
      description: "Calendar sync fails with external providers.",
      status: "open",
      createdAt: new Date("2025-04-06T11:25:00Z"),
      updatedAt: new Date("2025-04-06T11:25:00Z"),
    },
    {
      issueId: "ISSUE-010",
      assetId: "ASSET-1010",
      reportedBy: "Tony_S",
      description: "Frequent 500 errors on payment gateway integration.",
      status: "resolved",
      createdAt: new Date("2025-03-27T16:00:00Z"),
      updatedAt: new Date("2025-04-02T10:15:00Z"),
    },
    {
      issueId: "ISSUE-011",
      assetId: "ASSET-1011",
      reportedBy: "Chloe_X",
      description: "Voice recognition not detecting certain commands.",
      status: "open",
      createdAt: new Date("2025-04-08T07:00:00Z"),
      updatedAt: new Date("2025-04-08T07:00:00Z"),
    },
    {
      issueId: "ISSUE-012",
      assetId: "ASSET-1012",
      reportedBy: "Gustavo_F",
      description: "Data export to Excel truncates large text fields.",
      status: "resolved",
      createdAt: new Date("2025-03-26T09:55:00Z"),
      updatedAt: new Date("2025-04-03T08:35:00Z"),
    },
    {
      issueId: "ISSUE-013",
      assetId: "ASSET-1013",
      reportedBy: "Neha_Dev",
      description: "Dark mode not applying correctly on certain screens.",
      status: "open",
      createdAt: new Date("2025-04-05T14:45:00Z"),
      updatedAt: new Date("2025-04-05T14:45:00Z"),
    },
    {
      issueId: "ISSUE-014",
      assetId: "ASSET-1014",
      reportedBy: "Tommy_K",
      description: "Map component crashes when switching tabs rapidly.",
      status: "resolved",
      createdAt: new Date("2025-03-31T13:15:00Z"),
      updatedAt: new Date("2025-04-04T10:50:00Z"),
    },
    {
      issueId: "ISSUE-015",
      assetId: "ASSET-1015",
      reportedBy: "Diane_W",
      description: "Search functionality does not return archived results.",
      status: "open",
      createdAt: new Date("2025-04-09T10:05:00Z"),
      updatedAt: new Date("2025-04-09T10:05:00Z"),
    },
    {
      issueId: "ISSUE-016",
      assetId: "ASSET-1016",
      reportedBy: "Imran_L",
      description: "Notification badge count is inaccurate after reading messages.",
      status: "resolved",
      createdAt: new Date("2025-03-30T07:25:00Z"),
      updatedAt: new Date("2025-04-01T17:20:00Z"),
    },
  ];


  const [currentTab, setCurrentTab] = useState<"active" | "resolved">("active");
  return (
    <div className="w-full h-screen flex justify-end">
      <div className="w-full max-w-6xl bg-white flex flex-col h-full p-2">
        <div className="flex border-b border-gray-300 mb-4">
          <div
            className={`flex-1 text-lg pt-5 text-center font-semibold cursor-default ${currentTab === "active"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "border-b-2 border-none text-gray-400 hover:text-gray-700"
              }`}
            onClick={() => setCurrentTab("active")}
          >
            Active Issues
          </div>
          <div
            className={`flex-1 pt-5 text-lg text-center font-semibold cursor-default ${currentTab === "resolved"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "border-b-2 border-none text-gray-400 hover:text-gray-700"
              }`}
            onClick={() => setCurrentTab("resolved")}
          >
            Resolved Issues
          </div>
        </div>
        <div className="w-full overflow-y-auto custom-scroll">
          <IssuesList issuesList={ currentTab === "active" ? mockIssues.filter((item:issue) => item.status === "open") :  mockIssues.filter((item:issue) => item.status === "resolved")} />
        </div>
      </div>
    </div>
  )
}

export default IssueTrackerDashboard