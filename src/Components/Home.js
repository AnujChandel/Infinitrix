import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="container">
      <section style={styles.welcomeSection}>
        <div style={styles.welcomeContent}>
          <h2 style={styles.heading}>Welcome to INFINITRIX</h2>
          <p style={styles.description}>
            Get ready for an immersive gaming experience like no other. Dive
            into a world of excitement, adventure, and endless possibilities.
            Whether you're a seasoned gamer or new to the gaming scene, our
            platform has something for everyone.
          </p>
          <p style={styles.description}>
            Discover a vast collection of games spanning various genres – from
            action-packed shooters to mind-bending puzzles, thrilling RPGs to
            adrenaline-fueled racing games. Immerse yourself in stunning
            graphics, captivating storylines, and addictive gameplay that will
            keep you coming back for more.
          </p>
          <p style={styles.description}>
            Join our vibrant gaming community, connect with fellow gamers, and
            share your passion. Engage in lively discussions, participate in
            tournaments, and climb the ranks of our leaderboards. Let's build
            unforgettable memories together and forge friendships that extend
            beyond the virtual world.
          </p>
          <p style={styles.description}>
            At INFINITRIX, we are committed to delivering a seamless and secure
            gaming experience. Our platform is optimized for performance,
            ensuring smooth gameplay and minimal interruptions. Get ready to
            unleash your gaming potential and embark on extraordinary
            adventures.
          </p>
          <p style={styles.description}>
            Thank you for choosing INFINITRIX. Let the gaming journey begin!
          </p>
        </div>
      </section>
    </div>
  );
}
const styles = {
  welcomeSection: {
    padding: "50px",
  },
  welcomeContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    color: "black",
    fontSize: "36px",
    marginBottom: "30px",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
  },
};
