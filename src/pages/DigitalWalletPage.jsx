import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const DigitalWalletPage = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel"
        >
          <h1 style={{ color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            Digital Wallet Analytics Dashboard
          </h1>
          <p style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '2rem', fontWeight: 'bold' }}>
            Fintech Data Analytics | Business Intelligence Dashboard
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '2rem',
              border: '1px solid var(--secondary-color)',
              backgroundColor: 'var(--surface-color)',
            }}>
              <img
                src="/digital-wallet.png"
                alt="Digital Wallet Analytics Dashboard"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            
            <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Description</h3>
            <p style={{ marginBottom: '1rem' }}>
              Designed and developed an end-to-end Excel dashboard to monitor key fintech KPIs for a digital wallet platform. 
              The dashboard tracks PKR 24.8M in Gross Merchandise Value across 5,000 transactions with a 95.1% success rate and PKR 4,958 Average Order Value. 
              Built interactive visualizations including Monthly GMV Trends, Cashback by Merchant analysis for 30+ merchants, and Transaction Success Rate breakdown showing 4,755 successful, 146 failed, and 99 pending transactions.
            </p>
            <p>
              Implemented dynamic slicers for Month and Year filters, enabling leadership to drill down into specific time periods and detect seasonal patterns. 
              The dashboard identified PKR 724K in potential revenue leakage from failed transactions and provided merchant-level cashback insights to optimize partnership strategies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Real-time KPI cards: Total GMV, Transactions, Success Rate, AOV",
                  "Monthly GMV trend analysis from Aug 2023 to Aug 2024",
                  "Cashback distribution across 30+ merchants with dynamic filtering",
                  "Success/Failure/Pending transaction breakdown with donut chart",
                  "Interactive slicers for date-based analysis"
                ].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle size={20} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Tools & Technologies</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)', fontWeight: '500' }}>
                Microsoft Excel, Pivot Tables, XLOOKUP, Slicers, Data Cleaning, Data Visualization, Conditional Formatting, Dashboard Design
              </p>

              <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Business Impact</h3>
              <p>
                Automated monthly financial reporting, reducing manual effort by 70% while providing real-time visibility into transaction health, merchant performance, and revenue opportunities for fintech operations team.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalWalletPage;
