import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <div className="flex items-center justify-center my-12">
      {/* Left Arrow */}
      {/* <div className="h-46 text-secondary opacity-80 hover:opacity-100 content-start cursor-default text-6xl/4 ">
        {"<"}
      </div> */}

      {/* Halo Container */}
      <div className="relative flex items-center justify-center h-100%">
        <motion.div
          /* animate={{ scale: [1, 1.3, 1, 0.8, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} */
          className="absolute -left-3 -top-4 xl:-left-8 xl:-top-6 text-secondary opacity-80 hover:opacity-100 content-end cursor-default text-6xl/11 lg:text-[120px]"
        >
          {"<"}
        </motion.div>
        <motion.div
          animate={{ x: [-8, 0, -8] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -left-12 -top-14 xl:-left-24 xl:-top-38 text-secondary text-[160px] lg:text-[320px] font-thin select-none"
        >
          {"{"}
        </motion.div>
        {/* Profile Image */}
        <div className="relative w-46 h-46 xl:w-[320px] xl:h-[320px] content-end rounded-full border-2 border-secondary bg-radial from-accent from-40% to-primary to-100% shadow-xl">
          <img
            src={"/portfolio/" + "profile.png"} // <-- replace with your image path
            alt="Profile"
            className="w-32 h-44 xl:w-[260px] xl:h-[350px] justify-self-center mt-2 object-cover"
          />
        </div>
        <motion.div
          animate={{ x: [8, 0, 8] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute -right-12 -top-14 xl:-right-24 xl:-top-38 text-secondary text-[160px] lg:text-[320px] font-[20] select-none"
        >
          {"}"}
        </motion.div>
        <motion.div
          /* animate={{ scale: [1, 1.1, 1, 0.9, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} */
          className="absolute -right-4 xl:-right-12 bottom-0 text-secondary opacity-80 hover:opacity-100 content-end cursor-default text-6xl/11 lg:text-[120px]"
        >
          {">"}
        </motion.div>
      </div>

      {/* Right Arrow */}
      {/* <div className="h-46 text-secondary opacity-80 hover:opacity-100 content-end cursor-default text-6xl/11">
        {">"}
      </div> */}
    </div>
  );
};

export default ProfileImage;
