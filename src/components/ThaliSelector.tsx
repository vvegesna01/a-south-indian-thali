"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ThaliSelector: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Fade out text completely by 30% scroll
  const mainTextOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const subTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);


  return (
    <section
      style={{
        padding: "0vh",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
       <motion.div
      style={{ 
        opacity: mainTextOpacity,
        scale: textScale,
        y: textY
      }}
      className="flex flex-col items-center"
    >
     <Image
              src="/assets/explore_more.png"
              alt="logo"
              width={10000}
              height={200}
              className="object-contain"
              style={{marginBottom:"5vh"}}
            />
      <br></br>
    </motion.div>


      <div
        style={{
          display: "grid",
          gap: "20px",
          height: "auto",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gridTemplateAreas: `
            "box1 box2 box3"
            "box4 center box5"
            "box6 box7 box8"
          `,
        }}
      >
        {/* Box 1 (Top Left) */}
        <div
          style={{
            gridColumn: "span 2",
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
          }
        >
          <Image
            src="/assets/thali_images/gujarathi.png"
            alt="Gujarati Thali"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Box 2 (Top Center) */}
        <div
          style={{
            backgroundColor: "lightblue",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
          }
        >
          <Image
            src="/assets/thali_images/replace_img.png"
            alt="Punjabi Thali"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Box 3 (Top Right) */}
        <div
          style={{
            backgroundColor: "lightgreen",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
          }
        >
          <Image
            src="/assets/thali_images/replace_img.png"
            alt="Bengali Thali"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Box 4 (Left Center) */}
        <div
          style={{
            backgroundColor: "lightyellow",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
          }
        >
          <Image
            src="/assets/thali_images/replace_img.png"
            alt="Rajasthani Thali"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Center Box */}
        <div
          style={{
            gridArea: "center",
            backgroundColor: "lightpink",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
          }
        >
          <Image
            src="/assets/thali_images/gujarathi.png"
            alt="Featured Thali"
            width={150}
            height={150}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ThaliSelector;
