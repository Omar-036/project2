import BigOWebsite from "./BicoDesc";
import RecentActions from "./RecentActions";
import Topics from "./Topics";

function Main() {
  const isAuthenticated = false;
  return (
    <div className="">
      <BigOWebsite />
      {isAuthenticated ? (
        <RecentActions />
      ) : (
        <div className="px-12">
          <div className="my-12 p-24 rounded bg-[url('https://source.unsplash.com/oyXis2kALVg')] bg-cover bg-center text-white"></div>
        </div>
      )}
      <Topics />
    </div>
  );
}

export default Main;
