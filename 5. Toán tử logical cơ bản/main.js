const determineStudentCategory = (score, attebdance) => {
  if (score >= 90 && attebdance >= 0.5) return "Xuất sắc";
  else if (score >= 75 && attebdance >= 0.7) return "Giỏi";
  else if (score >= 60 && attebdance >= 0.6) return "Khá";
  else if (score < 60 && attebdance < 0.4) return "Trung bình";
  else if (attebdance < 0.5) return "Cần cải thiện";
};

console.log(determineStudentCategory(58, 0.3)); // Xuất sắc