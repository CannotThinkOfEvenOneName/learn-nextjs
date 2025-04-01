import DashboardNavbar from "./_components/layout/dashboard-navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
}
