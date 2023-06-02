import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div className="container">
      <section style={styles.aboutUs}>
        <div style={styles.aboutUsContent}>
          <h2 style={styles.heading}>About Us</h2>
          <p>
            At <span style={styles.brand}>INFINITRIX</span>, we are dedicated to
            revolutionizing the gaming industry and providing an unparalleled
            gaming experience for players worldwide. With our innovative
            approach and cutting-edge technology, we strive to push the
            boundaries of what's possible in the world of gaming.
          </p>
          <p>
            Our mission is to create a platform that caters to gamers of all
            levels and interests. Whether you're a casual player looking for
            quick and fun games or a competitive gamer seeking intense
            challenges, <span style={styles.brand}>INFINITRIX</span> has
            something for everyone. We curate a vast collection of games
            spanning various genres, ensuring there's always a game that suits
            your preferences.
          </p>
          <p>
            We believe that gaming is not just a hobby; it's a passion that
            brings people together. That's why we foster a strong and inclusive
            gaming community where players can connect, interact, and share
            their experiences. Join our forums, engage in lively discussions,
            and make new friends who share your love for gaming.
          </p>
          <p>
            At <span style={styles.brand}>INFINITRIX</span>, we prioritize the
            user experience above everything else. Our platform is designed to
            be intuitive, user-friendly, and visually stunning. We continuously
            invest in the latest technologies to deliver seamless gameplay,
            high-quality graphics, and immersive sound effects. We are committed
            to providing a secure and reliable gaming environment where you can
            focus on what you enjoy most – gaming.
          </p>
          <p>
            Join us at <span style={styles.brand}>INFINITRIX</span> and embark
            on an endless journey of gaming excitement. Get ready to explore
            captivating worlds, challenge your skills, and unlock your true
            gaming potential. Together, let's redefine what it means to be a
            gamer.
          </p>
          <p>
            Thank you for choosing <span style={styles.brand}>INFINITRIX</span>.
            We can't wait to embark on this gaming adventure with you!
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  aboutUs: {
    padding: "50px",
  },
  aboutUsContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    color: "black",
    fontSize: "36px",
    marginBottom: "30px",
  },
  brand: {
    fontWeight: "bold",
  },
};
