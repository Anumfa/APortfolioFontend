import { jsPDF } from 'jspdf';
import { resumeData, resumeProjects } from '../data/resume';

const CYAN = [102, 252, 241];
const DARK = [40, 40, 40];
const MUTED = [80, 80, 80];

const wrapText = (doc, text, x, y, maxWidth, lineHeight = 5.5) => {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
};

export const downloadResumePdf = () => {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const checkPage = (needed = 15) => {
    if (y + needed > 285) {
      doc.addPage();
      y = 18;
    }
  };

  const sectionTitle = (title) => {
    checkPage(12);
    doc.setFillColor(...CYAN);
    doc.rect(margin, y - 4, contentWidth, 7, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(11, 12, 16);
    doc.text(title.toUpperCase(), margin + 2, y);
    y += 10;
    doc.setTextColor(...DARK);
  };

  const body = (text, bold = false) => {
    checkPage();
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(9.5);
    y = wrapText(doc, text, margin, y, contentWidth) + 2;
  };

  const bullet = (text) => {
    checkPage();
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    y = wrapText(doc, `• ${text}`, margin + 2, y, contentWidth - 4) + 1.5;
  };

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(20, 20, 20);
  doc.text(resumeData.name.toUpperCase(), pageWidth / 2, y, { align: 'center' });
  y += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...CYAN);
  doc.text(resumeData.title, pageWidth / 2, y, { align: 'center' });
  y += 7;

  doc.setFontSize(8.5);
  doc.setTextColor(...MUTED);
  const contactLine = `${resumeData.email}  |  ${resumeData.location}  |  ${resumeData.linkedin}`;
  doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.text(`${resumeData.phone}  |  ${resumeData.availability}`, pageWidth / 2, y, { align: 'center' });
  y += 10;

  sectionTitle('Professional Summary');
  body(resumeData.summary);

  sectionTitle('Technical Skills');
  resumeData.skills.forEach(({ category, items }) => {
    body(`${category}: ${items.join(' | ')}`);
  });

  sectionTitle('Education');
  body(resumeData.education.degree, true);
  body(`${resumeData.education.school} | ${resumeData.education.period}`);
  body(`Relevant Coursework: ${resumeData.education.coursework}`);

  sectionTitle('Internship Experience');
  body(resumeData.experience.role, true);
  body(`${resumeData.experience.company} | ${resumeData.experience.period}`);
  resumeData.experience.points.forEach(bullet);

  sectionTitle('Projects');
  resumeProjects.forEach((project) => {
    checkPage(20);
    body(project.title, true);
    body(`Tool: ${project.tool}`);
    project.description.forEach(bullet);
    if (project.businessImpact) bullet(`Impact: ${project.businessImpact}`);
    if (project.outcome) bullet(`Outcome: ${project.outcome}`);
    y += 2;
  });

  sectionTitle('Languages');
  resumeData.languages.forEach(({ name, level }) => {
    body(`${name}: ${level}`);
  });

  doc.save('Asad_Khan_Resume.pdf');
};
