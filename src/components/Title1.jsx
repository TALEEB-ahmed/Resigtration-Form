import image1 from "../assets/480430208_607734465487056_7013643162676582267_n.jpg";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

export default function Title1() {
  const imageStyle = {
    backgroundImage: `url(${image1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const imagelogo = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100px",
    height: "100px",
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        style={imageStyle}
        className="absolute inset-0 blur-[6px] scale-105"
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Logo */}
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
        style={imagelogo}
        className="  z-10 bonded
        absolute top-20
        rounded-full border-4 border-white/50 shadow-lg"
      ></motion.div>

      {/* Text */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-4xl lg:text-5xl text-center max-w-5xl font-extrabold text-white m-2"
      >
        يمكنك أن تكون عنصر فاعل في تحسين ظروف{" "}
        <span className="text-third">مسجدك</span>
      </motion.h1>

    </section>
  );
}
