import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <header className="text-center space-y-3">
        <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Neetesh Kumar
        </motion.h1>
        <p className="text-lg text-gray-600">Azure DevOps Engineer | Cloud Infrastructure | DevSecOps</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
          <a href="mailto:Neeteshkahar5@gmail.com" className="underline">Neeteshkahar5@gmail.com</a>
          <span>•</span>
          <a href="tel:+917470580700" className="underline">+91 74705 80700</a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/neeteshkumar7777" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
          <span>•</span>
          <a href="https://github.com/NeeteshKumar2" target="_blank" rel="noreferrer" className="underline">GitHub</a>
        </div>
        <p className="text-sm text-gray-600">Indore, MP • Open to Relocate (PAN India)</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p>
          Azure DevOps Engineer with 4+ years of experience at Infosys specializing in CI/CD automation, Infrastructure as Code (Terraform, Bicep, ARM), Azure cloud architecture, Kubernetes, and DevSecOps practices. Experienced in designing, deploying, and managing secure, scalable, and highly available Azure environments using hub-spoke networking, Private Endpoints, RBAC, Managed Identity, Azure Policy, and Zero Trust principles.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Microsoft Azure", "Azure DevOps", "GitHub Actions", "Terraform", "Bicep", "ARM",
            "AKS", "Docker", "Kubernetes", "Helm", "Azure Monitor", "Application Insights",
            "Log Analytics", "KQL", "Azure Policy", "RBAC", "Managed Identity", "PowerShell",
            "Bash", "Python", "Git"
          ].map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <Card>
          <CardContent className="space-y-3 pt-4">
            <h3 className="text-xl font-bold">Technology Analyst | Infosys Limited | Pune, India</h3>
            <p className="text-sm text-gray-500">Apr 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Provisioned and standardized Azure infrastructure across 10 environments using ARM and Terraform.</li>
              <li>Architected Ubuntu-based Azure DevOps CI/CD pipelines with Azure CLI validation and PowerShell-driven verification.</li>
              <li>Reduced monthly Azure billing by approximately 20% through resource optimization and right-sizing.</li>
              <li>Built centralized Log Analytics workspaces with custom KQL alerts and improved issue detection.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 pt-4">
            <h3 className="text-xl font-bold">Senior Systems Engineer | Infosys Limited | Pune, India</h3>
            <p className="text-sm text-gray-500">Feb 2023 – Apr 2025</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Rebuilt CI/CD pipelines for 15 applications using multi-stage YAML and environment approvals.</li>
              <li>Reduced deployment failure rates from 18% to under 2% through automated gates and validation.</li>
              <li>Applied Azure RBAC and Managed Identity to enforce least-privilege access and improve security.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 pt-4">
            <h3 className="text-xl font-bold">Systems Engineer | Infosys Limited | Pune, India</h3>
            <p className="text-sm text-gray-500">Sep 2021 – Feb 2023</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Developed PowerShell automation for operational tasks and saved approximately 10 engineer-hours per week.</li>
              <li>Set up multi-stage YAML pipelines with artifact versioning and environment gates.</li>
              <li>Created reusable ARM and Bicep modules to accelerate environment setup.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Microsoft Certified: DevOps Engineer Expert (AZ-400)</li>
          <li>Microsoft Certified: Azure Developer Associate (AZ-204)</li>
          <li>Microsoft Certified: Azure AI Fundamentals (AI-900)</li>
          <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="text-gray-700">
          <strong>MBA — Amity University Online</strong><br />Part-time / distance learning
        </p>
        <p className="text-gray-700">
          <strong>B.Tech — Computer Science Engineering</strong><br />Shri Ram Group of Institutions, Jabalpur (2017 – 2021)
        </p>
      </section>
    </div>
  );
}
