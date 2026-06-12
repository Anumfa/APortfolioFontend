export const resumeData = {
  name: 'Asad Khan',
  title: 'Data Analyst | BS Data Science',
  email: 'aasad9736@gmail.com',
  phone: '+92 317 0395740',
  location: 'Sindh, Pakistan',
  linkedin: 'linkedin.com/in/data-analyst-asad-khan07',
  linkedinUrl: 'https://www.linkedin.com/in/data-analyst-asad-khan07',
  availability: 'Available for Internships & Entry-Level Roles',

  summary:
    'Data Analyst with a strong foundation in Data Science, business intelligence, and data visualization. Proficient in Microsoft Excel, Power BI, SQL, and KPI Dashboard Development, with experience transforming complex datasets into actionable insights. Skilled in data cleaning, reporting, and performance analysis to support data-driven decision-making. Strong analytical and problem-solving abilities with a commitment to delivering accurate, impactful, and business-focused results.',

  skills: [
    {
      category: 'Data Analysis & BI Tools',
      items: ['Microsoft Excel (Advanced)', 'Power BI', 'Google Sheets', 'KPI Dashboards'],
    },
    {
      category: 'Database & Querying',
      items: ['SQL (Structured Query Language)', 'Data Cleaning', 'Data Wrangling'],
    },
    {
      category: 'Visualization & Reporting',
      items: ['Data Visualization', 'Reporting & Analytics', 'Business Insights'],
    },
    {
      category: 'Productivity Software',
      items: ['Microsoft Office Suite (Word, PowerPoint, Outlook)'],
    },
    {
      category: 'Core Competencies',
      items: ['Analytical Thinking', 'Critical Thinking', 'Attention to Detail', 'Team Collaboration'],
    },
  ],

  education: {
    degree: 'BS Data Science (BS-DS)',
    school: 'University of Sindh, Jamshoro, Pakistan',
    period: '2023 – Present',
    coursework:
      'Statistics, Database Management, Data Visualization, Business Analytics, Machine Learning Fundamentals',
  },

  experience: {
    role: 'Data Science Intern',
    company: 'Technify, Pakistan — PSEB-Registered | Ministry of IT & Telecom – Digital Pakistan',
    period: 'Jun 2026 – Present',
    points: [
      'Contributed to real-world data science projects, collaborating directly with the Development Team Lead on live deliverables.',
      'Applied data analysis and industry best practices to support business objectives; maintained end-to-end data workflows.',
      'Tools: Microsoft Excel, Data Analysis, Data Visualization, Industry Best Practices.',
    ],
  },

  languages: [
    { name: 'Urdu', level: 'Native' },
    { name: 'English', level: 'Professional Working Proficiency' },
  ],
};

export const resumeProjects = [
  {
    title: 'Digital Wallet Analytics Dashboard',
    tool: 'Fintech Data Analytics | Business Intelligence Dashboard',
    image: '/digital-wallet.png',
    link: '/project/digital-wallet',
    description: [
      'Designed an end-to-end Excel dashboard tracking PKR 24.8M GMV, 5,000 transactions, 95.1% success rate, and PKR 4,958 AOV with interactive fintech KPI visualizations.',
      'Built Monthly GMV Trends, Cashback by Merchant (30+ merchants), and Transaction Success Rate breakdown — 4,755 successful, 146 failed, 99 pending.',
      'Implemented dynamic Month/Year slicers; identified PKR 724K revenue leakage and automated reporting, reducing manual effort by 70%.',
    ],
    fullDescription: [
      'Designed and developed an end-to-end Excel dashboard to monitor key fintech KPIs for a digital wallet platform. The dashboard tracks PKR 24.8M in Gross Merchandise Value across 5,000 transactions with a 95.1% success rate and PKR 4,958 Average Order Value.',
      'Built interactive visualizations including Monthly GMV Trends, Cashback by Merchant analysis for 30+ merchants, and Transaction Success Rate breakdown showing 4,755 successful, 146 failed, and 99 pending transactions.',
      'Implemented dynamic slicers for Month and Year filters, enabling leadership to drill down into specific time periods and detect seasonal patterns. The dashboard identified PKR 724K in potential revenue leakage from failed transactions and provided merchant-level cashback insights to optimize partnership strategies.',
    ],
    keyFeatures: [
      'Real-time KPI cards: Total GMV, Transactions, Success Rate, AOV',
      'Monthly GMV trend analysis from Aug 2023 to Aug 2024',
      'Cashback distribution across 30+ merchants with dynamic filtering',
      'Success/Failure/Pending transaction breakdown with donut chart',
      'Interactive slicers for date-based analysis',
    ],
    toolsTechnologies:
      'Microsoft Excel, Pivot Tables, XLOOKUP, Slicers, Data Cleaning, Data Visualization, Conditional Formatting, Dashboard Design',
    businessImpact:
      'Automated monthly financial reporting, reducing manual effort by 70% while providing real-time visibility into transaction health, merchant performance, and revenue opportunities for fintech operations team.',
  },
  {
    title: 'Hospital No-Show Crisis Analysis',
    tool: 'Healthcare Data Analytics | Excel Dashboard',
    image: '/hospital-no-show.png',
    link: '/project/hospital-no-show',
    description: [
      'Developed an interactive Excel dashboard analyzing 12-month hospital appointment data with color-coded crisis indicators (red ≥80% no-show rate).',
      'Identified severe attendance breakdowns — January 89% and October 100% — vs optimal months February 33%, April 36%, and December 40%.',
      'Enabled data-driven operations to prioritize follow-up calls and SMS reminders in crisis months, recovering revenue from empty slots.',
    ],
    fullDescription: [
      'Developed an interactive Excel dashboard to analyze 12-month hospital appointment data and identify critical patient no-show patterns. The visualization uses conditional color-coding to instantly flag high-risk months, with red bars indicating crisis periods ≥80% no-show rate. Analysis revealed severe attendance breakdowns in January at 89% and October at 100%, compared to optimal performance in February 33%, April 36%, and December 40%.',
      'This project demonstrates ability to transform raw operational data into actionable business insights that help healthcare management reduce revenue loss, optimize doctor schedules, and implement targeted patient reminder systems during high-risk periods.',
    ],
    keyFeatures: [
      '12-month trend analysis with monthly breakdown',
      'Color-coded risk indicators: Red for crisis, Green for optimal, Blue for moderate',
      'Identified 55% average no-show rate with seasonal volatility',
      'Business-ready visualization for stakeholder presentations',
    ],
    toolsTechnologies:
      'Microsoft Excel, Pivot Tables, Conditional Formatting, Bar Charts, Data Visualization, Trend Analysis',
    outcome:
      'Enabled data-driven decision making for hospital operations team to prioritize follow-up calls and SMS reminders in crisis months, potentially recovering significant revenue from empty appointment slots.',
  },
];
