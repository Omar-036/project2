import { Highlight, Hits } from "react-instantsearch";

function Courses({ hit }) {
  // console.log(hit);
  //   console.log(hit.attribution);
  return (
    <div className="flex justify-between h-full w-full text-white cursor-pointer items-center min-h-12 hover:pl-8 px-4 py-3 transition-all duration-300 hover:bg-blue-700">
      <h3 className="title text-sm m-0">
        <Highlight attribute="original_title" hit={hit} />
      </h3>
      <img src={hit.backdrop_path} alt="" className="w-24 object-contain" />
    </div>
  );
}

function Test() {
  return (
    <div className="slide-top  z-[500] bo-scroll h-min max-h-96 overflow-scroll overflow-x-hidden w-full bg-blue-900 absolute top-[100%] left-0 duration-500 ">
      <Hits hitComponent={Courses} />
    </div>
  );
}

export default Test;
