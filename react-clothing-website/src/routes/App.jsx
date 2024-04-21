import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import LoaderSpinner from "../components/LoaderSpinner";
import FetchItems from "../components/FetchItems";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoaderSpinner /> : <Outlet />}
    </>
  );
}

export default App;
