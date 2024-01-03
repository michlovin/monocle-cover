import { NAV_DATA } from "../data.jsx";

const navBar = NAV_DATA;

function NavigationBar({ articlename, image }) {
  return (
    <div>
      {articlename}
      <img src={image} />
    </div>
  );
}
