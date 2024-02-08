function HowItWorks() {
  const instructions = [
    {
      number: 1,
      title: "Create a break",
      text: "Get creative and post a break as an invitation",
      icon: "icon",
    },
    {
      number: 2,
      title: "Join a break",
      text: "Be inspired and find likeminded remote workers",
      icon: "icon",
    },
    {
      number: 3,
      title: "Meet for your break",
      text: "Be punctual and meet your break buddy",
      icon: "icon",
    },
  ];

  return (
    <div className="">
      <div>
        <h2>HOW IT WORKS</h2>
        <div>
          {instructions.map((instruction, i) => (
            <div key={i}>
              <div>{instruction.number}</div>
              <div>
                <h2>{instruction.title}</h2>
                <h3>{instruction.text}</h3>
              </div>
              <div>{instruction.icon}</div>
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
