import { skills } from "../portfolio";

/**
 * Retrieves the corresponding technology icon for a given tech name.
 *
 * @param {string} tech - The name of the technology for which the icon is sought.
 * @returns {object} - An object containing information about the technology icon,
 *                    or a default "Tool" icon if the technology is not found.
 */
export const getTechIcon = (tech) => {
  const softwareSkills = skills.data[0].softwareSkills;
  return (
    softwareSkills.find((skill) => skill.skillName === tech) ||
    softwareSkills.find((skill) => skill.skillName === "Tool")
  );
};

export const getTechColor = (tech) => {
  const softwareSkills = skills.data[0].softwareSkills;
  const skillObject = softwareSkills.find((skill) => skill.skillName === tech);
  if (skillObject) {
    return skillObject.style.color;
  } else return "";
};
