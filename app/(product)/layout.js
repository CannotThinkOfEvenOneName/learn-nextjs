import MainSideBar from "@/components/sidebar/main-sidebar";
export default function ProductLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-12 max-h-screen overflow-hidden">
        <aside className="col-span-3">
          <MainSideBar />
        </aside>
        <main className="col-span-9 bg-gray-100 p-8 max-h-screen overflow-auto">
          <header>header</header>
          <section>{children}</section>
        </main>
      </div>
    </>
  );
}
