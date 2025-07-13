
export const ItemsFooter = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-3 justify-center">
      <Icon className="w-8 h-8" />
      <span className="text-xl sm:text-sm font-bold text-white">{text}</span>
    </div>
  );
};

