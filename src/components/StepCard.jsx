const StepCard = ({ step, index }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start mb-10 mx-8">
      {/* Text */}
      <div>
        {/* Image (optional) */}
        {step.image && (
          <div className="rounded overflow-hidden border border-white/10">
            <img
              src={step.image}
              alt={step.title}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold text-base-200 my-4">
          <span className="text-secondary mr-2">
            {String(index + 1)}.
          </span>
          {step.title}
        </h3>

        <p className="indent-4 text-base-300 text-sm leading-relaxed">{step.content}</p>

        {/* Notes (optional) */}
        {step.notes && (
          <div className="mt-4 border-l-2 border-accent pl-4">
            <h4 className="text-sm uppercase text-secondary mb-2">Notes</h4>
            <ul className="indent-2 text-sm text-gray-400 space-y-1">
              {step.notes.map((note, i) => (
                <li key={i}><span className="text-secondary">-</span> {note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepCard;
