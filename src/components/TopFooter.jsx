import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TopFooter = () => {
  const canvasRef = useRef(null);
  const formRef = useRef(null);
  const [textColor, setTextColor] = useState("text-white");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    message: "",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const TWO_PI = Math.PI * 2;

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    class Vector2D {
      constructor(x, y) {
        this._x = x;
        this._y = y;
      }
      setX(x) {
        this._x = x;
      }
      setY(y) {
        this._y = y;
      }
      getX() {
        return this._x;
      }
      getY() {
        return this._y;
      }
      setAngle(angle) {
        const length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
      }
      getAngle() {
        return Math.atan2(this._y, this._x);
      }
      setLength(length) {
        const angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
      }
      getLength() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
      }
      addTo(v2) {
        this._x += v2.getX();
        this._y += v2.getY();
      }
      subtractFrom(v2) {
        this._x -= v2.getX();
        this._y -= v2.getY();
      }
    }

    class Eye {
      constructor(x, y) {
        this.position = new Vector2D(x, y);
        this.irisPosition = new Vector2D(x, y);
        this.moveRadius = 20;
        this.sizeRadius = 5;
      }
      update(velocity, angle) {
        this.position.addTo(velocity);
        this.irisPosition.setX(
          this.position.getX() + Math.cos(angle) * this.moveRadius
        );
        this.irisPosition.setY(
          this.position.getY() + Math.sin(angle) * this.moveRadius
        );
      }
      render(context) {
        context.fillStyle = "#000000";
        context.beginPath();
        context.arc(
          this.irisPosition.getX(),
          this.irisPosition.getY(),
          this.sizeRadius,
          0,
          TWO_PI
        );
        context.fill();
      }
    }

    class Ghost {
      constructor(x, y, context) {
        this.position = new Vector2D(x, y);
        this.handPosition = new Vector2D(x, y);
        this.context = context;

        this.radius = 50;
        this.eyeDistance = 10;
        this.eyes = [];
        this.bodyBounceAngle = getRandomInt(0, 100);
        this.bounceDistance = 0.5;
        this.bounceSpeed = 0.05;

        this.velocity = new Vector2D(0, 0);
        this.velocity.setLength(Math.random() * 2 + 1);
        this.velocity.setAngle(Math.random() * TWO_PI);
      }

      initialize() {
        this.eyes.push(
          new Eye(
            this.position.getX() - this.eyeDistance,
            this.position.getY() - 10
          )
        );
        this.eyes.push(
          new Eye(
            this.position.getX() + this.eyeDistance,
            this.position.getY() - 10
          )
        );
      }

      update(mousePosition) {
        if (Math.random() < 0.01) {
          this.velocity.setLength(Math.random() * 2 + 1);
          this.velocity.setAngle(Math.random() * TWO_PI);
        }

        const bodyBounce = new Vector2D(
          0,
          Math.sin(this.bodyBounceAngle) * this.bounceDistance
        );
        const handBounce = new Vector2D(
          0,
          (Math.sin(this.bodyBounceAngle + 10) * this.bounceDistance) / 2
        );
        this.position.addTo(bodyBounce);
        this.handPosition.subtractFrom(handBounce);

        const dx = mousePosition.x - this.position.getX();
        const dy = mousePosition.y - this.position.getY();
        const angle = Math.atan2(dy, dx);

        for (let i = 0; i < this.eyes.length; i++) {
          this.eyes[i].update(bodyBounce, angle);
        }

        this.bodyBounceAngle += this.bounceSpeed;
      }

      render() {
        this.context.fillStyle = "#ffffff";
        this.context.beginPath();
        this.context.arc(
          this.position.getX(),
          this.position.getY(),
          this.radius,
          0,
          TWO_PI
        );
        this.context.fill();

        this.context.fillStyle = "#ffffff";
        this.context.beginPath();
        this.context.arc(
          this.handPosition.getX() - this.radius + 5,
          this.handPosition.getY() + 10,
          10,
          0,
          TWO_PI
        );
        this.context.fill();

        this.context.fillStyle = "#ffffff";
        this.context.beginPath();
        this.context.arc(
          this.handPosition.getX() + this.radius - 5,
          this.handPosition.getY() + 10,
          10,
          0,
          TWO_PI
        );
        this.context.fill();

        for (let i = 0; i < this.eyes.length; i++) {
          this.eyes[i].render(this.context);
        }
      }
    }

    const mousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const ghosts = [];
    const numberOfGhosts = Math.round(
      (window.innerWidth + window.innerHeight) / 200
    );

    for (let i = 0; i < numberOfGhosts; i++) {
      const ghost = new Ghost(
        getRandomInt(0, window.innerWidth),
        getRandomInt(0, window.innerHeight),
        context
      );
      ghost.initialize();
      ghosts.push(ghost);
    }

    const update = () => {
      for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].update(mousePosition);
      }
    };

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].render();
      }
    };

    const loop = () => {
      update();
      render();
      requestAnimationFrame(loop);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    loop();

    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const letters = ["G", "E", "T", " ", "I", "N", " ", "T", "O", "U", "C", "H"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://script.google.com/macros/s/AKfycbw1YlJloCqSC9x52IGSMFLs4cky8Q8dcD_kNSGokK8mjrWlN-hQIaKhd84w8qiKqfwX/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      console.log("Data successfully sent to Google Sheets");
      setFormData({
        firstName: "",
        lastName: "",
        workEmail: "",
        message: "",
      });
      setIsFormOpen(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#3785b2] via-[#00255C] to-[#111827] relative rounded-t-[50px] md:rounded-t-[80px] w-full pb-20">
      <canvas className="absolute inset-0 w-full h-full md:block hidden" ref={canvasRef}></canvas>

      <h3 className="relative z-10 text-center text-white font-bold text-2xl md:text-4xl lg:text-5xl px-4 md:px-10 mt-10 md:mt-20">
        Streamline Your Business with Expert ERP & IT Solutions
      </h3>

      <motion.div
        className="relative z-10 flex items-center justify-center w-[90%] max-w-[800px] md:h-[300px] h-auto bg-transparent border-4 border-white rounded-2xl shadow-xl overflow-hidden p-4 group mt-10 md:mt-16"
        initial="scatter"
        whileHover="align"
        variants={containerVariants}
        onClick={() => {
          setIsFormOpen(true);
          setTimeout(() => {
            if (formRef.current) {
              const rect = formRef.current.getBoundingClientRect();
              const scrollY = window.scrollY + rect.top - (window.innerHeight / 2) + (rect.height / 2)+250;
              window.scrollTo({ top: scrollY, behavior: "smooth" });
            }
          }, 100);
        }}
      >
        <div className="absolute inset-0 z-[-1] animate-pulse group-hover:bg-white blur-3xl opacity-80"></div>
        <div className="hidden md:flex flex-wrap justify-center items-center">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className={`text-[clamp(2rem,6vw,5rem)] font-serif font-bold text-white transition-all duration-300 group-hover:text-black mr-[8px] md:mr-[12px] ${letter === " " ? "w-[20px] md:w-[30px]" : ""}`}
              custom={index}
              variants={letterVariants}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
        <div className="text-4xl md:hidden block cursor-pointer" onClick={() => setTextColor(textColor === "text-white" ? "text-black" : "text-white")}>
          <span className={textColor}>GET IN TOUCH</span>
        </div>
      </motion.div>

      {isFormOpen && (
        <div ref={formRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setIsFormOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="workEmail"
              placeholder="Email"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            ></textarea>
            <button onClick={handleSubmit} className="w-full bg-blue-600 text-white p-2 rounded mt-2">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const containerVariants = {
  scatter: {},
  align: {},
};

const letterVariants = {
  scatter: () => ({
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    rotate: Math.random() * 60 - 30,
    transition: { duration: 0.1 },
  }),
  align: () => ({
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.1 },
  }),
};

export default TopFooter;
