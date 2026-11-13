import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Achievement from "./containers/achievement/Achievement";
import Blogs from "./containers/blogs/Blogs";
import Podcast from "./containers/podcast/Podcast";
import Talks from "./containers/talks/Talks";
import StartupProject from "./containers/StartupProjects/StartupProject";
import Contact from "./containers/contact/Contact";
import Projects from "./containers/projects/Projects";
import ToggleSwitch from "./components/footer/ToggleSwitch";
import { chosenTheme } from "./theme";

vi.mock("./components/animation/Reveal", () => ({
  Fade: ({ children }) => children,
  Flip: ({ children }) => children,
}));
vi.mock("@iconify/react", () => ({ Icon: () => null }));

describe("optional legacy sections", () => {
  it.each([Achievement, Blogs, Podcast, Talks, StartupProject])(
    "renders safely when optional configuration is absent",
    (Section) => {
      const { container } = render(<Section />);
      expect(container.firstChild).toBeNull();
    },
  );

  it("renders configured sections with accessible, isolated links", () => {
    render(
      <>
        <Achievement
          section={{
            title: "Achievements",
            achivementsCards: [
              {
                title: "Award",
                footerLink: [
                  { name: "Details", url: "https://example.com/award" },
                ],
              },
            ],
          }}
        />
        <Blogs
          section={{
            title: "Writing",
            blogs: [
              {
                title: "Article",
                url: "https://example.com/blog",
                image: "data:,blog",
              },
            ],
          }}
        />
        <Talks
          section={{
            title: "Talks",
            talks: [
              {
                title: "Presentation",
                slides_url: "https://example.com/slides",
                event_url: "https://example.com/event",
              },
            ],
          }}
        />
        <StartupProject
          section={{
            title: "Projects",
            projects: [
              {
                title: "Project",
                link: "https://example.com/project",
                image: "data:,project",
              },
            ],
          }}
        />
        <Podcast
          section={{ title: "Audio", podcast: ["https://example.com/embed"] }}
        />
      </>,
    );
    for (const name of ["Details", "Read More", "Slides", "Event", "Project"]) {
      const link = screen.getByRole("link", { name });
      expect(link.target).toBe("_blank");
      expect(link.rel).toContain("noopener");
    }
    expect(screen.getByTitle("Podcast 1").getAttribute("src")).toBe(
      "https://example.com/embed",
    );
  });

  it("renders the standalone contact and public projects sections", () => {
    const { container } = render(
      <>
        <Contact />
        <Projects />
      </>,
    );
    expect(container.querySelector(".contact-title")).not.toBeNull();
    expect(
      container.querySelectorAll(".repo-cards-div-main a").length,
    ).toBeGreaterThan(0);
  });

  it("keeps the optional theme toggle keyboard-accessible", () => {
    const onToggle = vi.fn();
    render(<ToggleSwitch theme={chosenTheme} onToggle={onToggle} />);
    const toggle = screen.getByRole("checkbox", {
      name: "Use alternate theme",
    });
    toggle.focus();
    expect(document.activeElement).toBe(toggle);
    fireEvent.click(toggle);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
