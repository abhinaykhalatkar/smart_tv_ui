

const AppIcon = ({ app, onClick ,isSelected}) => {
  return (
    <div className={`app-icon ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <img src={`/shows/appIcons/${app.icon}`} alt={app.name} />
    </div>
  );
};

export default AppIcon;