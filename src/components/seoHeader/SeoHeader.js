import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  const links = Array.isArray(socialMediaLinks)
    ? socialMediaLinks.filter((media) => media && typeof media.link === "string")
    : [];
  const sameAs = links
    .filter(
      (media) =>
        !(media.link.startsWith("tel:") || media.link.startsWith("mailto:"))
    )
    .map((media) => media.link);
  const mailLink = links.find((media) => media.link.startsWith("mailto:"));
  const mail = mailLink ? mailLink.link.substring("mailto:".length) : undefined;

  const sections = Array.isArray(experience?.sections) ? experience.sections : [];
  const work = sections.find((section) => section && section.work);
  const job = Array.isArray(work?.experiences) ? work.experiences[0] : undefined;

  const certificates = Array.isArray(certifications?.certifications)
    ? certifications.certifications
    : [];
  const credentials = certificates.filter(Boolean).map((certification) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    url: certification.certificate_link,
    name: certification.title,
    description: certification.subtitle,
  }));
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    jobTitle: job?.title,
    worksFor: job?.company
      ? { "@type": "Organization", name: job.company }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
