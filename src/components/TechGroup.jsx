import TechNode from "./TechNode";

const TechGroup = ({ groupKey, group, activeGroup, setActiveGroup }) => {
  return (
    <>
      {/* Group label */}
      <div
        className="absolute text-sm font-semibold text-secondary cursor-pointer"
        style={{
          left: "50%",
          top: "50%",
          transform: `translate(${group.center.x}px, ${group.center.y}px)`,
        }}
        onMouseEnter={() => setActiveGroup(groupKey)}
        onMouseLeave={() => setActiveGroup(null)}
      >
        {group.label}
      </div>

      {group.items.map((tech) => (
        <TechNode
          key={tech}
          label={tech}
          groupKey={groupKey}
          activeGroup={activeGroup}
        />
      ))}
    </>
  );
};

export default TechGroup;
