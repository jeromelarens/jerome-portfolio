const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 mt-2 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
