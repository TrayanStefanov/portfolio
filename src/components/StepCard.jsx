import { useTranslation } from "react-i18next";

const StepCard = ({ step, index }) => {
  const { t } = useTranslation();
  const direction = index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";
  return (
    <div className="items-start mb-10 mx-8">
      {/* Text */}
      <div className={`flex flex-col gap-10 ${direction}`}>
        {/* Image (optional) */}
        {step.image && (
          <div className="rounded overflow-hidden lg:max-w-[50%]">
            <img
              src={import.meta.env.BASE_URL + step.image}
              alt={step.title}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex flex-col">
          <h3 className="text-xl lg:text-3xl font-semibold text-base-200 my-4">
            <span className="text-secondary mr-2">{String(index + 1)}.</span>
            {step.title}
          </h3>

          <p className="indent-4 text-base-300 text-sm lg:text-xl leading-relaxed">
            {step.content}
          </p>

          {/* Notes (optional) */}
          {step.notes && (
            <div className="mt-4 border-l-2 border-accent pl-4">
              <h4 className="text-sm lg:text-lg uppercase text-secondary mb-2">{t("projects.caseStudy.notes")}</h4>
              <ul className="indent-2 text-sm lg:text-lg text-base-300 space-y-1">
                {step.notes.map((note, i) => (
                  <li key={i}>
                    <span className="text-secondary">-</span> {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
