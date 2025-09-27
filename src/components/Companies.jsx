import ackoLogo from "../images/acko.png";
import Carolinas from "/companiesLogo/Carolinas.png";
import RetailCraft from "/companiesLogo/RetailCraft.png";
import Ahmad from "/companiesLogo/Ahmad.png";
import countrydelightLogo from "../images/country-logo-1.png";
import googleLogo from "../images/google-logo.png";
import metaLogo from "../images/meta-logo.png";

const Companies = () => {
  const logos = [
    // { src: ackoLogo, alt: "P3S Global" },
    { src: Carolinas, alt: "Carolinas" },
    { src: RetailCraft, alt: "Retail Craft Asia" },
    // { src: Ahmad, alt: "Ahmad Coal Corporation" },
    // { src: countrydelightLogo, alt: "Eealnorbliss" },
    
    // { src: ackoLogo, alt: "Acko" },
    // { src: amazonLogo, alt: "Amazon" },
    // { src: beardoLogo, alt: "Beardo" },
    // { src: bellavitaLogo, alt: "BellaVita" },
    // { src: countrydelightLogo, alt: "Country Delight" },
    // { src: googleLogo, alt: "Google" },
    // { src: metaLogo, alt: "Meta" },
  ];

  return (
    <div className="bg-transparent mt-24 py-8 sm:my-8 rounded-xl">
      <h2 className="text-center text-lg sm:text-2xl font-bold text-white mb-6 tracking-tight">
        Trusted by the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-300">
          World’s Most Innovative Teams
        </span>
      </h2>
      <div className="flex justify-center px-8 md:pl-[30%] pl-[2%] md:pr-[30%] pr-[2%]">
        <div className="overflow-hidden relative">
          {/* Scrolling container */}
          <div className="flex animate-marquee space-x-12 items-center">
            {logos.map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-6  sm:h-10 hover:scale-105 transition-transform duration-200"
              />
            ))}
            {/* Duplicate set of logos for seamless looping */}
            {Array(5)
              .fill()
              .map((_, duplicateIndex) =>
                logos.map((logo, index) => (
                  <img
                    key={`${logo.alt}-duplicate-${duplicateIndex}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 hover:scale-105 transition-transform duration-200"
                  />
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
