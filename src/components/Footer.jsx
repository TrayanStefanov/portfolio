import { useState } from "react";
import { Link, useLocation } from "react-router";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaViber } from "react-icons/fa";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {
  const { t } = useTranslation();
  const emailUser1 = t("footer.email.value1");
  const emailUser2 = t("footer.email.value2");
  const emailDomain = "gmail.com";
  const email = `${emailUser1}${emailUser2}@${emailDomain}`;
  const phone = t("footer.phone");

  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const contactsStyle =
    location.pathname === "/contacts" && !isMobile
      ? "fixed bottom-0 left-0"
      : "";

  const [tooltip, setTooltip] = useState(""); // stores currently hovered/touched info
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleHover = (text, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip(text);
    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 10 });
  };

  const handleLeave = () => setTooltip("");

  return (
    <div className="relative">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed border border-secondary bg-primary text-secondary px-2 py-1 rounded text-sm z-50 whitespace-nowrap select-none pointer-events-none"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(-50%, -120%)", // above icon
          }}
        >
          {tooltip}
        </div>
      )}

      <footer
        className={`footer bg-primary text-primary justify-around py-2.5 lg:p-6 px-4 lg:px-15 border-t-2 border-secondary block ${contactsStyle}`}
      >
        <div className="flex flex-row flex-wrap justify-center w-full mx-auto pb-2.5 md:px-4 gap-4">
          {/* Phone */}
          <a
            href={`tel:${phone}`}
            onMouseEnter={(e) => handleHover(phone, e)}
            onMouseLeave={handleLeave}
            onTouchStart={(e) => handleHover(phone, e)}
            onTouchEnd={handleLeave}
            className="flex items-center gap-1 text-secondary text-2xl lg:text-3xl"
          >
            <FiPhoneCall />
          </a>

          {/* Viber */}
          <a
            href={`viber://chat?number=${phone.replace(/\D/g, "")}`}
            onMouseEnter={(e) => handleHover(phone, e)}
            onMouseLeave={handleLeave}
            onTouchStart={(e) => handleHover(phone, e)}
            onTouchEnd={handleLeave}
            className="flex items-center gap-1 text-secondary text-2xl lg:text-3xl"
          >
            <FaViber />
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            onMouseEnter={(e) => handleHover(email, e)}
            onMouseLeave={handleLeave}
            onTouchStart={(e) => handleHover(email, e)}
            onTouchEnd={handleLeave}
            className="flex items-center gap-1 text-secondary text-2xl lg:text-3xl"
          >
            <FiMail />
          </a>

          {/* LinkedIn */}
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
            className="text-secondary text-2xl lg:text-3xl"
          >
            <TbBrandLinkedin />
          </a>

          {/* GitHub */}
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
            className="text-secondary text-2xl lg:text-3xl"
          >
            <TbBrandGithub />
          </a>
        </div>

        {/* Slogan */}
        <p className="justify-self-center self-center text-center text-secondary text-xs md:text-xl">
          {t("footer.credits")}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
