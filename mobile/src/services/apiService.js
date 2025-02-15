export const fetchDayFromAPI = async (date) => {
    try {
      const response = await fetch("http://YOUR_SERVER_IP:5000/get-day", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date }),
      });
      const data = await response.json();
      return data.day;
    } catch (error) {
      console.error(error);
      return "Error fetching day";
    }
  };
  