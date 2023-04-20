import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="container">
      <h3>Home page</h3>
      <p>This is the home page</p>
      <p>
        An in-depth look at each of the main windows you’ll use every day in
        Unity, including useful shortcuts and hotkeys. Creating Gameplay How to
        get started making Scenes, GameObjects and Components; reading input;
        and adding gameplay or interactivity to your Project.
        <p>Asset Workflow</p>
        How to get Assets into Unity from a variety of different sources,
        including graphics, art and sound from external programs, package files
        from other developers, and ready-made Assets from our Package Manager
        and the Asset Store .<p>Editor Features</p>
        Information about many of the Editor’s powerful features, to help you
        customize your workflow, integrate with external tools, and extend the
        Editor itself.
        <p>
          Analysis Get performance information about your application with the
          Unity Profiler .
        </p>
        Upgrade Guides Important notes for upgrading projects that were authored
        with older versions of Unity.
      </p>

      <p>
        Use this page to discover and learn production-tested best practices
        from Unity experts.{" "}
        <p>
          The Technical Content Marketing team at Unity created the guides
          listed on this page together with industry experts.
        </p>{" "}
        engineers and technical artists from Unity R&D and the Accelerate Games
        Solutions teams.
      </p>

      <p>
        Use this guide to learn how to set up a new project with URP or convert
        an existing Built-in Render Pipeline-based project to URP. Learn about
        URP quality settings and shaders , setting up lighting, shadows, special
        effects, and more.
      </p>
      <p>
        This guide provides in-depth reference for creating high-end lighting
        for PC and console games and covers topics such as HDRP settings,
        cameras , and Volume frameworks, creating skyscapes, reflections,
        real-time lighting, and more.
      </p>
      <p>
        We apply our unique editorial approach to in-depth explanations on a
        range of topics — policy, the Supreme Court, voting rights, political
        extremism, what culture says about society, the biodiversity crisis,
        climate technology, green energy solutions, and more. And although we’re
        there when you need context for the events of the day, we also
        prioritize covering not just what is new but what’s important. Our
        Future Perfect section, for example, explores issues like the impact
        that industrial meat production has on the world, and alternatives to
        how we eat.
      </p>
    </div>
  );
}
