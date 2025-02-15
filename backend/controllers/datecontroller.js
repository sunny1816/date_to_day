exports.getDayOfWeek = (req, res) => {
    const { date } = req.body;
    if (!date) return res.status(400).json({ error: "Date is required" });

    const day = new Date(date).toLocaleDateString("en-US", { weekday: "long" });
    res.json({ date, day });
};
