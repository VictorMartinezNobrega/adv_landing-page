// eslint-disable-next-line react/prop-types
export default function ShadowBoxes({ side }) {
  if (side === "left") {
    return (
      <div className="group">
        <div className="absolute z-[-1] bg-[#efce7840] w-full h-full -left-6 -top-6"></div>
        <div className="absolute z-[-1] bg-[#efce7830] w-full h-full -left-12 -top-12"></div>
        <div className="absolute z-[-1] bg-[#efce7820] w-full h-full -left-[4.5rem] -top-[4.5rem]"></div>
      </div>
    );
  }
  if (side === "right") {
    return (
      <div className="group">
        <div className="absolute z-[-1] bg-[#efce7840] w-full h-full -right-6 -top-6"></div>
        <div className="absolute z-[-1] bg-[#efce7830] w-full h-full -right-12 -top-12"></div>
        <div className="absolute z-[-1] bg-[#efce7820] w-full h-full -right-[4.5rem] -top-[4.5rem]"></div>
      </div>
    );
  }
  if (side === "bottom") {
    return (
      <div className="group">
        <div className="absolute z-[-1] bg-[#efce7830] w-full h-[calc(100%-48px)] -right-10 bottom-2/4 translate-y-2/4"></div>
        <div className="absolute z-[-1] bg-[#efce7830] w-full h-[calc(100%-48px)] -left-10 bottom-2/4 translate-y-2/4"></div>
      </div>
    );
  }
}
