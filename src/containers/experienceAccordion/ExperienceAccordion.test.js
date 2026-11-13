import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ExperienceAccordion from "./ExperienceAccordion";

vi.mock("../../components/experienceCard/ExperienceCard.js", () => ({
  default: ({ experience }) => <p>{experience.title}</p>,
}));

const theme = { body: "#fff", headerColor: "#000", text: "#000", secondaryText: "#333" };
const sections = [
  { title: "Work", experiences: [{ title: "Engineer", company: "Example" }] },
  { title: "Volunteer", experiences: [{ title: "Mentor", company: "Example" }] },
];

describe("experience accordion", () => {
  it("uses independent native disclosures for the sections", () => {
    const { container } = render(<ExperienceAccordion sections={sections} theme={theme} />);
    const panels = container.querySelectorAll("details");
    expect(panels[0].open).toBe(false);
    expect(panels[1].open).toBe(false);
    fireEvent.click(screen.getByText("Work"));
    expect(panels[0].open).toBe(true);
    fireEvent.click(screen.getByText("Volunteer"));
    expect(panels[0].open).toBe(true);
    expect(panels[1].open).toBe(true);
    expect(screen.getByText("Engineer")).not.toBeNull();
  });

  it("supports Home, End, and arrow-key navigation between summaries", () => {
    render(<ExperienceAccordion sections={sections} theme={theme} />);
    const work = screen.getByText("Work");
    const volunteer = screen.getByText("Volunteer");
    work.focus();
    fireEvent.keyDown(work, { key: "ArrowDown" });
    expect(document.activeElement).toBe(volunteer);
    fireEvent.keyDown(volunteer, { key: "Home" });
    expect(document.activeElement).toBe(work);
    fireEvent.keyDown(work, { key: "End" });
    expect(document.activeElement).toBe(volunteer);
    fireEvent.keyDown(volunteer, { key: "ArrowUp" });
    expect(document.activeElement).toBe(work);
  });
});
