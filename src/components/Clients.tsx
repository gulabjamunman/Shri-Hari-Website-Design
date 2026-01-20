const clients = [
  { name: "JK Tyres", initials: "JK" },
  { name: "Gulshan Polyols", initials: "GP" },
  { name: "Dalmia Group", initials: "DG" },
  { name: "RK Marbles", initials: "RK" },
  { name: "Kerala Minerals", initials: "KM" },
  { name: "TY Industries", initials: "TY" },
];

const Clients = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
            Trusted By Industry Leaders
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Prominent Client Roster
          </h2>
        </div>

        {/* Client logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center p-6 bg-muted rounded-xl hover:bg-primary transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3 shadow-md">
                <span className="font-display text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {client.initials}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
          Experience of working with renowned clients across tyres, chemicals, minerals, 
          marbles, and industrial sectors.
        </p>
      </div>
    </section>
  );
};

export default Clients;
