export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const ipAddress = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        const { page_url, ...formData } = req.body;

        const dataToSend = {
            ...formData,
            ip_address: ipAddress,
            page_url,
        };

        // Send to backend
        const response = await fetch("https://webpanel.store/api/formData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
        });

        if (!response.ok) throw new Error("Failed to submit form");

        res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error submitting form" });
    }
}
