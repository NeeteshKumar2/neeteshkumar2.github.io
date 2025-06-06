import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <header className="text-center space-y-2">
        <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Neetesh Kumar
        </motion.h1>
        <p className="text-lg text-gray-600">Azure DevOps Engineer | CI/CD | Power Platform | Dynamics 365</p>
        <div className="flex justify-center gap-4 pt-2">
          <Button variant="outline" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          Experienced Azure Engineer with 3+ years of expertise in Azure Developer roles, specializing in creating and managing CI/CD pipelines, automation, and cloud infrastructure. Proven track record in Power Platform, Dynamics 365, and DevOps practices.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Azure DevOps", "GitHub", "ARM Templates", "PowerShell", "CI/CD", "Power Platform",
            "Dynamics 365", "Docker", "Python", "C#", "JavaScript", "KQL",
            "Application Insights", "Log Analytics", "Power BI"
          ].map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <Card>
          <CardContent className="space-y-2 pt-4">
            <h3 className="text-xl font-bold">Technology Analyst – Infosys, Pune (2021–Present)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Reduced CI/CD pipeline review times by 30% using Azure DevOps.</li>
              <li>Improved defect fix turnaround by 20% with Power Automate and Power Apps.</li>
              <li>Maintained 99.9% uptime through proactive monitoring with Application Insights.</li>
              <li>Guided teams technically, increasing team productivity by 25%.</li>
            </ul>
            <h4 className="font-semibold pt-2">Projects:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>CI/CD Automation for Dynamics 365 and Power Platform using Azure DevOps & CLI.</li>
              <li>Infrastructure as Code using ARM for Azure services, ETL pipelines using ADF and Azure Databricks.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Card>
          <CardContent className="space-y-2 pt-4">
            <h3 className="text-lg font-bold">Bitcoin Data Dashboard (Personal Project)</h3>
            <p>
              Developed a Python dashboard using CoinGecko API, NumPy, and Matplotlib. Implemented real-time data streaming with threading and data normalization for price analysis.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>AZ-900: Microsoft Azure Fundamentals</li>
          <li>AZ-400: Designing and Implementing Microsoft DevOps Solutions</li>
          <li>AZ-204: Developing Solutions for Microsoft Azure</li>
          <li>PL-900: Microsoft Power Platform Fundamentals</li>
        </ul>
      </section>
    </div>
  );
}
