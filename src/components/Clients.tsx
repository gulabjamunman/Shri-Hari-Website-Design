import jkTyresLogo from "@/assets/clients/jk-tyres.png";
import gulshanLogo from "@/assets/clients/gulshan.png";
import dalmiaLogo from "@/assets/clients/dalmia-cement.png";
import rkMarblesLogo from "@/assets/clients/rk-marbles.png";
import keralaMineralsLogo from "@/assets/clients/kmml.png";

const clients = [
  {
    name: "JK Tyres",
    logo: jkTyresLogo,
  },
  {
    name: "Gulshan Polyols",
    logo: gulshanLogo,
  },
  {
    name: "Dalmia Group",
    logo: dalmiaLogo,
  },
  {
    name: "RK Marbles",
    logo: rkMarblesLogo,
  },
  {
    name: "Kerala Minerals",
    logo: keralaMineralsLogo,
  },
];

const Clients = () => {
  return (
    <section className="py-16 bg-background border-y border-border">

      <div className="container-wide">

        {/* Header */}
        <div className="text-center mb-12">

          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
            Trusted By Industry Leaders
          </span>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Prominent Client Roster
          </h2>

        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center p-6 bg-muted rounded-xl hover:bg-primary transition-all duration-300"
            >

              {/* Logo container */}
              <div className="w-24 h-16 flex items-center justify-center mb-3">

                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                />

              </div>

              {/* Client name */}
              <span className="text-sm font-medium text-foreground group-hover:text-primary-foreground text-center">
                {client.name}
              </span>

            </div>
          ))}

        </div>

        {/* Trust statement */}
        <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
          Experience of working with renowned clients across tyres, chemicals,
          minerals, marbles, and industrial sectors.
        </p>

      </div>

    </section>
  );
};

export default Clients;
