import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaViber } from "react-icons/fa";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

const ContactsPage = () => {
  const { t } = useTranslation();

  const emailUser1 = t("footer.email.value1");
  const emailUser2 = t("footer.email.value2");
  const emailDomain = "gmail.com";
  const email = `${emailUser1}${emailUser2}@${emailDomain}`;
  const phone = t("footer.phone");
  const cleanPhone = phone.replace(/\D/g, "");

  const [tooltip, setTooltip] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleHover = (text, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip(text);
    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 10 });
  };

  const handleLeave = () => setTooltip("");

  return (
    <div className="relative">
      {tooltip && (
        <div
          className="fixed border border-secondary bg-primary text-secondary px-2 py-1 rounded text-sm z-50 whitespace-nowrap select-none pointer-events-none"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(-50%, -120%)",
          }}
        >
          {tooltip}
        </div>
      )}

      <div className="overflow-hidden pt-20 min-h-[80vh] mx-15 lg:mt-15 text-center justify-items-center lg:gap-y-16 content-center">
        <h1 className="hidden text-3xl 2xl:text-5xl text-base-200 lg:flex flex-col lg:flex-row lg:gap-2 lg:mb-8">
          <span>{t("contacts.desktopTitle.value1")}</span>
          <span className="text-secondary font-semibold">
            {t("contacts.desktopTitle.value2")}
          </span>
          <span className="text-secondary">?</span>
        </h1>

        <h1 className="hidden text-3xl 2xl:text-5xl text-base-200 lg:flex flex-col lg:flex-row lg:gap-2 lg:mb-6">
          <span>{t("contacts.desktopTitle.value3")}</span>
          <span className="text-secondary font-semibold">
            {t("contacts.desktopTitle.value4")}
          </span>
          <span className="text-secondary">?</span>
        </h1>

        <h1 className="text-3xl 2xl:text-5xl text-base-200 flex flex-col lg:flex-row lg:gap-2 lg:mb-16">
          {t("contacts.title.value1")}
          <span className="text-secondary font-semibold">
            {t("contacts.title.value2")}
          </span>
          <span>
            {t("contacts.title.value3")}
            <span className="text-secondary">?</span>
          </span>
        </h1>

        <div className="flex flex-col mt-6 lg:gap-12">
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-12">
            <div className="flex flex-col gap-y-4 lg:gap-y-6">
              {/* Phone */}
              <div className="flex flex-row gap-5">
                <a
                  href={`tel:${phone}`}
                  onMouseEnter={(e) => handleHover(phone, e)}
                  onMouseLeave={handleLeave}
                  onTouchStart={(e) => handleHover(phone, e)}
                  onTouchEnd={handleLeave}
                  className="self-center"
                >
                  <FiPhoneCall className="w-6 h-6 lg:h-10 lg:w-10 text-secondary" />
                </a>
                <div className="flex flex-col">
                  <span className="text-xs md:text-xl 2xl:text-3xl text-base-200 text-left">
                    {t("contacts.phoneLabel")}
                  </span>
                  <span className="text-[10px] md:text-lg 2xl:text-2xl text-secondary indent-1.5 text-left -mt-0.5 font-semibold">
                    <a
                      href={`tel:${phone}`}
                      onMouseEnter={(e) => handleHover(phone, e)}
                      onMouseLeave={handleLeave}
                      onTouchStart={(e) => handleHover(phone, e)}
                      onTouchEnd={handleLeave}
                      className="self-center"
                    >
                      {phone}
                    </a>
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-row gap-5">
                <a
                  href={`mailto:${email}`}
                  onMouseEnter={(e) => handleHover(email, e)}
                  onMouseLeave={handleLeave}
                  onTouchStart={(e) => handleHover(email, e)}
                  onTouchEnd={handleLeave}
                  className="self-center"
                >
                  <FiMail className="w-6 h-6 lg:h-10 lg:w-10 text-secondary" />
                </a>
                <div className="flex flex-col">
                  <span className="text-xs md:text-xl 2xl:text-3xl text-base-200 text-left">
                    {t("contacts.emailLabel")}
                  </span>
                  <span className="text-[10px] md:text-lg 2xl:text-2xl text-secondary indent-1.5 text-left -mt-0.5 font-semibold">
                    <a
                      href={`mailto:${email}`}
                      onMouseEnter={(e) => handleHover(email, e)}
                      onMouseLeave={handleLeave}
                      onTouchStart={(e) => handleHover(email, e)}
                      onTouchEnd={handleLeave}
                    >
                      {email}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 lg:gap-y-6">
              {/* LinkedIn */}
              <div className="flex flex-row gap-5">
                <a
                  href={t("footer.social-links.linkedin")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) =>
                    handleHover(t("footer.social-links.linkedin"), e)
                  }
                  onMouseLeave={handleLeave}
                  onTouchStart={(e) =>
                    handleHover(t("footer.social-links.linkedin"), e)
                  }
                  onTouchEnd={handleLeave}
                  className="self-center"
                >
                  <TbBrandLinkedin className="w-6 h-6 lg:h-10 lg:w-10 text-secondary" />
                </a>
                <div className="flex flex-col">
                  <span className="text-xs md:text-xl 2xl:text-3xl text-base-200 text-left">
                    {t("contacts.linkedinLabel")}
                  </span>
                  <span className="text-[10px] md:text-lg 2xl:text-2xl text-secondary indent-1.5 text-left -mt-0.5 font-semibold">
                    <a
                      href={t("footer.social-links.linkedin")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={(e) =>
                        handleHover(t("footer.social-links.linkedin"), e)
                      }
                      onMouseLeave={handleLeave}
                      onTouchStart={(e) =>
                        handleHover(t("footer.social-links.linkedin"), e)
                      }
                      onTouchEnd={handleLeave}
                    >
                      {t("contacts.linkedin")}
                    </a>
                  </span>
                </div>
              </div>

              {/* Viber */}
              <div className="flex flex-row gap-5">
                <a
                  href={`viber://chat?number=${cleanPhone}`}
                  onMouseEnter={(e) => handleHover(phone, e)}
                  onMouseLeave={handleLeave}
                  onTouchStart={(e) => handleHover(phone, e)}
                  onTouchEnd={handleLeave}
                  className="self-center"
                >
                  <FaViber className="w-6 h-6 lg:h-10 lg:w-10 text-secondary" />
                </a>
                <div className="flex flex-col">
                  <span className="text-xs md:text-xl 2xl:text-3xl text-base-200 text-left">
                    {t("contacts.viberLabel")}
                  </span>
                  <span className="text-[10px] md:text-lg 2xl:text-2xl text-secondary indent-1.5 text-left -mt-0.5 font-semibold">
                    <a
                      href={`viber://chat?number=${cleanPhone}`}
                      onMouseEnter={(e) => handleHover(phone, e)}
                      onMouseLeave={handleLeave}
                      onTouchStart={(e) => handleHover(phone, e)}
                      onTouchEnd={handleLeave}
                    >
                      {t("contacts.viber")}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex flex-row mt-4 gap-5 lg:self-center">
            <a
              href={t("footer.social-links.github")}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) =>
                handleHover(t("footer.social-links.github"), e)
              }
              onMouseLeave={handleLeave}
              onTouchStart={(e) =>
                handleHover(t("footer.social-links.github"), e)
              }
              onTouchEnd={handleLeave}
              className="self-center"
            >
              <TbBrandGithub className="w-6 h-6 lg:h-10 lg:w-10 text-secondary" />
            </a>
            <div className="flex flex-col">
              <span className="text-xs md:text-xl 2xl:text-3xl text-base-200 text-left">
                {t("contacts.githubLabel")}
              </span>
              <span className="text-[10px] md:text-lg 2xl:text-2xl indent-1.5 text-left -mt-0.5 text-secondary font-semibold">
                <a
                  href={t("footer.social-links.github")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) =>
                    handleHover(t("footer.social-links.github"), e)
                  }
                  onMouseLeave={handleLeave}
                  onTouchStart={(e) =>
                    handleHover(t("footer.social-links.github"), e)
                  }
                  onTouchEnd={handleLeave}
                >
                  {t("contacts.github")}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
