import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenSectionProductsAction } from "../store/MenSectionProductsSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://clothingwebsiteserver.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(MenSectionProductsAction.addInitialItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
