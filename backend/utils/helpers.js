const getDayOfWeek = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date)) throw new Error("Invalid date");
      return date.toLocaleDateString("en-US", { weekday: "long" });
    } catch (error) {
      return "Invalid Date";
    }
  };
  
  module.exports = { getDayOfWeek };
  