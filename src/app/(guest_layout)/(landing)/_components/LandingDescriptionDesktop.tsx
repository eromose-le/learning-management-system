const LandingDescriptionDesktop = ({
  LandingDescriptionCardA,
  LandingDescriptionCardB,
  LandingDescriptionCardC,
}: {
  LandingDescriptionCardA: React.ReactNode;
  LandingDescriptionCardB: React.ReactNode;
  LandingDescriptionCardC: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-9 w-full">
      {LandingDescriptionCardA}
      {LandingDescriptionCardB}
      {LandingDescriptionCardC}
    </div>
  );
};

export default LandingDescriptionDesktop;
