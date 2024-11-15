import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ repo, isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 max-w-lg w-full relative modal-content shadow-lg"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: theme.background }}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl modal-close"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>
          {repo.name}
        </h2>
        <p className="mb-4" style={{ color: theme.secondaryText }}>
          {repo.description}
        </p>
        <ul className="mb-4" style={{ color: theme.secondaryText }}>
          <li>
            <strong>Tech Stack:</strong> {repo.techStack}
          </li>
          <li>
            <strong>GitHub URL:</strong>{" "}
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.linkColor }}
            >
              Project Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;
