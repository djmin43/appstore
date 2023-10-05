import React from "react";

const QuickBaseballClickerPage = () => {
  return (
    <article>
      <h1>Quick Baseball Clicker</h1>
      <br />
      <div>
        <p>
          Welcome to the Quick Baseball Clicker tutorial – your go-to solution
          when you find yourself umpiring a baseball game without your trusty
          clicker!
        </p>
        <br />
        <p>
          Holding a phone while umpiring can be cumbersome, but fear not! Why
          not harness the power of your mighty Apple Watch to keep track
          effortlessly? It{"'"}s a swift and user-friendly alternative.
        </p>
      </div>
      <br />
      <div>
        <h2>Instructions:</h2>
        <br />
        <p>
          Tap the &apos;strike&apos; button to record a strike. Tap the
          &apos;ball&apos; button to log a ball. Tap the &apos;out&apos; button
          to mark an out.
        </p>
        <br />
        <p>
          For resetting, just press and hold the white button. Should you have
          any questions or wish to provide feedback on the app, reach out via
          email at <a href="mailto:dj.min43@gmail.com">dj.min43@gmail.com</a>.
          Enjoy umpiring with ease!
        </p>
      </div>
      <br />

      <div>
        <h2>Video</h2>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q5FXP2zEjFM?si=s3vz1tXqmfE5gZ5f"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </article>
  );
};

export default QuickBaseballClickerPage;
