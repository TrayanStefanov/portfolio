import React from "react";
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
  return (
    <div className="overflow-hidden pt-20 min-h-[80vh] mx-15 lg:mt-15 text-center justify-items-center lg:gap-y-16 content-center">
      <h1 className="hidden text-3xl lg:text-4xl text-base-200 lg:flex flex-col lg:flex-row lg:gap-2 lg:mb-8">
        <span className=" decoration-2 underline underline-offset-8 decoration-secondary">
          {t("contacts.desktopTitle.value1")}
        </span>
        <span className="text-secondary">?</span>
      </h1>
      <h1 className="hidden text-3xl lg:text-4xl text-base-200 lg:flex flex-col lg:flex-row lg:gap-2 lg:mb-6">
        <span className=" decoration-2 underline underline-offset-8 decoration-secondary">
          {t("contacts.desktopTitle.value2")}
        </span>
        <span className="text-secondary">?</span>
      </h1>
      <h1 className="text-3xl lg:text-4xl text-base-200 flex flex-col lg:flex-row lg:gap-2 lg:mb-16">
        {t("contacts.title.value1")}
        <span className="decoration-2 underline underline-offset-8 decoration-secondary">
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
            <div className="flex flex-row gap-5">
              <div className="self-center">
                <FiPhoneCall className="w-6 h-6 lg:h-10 lg:w-10 self-center text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs lg:text-2xl text-base-200 text-left">
                  {t("contacts.phoneLabel")}
                </span>
                <span className="text-[10px] lg:text-xl text-base-300 indent-1.5 text-left -mt-0.5">
                  {t("contacts.phone")}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="self-center">
                <FiMail className="w-6 h-6 lg:h-10 lg:w-10 self-center text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs lg:text-2xl text-base-200 text-left">
                  {t("contacts.emailLabel")}
                </span>
                <span className="text-[10px] lg:text-xl text-base-300 indent-1.5 text-left -mt-0.5">
                  {email}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 lg:gap-y-6">
            <div className="flex flex-row gap-5">
              <div className="self-center">
                <TbBrandLinkedin className="w-6 h-6 lg:h-10 lg:w-10 self-center text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs lg:text-2xl text-base-200 text-left">
                  {t("contacts.linkedinLabel")}
                </span>
                <span className="text-[10px] lg:text-xl text-base-300 indent-1.5 text-left -mt-0.5">
                  {t("contacts.linkedin")}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="self-center">
                <FaViber className="w-6 h-6 lg:h-10 lg:w-10 self-center text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs lg:text-2xl text-base-200 text-left">
                  {t("contacts.viberLabel")}
                </span>
                <span className="text-[10px] lg:text-xl text-base-300 indent-1.5 text-left -mt-0.5">
                  {t("contacts.viber")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 lg:self-center">
          <div className="self-center">
            <TbBrandGithub className="w-6 h-6 lg:h-10 lg:w-10 self-center text-secondary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs lg:text-2xl text-base-200 text-left">
              {t("contacts.githubLabel")}
            </span>
            <span className="text-[10px] lg:text-xl text-base-300 indent-1.5 text-left -mt-0.5">
              {t("contacts.github")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
