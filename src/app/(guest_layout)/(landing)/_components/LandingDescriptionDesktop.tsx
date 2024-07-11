const LandingDescriptionDesktop = ({
  cards,
}: {
  cards: React.ReactNode[];
}) => {
  return (
    <div className="flex items-center justify-center lg:justify-between flex-wrap gap-9 w-full">
      {cards.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
    </div>
  );
};

export default LandingDescriptionDesktop;
