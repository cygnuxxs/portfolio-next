import React from "react";
import Service from "./Service";
import api from "public/api.svg";
import codeSvg from "public/code.svg";
import databaseSvg from "public/database.svg";

const Services = () => {
  return (
    <div className="w-screen h-[48rem] bg-neutral-100 justify-center px-24">
      <div className="text-center w-full py-16 space-y-4">
        <p className="text-2xl font-medium text-neutral-500">Services</p>
        <p className="text-4xl font-semibold">How Can I Help ?</p>
        <div className="flex gap-8 w-full px-12 py-8">
          <Service
            title="Web Application Development"
            description="As a Full Stack Developer, I can develop comprehensive web applications, handling both frontend and backend tasks, ensuring they are functional, secure, and optimised for performance."
            icon={codeSvg}
          />
          <Service
            title="API Development and Integration"
            description="I have the expertise to create and integrate RESTful or GraphQL APIs, enabling seamless communication between client-side and server-side components, and facilitating third-party integrations."
            icon={api}
          />
          <Service
            title="DevOps and Deployment"
            description="As a Full Stack Developer, I am proficient in managing deployment, scaling, and maintenance using tools like Docker, Kubernetes, and CI/CD pipelines, ensuring smooth and efficient application performance."
            icon={databaseSvg}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
