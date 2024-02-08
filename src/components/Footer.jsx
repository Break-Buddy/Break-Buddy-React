import BBLogo2 from "../assets/BBLogo2.png";

function Footer() {
  const footerLinks = [
    {
      title: "Community Guidelines",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <div className="bg-[#003F71] px-9 py-8">
      <div className="flex items-center justify-between">
        <img src={BBLogo2} alt="" />
        <div className="flex flex-col gap-6 text-white">
          {footerLinks.map((link, i) => (
            <div key={i}>
              <a href="#">{link.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
