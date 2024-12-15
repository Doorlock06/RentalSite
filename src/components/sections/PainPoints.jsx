import { useEffect, useRef } from 'react';
import { FaQuestionCircle, FaClock,FaChartBar ,FaChartLine, FaReceipt,FaFolder, FaFileAlt, FaDatabase, FaMoneyBill, FaTools, FaExclamationTriangle } from 'react-icons/fa';
import '../../styles/components/pain-points.css';

const PainPoints = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const painPoints = [
    {
      icon: <FaFileAlt />,
      title: "Paper Work",
      lines: [
        "Too many papers to handle",
        "Making mistakes with manual handling"
      ]
    },
    {
      icon: <FaClock />,
      title: "Slow Pay",
      lines: [
        "Not paying rent on time",
        "Wasting time chasing payments"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "No Data View",
      lines: [
        "Can't see patterns easily",
        "Missing chances to grow"
      ]
    },
    {
      icon: <FaFolder />,
      title: "Lost Files",
      lines: [
        "Lose track of tenant documents",
        "Hard to find documents"
      ]
    },
    {
      icon: <FaChartBar />,
      title: "Reporting Struggles", 
      lines: [
        "Can't generate financial reports quickly",
        "Manual reporting is time-consuming"
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Data Safety",
      lines: [
        "No good backups",
        "Might lose important files"
      ]
    },
    {
      icon: <FaReceipt />,
      title: "Expense Tracking", 
      lines: [
        "Untracked maintenance costs",
        "Hard to track spending"
      ]
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Limited Access",
      lines: [
        "Can't check data from anywhere",
        "Need to be at office or on calls"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="pain-points" className="pain-points">
      <div className="container">
        <h2>Common Property Management Challenges</h2>
        <p className="pain-points-description section-description ">Here's what you will and might have already faced.
        </p>
        
        <div className="pain-points-radial">
          <div className="central-icon">
            <FaQuestionCircle />
          </div>
          
          <div className="pain-points-circle">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className={`pain-point-branch branch-${index}`}
              >
                <div className={`branch-line-${index} branch-line`}></div>
                <div className="pain-point-content">
                  <h3>
                    <span className="pain-point-icon">{point.icon}</span>
                    {point.title}
                  </h3>
                  <div className="point-lines">
                    {point.lines.map((line, lineIndex) => (
                      <p key={lineIndex}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints; 