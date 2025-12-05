// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn")
const bodyElement = document.body

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light-mode"
if (currentTheme === "dark-mode") {
  bodyElement.classList.add("dark-mode")
}

// Toggle theme
themeBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode")
  const theme = bodyElement.classList.contains("dark-mode") ? "dark-mode" : "light-mode"
  localStorage.setItem("theme", theme)
})

// Download Resume as PDF
const downloadBtn = document.getElementById("downloadBtn")

downloadBtn.addEventListener("click", () => {
  const printWindow = window.open("", "", "height=600,width=900")
  const resumeContent = document.querySelector(".resume-container").innerHTML

  const printHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aryan Kaushik - Resume</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #111;
          line-height: 1.6;
          background: white;
        }
        .resume-container {
          max-width: 900px;
          margin: 0;
          background-color: white;
        }
        .resume-header {
          background-color: #2563eb;
          color: white;
          padding: 48px 40px;
          text-align: center;
        }
        .name {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .title {
          font-size: 1.2em;
          font-weight: 600;
          margin-bottom: 6px;
          opacity: 0.95;
        }
        .subtitle {
          font-size: 0.95em;
          opacity: 0.85;
          font-weight: 400;
        }
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 0.9em;
        }
        .contact-item {
          color: white;
          text-decoration: none;
        }
        .resume-content {
          padding: 48px 40px;
        }
        .section {
          margin-bottom: 40px;
        }
        .section-title {
          font-size: 1.4em;
          font-weight: 700;
          color: #111;
          margin-bottom: 24px;
          padding-bottom: 8px;
          border-bottom: 2px solid #2563eb;
          display: inline-block;
        }
        .summary-text {
          color: #666;
          line-height: 1.8;
          font-size: 0.95em;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }
        .skill-item {
          background-color: #f9fafb;
          color: #111;
          padding: 12px 14px;
          border-radius: 6px;
          text-align: center;
          font-weight: 500;
          font-size: 0.9em;
          border: 1px solid #e5e7eb;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .service-card {
          background-color: #f9fafb;
          padding: 20px;
          border-radius: 6px;
          border-left: 3px solid #2563eb;
        }
        .service-card h3 {
          font-size: 1em;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .service-card p {
          font-size: 0.9em;
          color: #666;
          line-height: 1.6;
        }
        .education-card {
          background-color: #f9fafb;
          padding: 20px;
          border-radius: 6px;
          border-left: 3px solid #2563eb;
        }
        .education-card h3 {
          font-size: 1.05em;
          margin-bottom: 4px;
          font-weight: 600;
        }
        .education-details {
          font-size: 0.9em;
          color: #2563eb;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .education-desc {
          font-size: 0.9em;
          color: #666;
          line-height: 1.6;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .project-card {
          background-color: #f9fafb;
          padding: 20px;
          border-radius: 6px;
          border-top: 3px solid #2563eb;
        }
        .project-card h3 {
          font-size: 1.1em;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .project-desc {
          font-size: 0.9em;
          color: #666;
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 12px;
        }
        .tech-badge {
          background-color: #2563eb;
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.8em;
          font-weight: 500;
        }
        .soft-skills {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .soft-skill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background-color: #f9fafb;
          border-radius: 6px;
        }
        .checkmark {
          color: #2563eb;
          font-weight: 700;
        }
        .resume-footer {
          background-color: #f9fafb;
          padding: 20px 40px;
          text-align: center;
          color: #666;
          font-size: 0.9em;
          border-top: 1px solid #e5e7eb;
        }
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="resume-container">
        ${resumeContent}
      </div>
    </body>
    </html>
  `

  printWindow.document.write(printHTML)
  printWindow.document.close()

  setTimeout(() => {
    printWindow.focus()
    printWindow.print()
    printWindow.close()
  }, 100)
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -60px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element)
})