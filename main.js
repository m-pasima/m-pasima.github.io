document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
    const skills = [
        {
            skill: "CI/CD Automation",
            project: "https://github.com/m-pasima/CI-CD-Pipeline-Project",
            projectName: "CI/CD Pipeline Project"
        },
        {
            skill: "Infrastructure as Code (IaC)",
            project: "https://github.com/m-pasima/Aws-terraform-multi-tier-application.git",
            projectName: "AWS 3 Tier architecture with ECS Terraform Project"
        },
        {
            skill: "Security and Compliance",
            project: "https://github.com/m-pasima/Security-Implementation-Project.git",
            projectName: "Security Implementation Project"
        },
        {
            skill: "Cloud Architecture and Deployment",
            project: "https://github.com/m-pasima/Cloud-Deployment-Project.git",
            projectName: "Cloud Deployment Project"
        },
        {
            skill: "Containerization and Orchestration",
            project: "https://github.com/m-pasima/Kubernetes-Deployment-Project.git",
            projectName: "Kubernetes Deployment Project"
        },
        {
            skill: "Monitoring and Logging",
            project: "https://github.com/m-pasima/Monitoring-and-Logging-Project.git",
            projectName: "Monitoring and Logging Project"
        }
    ];

    const cicdTools = [
        "https://img.shields.io/badge/-Jenkins-D24939?&style=for-the-badge&logo=Jenkins&logoColor=white",
        "https://img.shields.io/badge/-GitHub_Actions-2088FF?&style=for-the-badge&logo=GitHub-Actions&logoColor=white",
        "https://img.shields.io/badge/-Terraform-623CE4?&style=for-the-badge&logo=Terraform&logoColor=white",
        "https://img.shields.io/badge/-Ansible-EE0000?&style=for-the-badge&logo=Ansible&logoColor=white",
        "https://img.shields.io/badge/-Nexus-4E73B9?&style=for-the-badge&logo=Sonatype&logoColor=white",
        "https://img.shields.io/badge/-SonarQube-4E9BCD?&style=for-the-badge&logo=SonarQube&logoColor=white",
        "https://img.shields.io/badge/-Tomcat-F8DC75?&style=for-the-badge&logo=Apache%20Tomcat&logoColor=black",
        "https://img.shields.io/badge/-Docker-2496ED?&style=for-the-badge&logo=Docker&logoColor=white"
    ];

    const cloudTools = [
        "https://img.shields.io/badge/-AWS-232F3E?&style=for-the-badge&logo=Amazon-AWS&logoColor=white",
        "https://img.shields.io/badge/-GCP-4285F4?&style=for-the-badge&logo=Google-Cloud&logoColor=white"
    ];

    const containerTools = [
        "https://img.shields.io/badge/-Docker-2496ED?&style=for-the-badge&logo=Docker&logoColor=white",
        "https://img.shields.io/badge/-Kubernetes-326CE5?&style=for-the-badge&logo=Kubernetes&logoColor=white",
        "https://img.shields.io/badge/-Helm-0F1689?&style=for-the-badge&logo=Helm&logoColor=white"
    ];

    const monitoringTools = [
        "https://img.shields.io/badge/-Prometheus-E6522C?&style=for-the-badge&logo=Prometheus&logoColor=white",
        "https://img.shields.io/badge/-Grafana-F46800?&style=for-the-badge&logo=Grafana&logoColor=white"
    ];

    const experiences = [
        {
            title: "Senior DevOps Engineer, Atomix LTD",
            date: "March 2023 – Present | Suffolk, United Kingdom",
            responsibilities: [
                "Planned and architected infrastructure deployment using Draw.io, ensuring compliance with security and data regulations.",
                "Set up OpenVPN for secure user access, including the creation of users and groups, and assigned permissions based on the principle of least privilege.",
                "Established self-hosted CI/CD pipelines using GitHub Actions for automation processes.",
                "Deployed services in Google Cloud Platform (GCP) using Terraform and Terragrunt, focusing on Infrastructure as Code (IaC). This involved setting up various services such as Virtual Private Cloud (VPC) and its components, private Google Kubernetes Engine (GKE) clusters, Artifact Registry, Identity and Access Management (IAM), service accounts, and Secrets Manager.",
                "Utilized Terraform to create GCP groups, add team members, and assign relevant privileges.",
                "Configured and developed Helm charts from scratch for deploying tools like Argo CD, Redis, and PostgreSQL and production applications.",
                "Employed Helm charts for deploying monitoring tools such as Prometheus and Grafana, and for creating Grafana dashboards.",
                "Modified and enhanced Bash scripts and Python scripts for automation purposes.",
                "Deployed applications into private GKE clusters using Helm charts and performed troubleshooting of containerized applications in Kubernetes.",
                "Configured and managed the rotation of secrets in GCP Secrets, setup Cloudflare and implemented SSL certificates in private clusters using Terraform.",
                "Set up monitoring metrics in the GCP environment.",
                "Configured and set up disaster recovery solutions in the production environment.",
                "Planned projects, broke down tasks, and created Jira tasks.",
                "Documented projects using Confluence."
            ]
        },
        {
            title: "DevOps Engineer, BP",
            date: "April 2020 – March 2023 | London, United Kingdom",
            responsibilities: [
                "Engineered intricate CI/CD pipelines, utilizing Jenkins and GitHub Actions, allowing faster and reliable deployments.",
                "Led the transition from a monolithic architecture to a microservices-based setup, from Tomcat to EKS substantially improving system reliability and scalability.",
                "Implemented a robust monitoring solution incorporating elevated security protocols within Linux-based systems, Docker containers, and Kubernetes clusters in both AWS EKS and GCP GKE.",
                "Created and configured OpenVPN, creating user groups for secure and role-based access. Used VPNs for secure CI/CD deployments.",
                "Wrote Terraform and Terragrunt scripts for automated infrastructure provisioning on AWS.",
                "Utilized Ansible with dynamic inventory for server configuration.",
                "Involved in the recruitment process, training new team members, and introducing them to our technology stack.",
                "Regularly attended job-related seminars and training sessions to keep up-to-date with the latest industry trends and technologies.",
                "Configured and set up IAM roles for contractors.",
                "Configured and set up various AWS services, including Application Load Balancer (ALB), Virtual Private Cloud (VPC), subnets, CloudFront, Relational Database Service (RDS), DynamoDB, Route 53, Web Application Firewall (WAF), Simple Storage Service (S3), Elastic File System (EFS), Identity and Access Management (IAM), Secrets Manager, Certificate Manager, CloudWatch, and Auto Scaling groups, among others."
            ]
        },
        {
            title: "Build and Release Engineer, Sky",
            date: "November 2017 – March 2020 | London, United Kingdom",
            responsibilities: [
                "Developed an automated build process integrating Jenkins, Git, Maven, SonarQube, Nexus, Docker, Ansible, and Terraform.",
                "Collaborated across teams for web software build, release, and deployment projects.",
                "Created Jenkinsfile for automated deployments.",
                "Configured and managed Jenkins server for CI/CD pipelines.",
                "Automated the software development process and monitored infrastructure performance using New Relic.",
                "Modified Helm charts for deployments.",
                "Ensured compliance with the company’s DevOps standards.",
                "Configured NACL, ACL, and security groups on AWS for access control.",
                "Supported and maintained hardware and software infrastructure on Linux-based systems.",
                "Performed manual production deployments and shadowed senior engineers.",
                "Participated in project planning and task allocation."
            ]
        },
        {
            title: "Junior AWS Cloud and Linux Engineer, Diebold Nixdorf Software Partner B.V.",
            date: "June 2016 – September 2017 | Bromley, United Kingdom",
            responsibilities: [
                "Leveraged AWS Cloud Practitioner expertise for robust AWS service deployment including EC2, VPC, Security Groups, ASG, IAM, Route 53, and ELB.",
                "Utilized Infrastructure as Code (Terraform) for automated AWS resource provisioning, enhancing deployment efficiency and environment consistency.",
                "Administered RHEL operating systems, ensuring system reliability, performance, and security through regular updates and patch management.",
                "Applied Agile methodology for collaborative project delivery, participating in stand-ups, sprint planning, and retrospectives.",
                "Engineered cloud solutions with AWS, setting up scalable and resilient architectures for enterprise applications.",
                "Maintained hardware and software infrastructure in compliance with best practices, including security and data protection strategies.",
                "Conducted manual production deployments using Linux commands for precise release control and immediate issue resolution.",
                "Engaged in continuous learning and mentorship by shadowing senior engineers, addressing complex issues with proficient support."
            ]
        }
    ];

    function loadSkills() {
        const tbody = document.querySelector('#skills tbody');
        skills.forEach(skill => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${skill.skill}</td>
                <td><a href="${skill.project}" target="_blank">${skill.projectName}</a></td>
            `;
            tbody.appendChild(row);
        });
    }

    function loadTools(containerId, tools) {
        const container = document.getElementById(containerId);
        tools.forEach(tool => {
            const img = document.createElement('img');
            img.src = tool;
            container.appendChild(img);
        });
    }

    function loadExperience() {
        const container = document.getElementById("experience-container");
        experiences.forEach(exp => {
            const div = document.createElement("div");
            div.className = "experience";
            const listId = "exp-" + Math.random().toString(36).slice(2,9);
            div.innerHTML = `
                <h3>${exp.title}</h3>
                <p><strong>${exp.date}</strong></p>
                <ul id="${listId}" class="collapsed">
                    ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
                <button class="toggle-resp" data-target="${listId}">Show Details</button>
            `;
            container.appendChild(div);
        });
        document.querySelectorAll(".toggle-resp").forEach(btn => {
            btn.addEventListener("click", () => {
                const ul = document.getElementById(btn.dataset.target);
                ul.classList.toggle("collapsed");
                btn.textContent = ul.classList.contains("collapsed") ? "Show Details" : "Hide Details";
            });
        });
    }
    loadSkills();
    loadTools('cicd-tools', cicdTools);
    loadTools('cloud-tools', cloudTools);
    loadTools('container-tools', containerTools);
    loadTools('monitoring-tools', monitoringTools);
    loadExperience();
    const toggle = document.getElementById("dark-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            const mode = document.body.classList.contains("dark") ? "dark" : "light";
            localStorage.setItem("theme", mode);
        });
    }
    const scrollBtn = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });
    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
