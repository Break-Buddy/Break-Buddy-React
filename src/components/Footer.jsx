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
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        <img src={BBLogo2} alt="" />
        <div className="flex flex-col gap-6 text-white items-center md:items-start">
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
