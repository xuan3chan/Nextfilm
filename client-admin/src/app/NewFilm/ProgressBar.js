import React, { useState } from "react";
import ProgressBar from "react-progress-bar";

const MyProgressBar = ({ progress }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercentage(progress);
    }, 100); // Simulate progress update
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <ProgressBar completed={percentage} />
      <span>{percentage}%</span>
    </div>
  );
};

export default MyProgressBar;
