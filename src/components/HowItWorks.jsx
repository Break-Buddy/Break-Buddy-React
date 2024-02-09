import create from "../assets/iconCreate.png";
import join from "../assets/iconJoin.png";
import meet from "../assets/iconMeet.png";

function HowItWorks() {
  const instructions = [
    {
      number: 1,
      title: "Create a break",
      text: "Get creative and post a break as an invitation",
      icon: create,
    },
    {
      number: 2,
      title: "Join a break",
      text: "Be inspired and find likeminded remote workers",
      icon: join,
    },
    {
      number: 3,
      title: "Meet for your break",
      text: "Be punctual and meet your break buddy",
      icon: meet,
    },
  ];

  return (
    <div className="pt-12 pb-28 flex justify-center bg-[#EBF6FF]">
      <div className="flex flex-col justify-center items-center w-fit px-12 gap-12">
        <h2>HOW IT WORKS</h2>
        <div className="flex flex-col gap-9 md:gap-5">
          {instructions.map((instruction, i) => (
            <div
              key={i}
              className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-11"
            >
              <div className="flex gap-12">
                <div className="relative flex justify-center items-center">
                  <span className="absolute rounded-full border-[#007DE2] border-2 w-12 h-12"></span>
                  <h3>{instruction.number}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold">{instruction.title}</h2>
                  <h3 className="w-52 md:w-96">{instruction.text}</h3>
                </div>
              </div>
              <img className="" src={instruction.icon}></img>
            </div>
          ))}
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
