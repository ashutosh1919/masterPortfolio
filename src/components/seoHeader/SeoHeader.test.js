import React from "react";
import ReactDOM from "react-dom";
import SeoHeader from "./SeoHeader";
import { socialMediaLinks, experience, certifications } from "../../portfolio";

jest.mock("react-helmet", () => ({ Helmet: ({ children }) => children }));
jest.mock("../../portfolio.js", () => ({
  greeting: { title: "Portfolio owner" },
  seo: { title: "Portfolio", description: "Description" },
  socialMediaLinks: [],
  experience: { sections: [] },
  contactPageData: { phoneSection: {}, addressSection: {} },
  certifications: { certifications: [] },
}));

describe("SEO structured data", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    socialMediaLinks.length = 0;
    experience.sections.length = 0;
    certifications.certifications.length = 0;
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  function renderData() {
    ReactDOM.render(<SeoHeader />, container);
    return JSON.parse(
      container.querySelector('script[type="application/ld+json"]').textContent
    );
  }

  it("renders when email, work experience, and certifications are empty", () => {
    const data = renderData();
    expect(data.name).toBe("Portfolio owner");
    expect(data.sameAs).toEqual([]);
    expect(data.hasCredential).toEqual([]);
    expect(data).not.toHaveProperty("email");
    expect(data).not.toHaveProperty("jobTitle");
    expect(data).not.toHaveProperty("worksFor");
  });

  it("preserves populated contact, work, and certification data", () => {
    socialMediaLinks.push(
      { link: "mailto:person@example.org" },
      { link: "tel:+1234567" },
      { link: "https://example.org/profile" },
      null
    );
    experience.sections.push({
      work: true,
      experiences: [{ title: "Engineer", company: "Example Co" }],
    });
    certifications.certifications.push({
      title: "Certificate",
      subtitle: "Achievement",
      certificate_link: "https://example.org/certificate",
    });

    const data = renderData();
    expect(data.email).toBe("person@example.org");
    expect(data.sameAs).toEqual(["https://example.org/profile"]);
    expect(data.jobTitle).toBe("Engineer");
    expect(data.worksFor.name).toBe("Example Co");
    expect(data.hasCredential[0].name).toBe("Certificate");
  });
});
