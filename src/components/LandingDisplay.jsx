function LandingDisplay() {
  return (
    <div className="px-16 pt-36">
      <div className="flex justify-center px-64 py-36 items-center gap-20">
        <div className="flex flex-col gap-4 w-1/2">
          <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet consectetur.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="w-fit px-6 border">button</button>
        </div>
        <div className="w-1/2">
          <img className="w-[30rem]" src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingDisplay;
