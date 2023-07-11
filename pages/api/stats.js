const VERCEL_URL = "https://vercel.com/api/web/insights/stats";
const PROJECT_ID = process.env.PROJECT_ID;
const TOKEN = process.env.TOKEN;

const getVercelStats = async () => {
    const preOneMonthAgo = new Date();

    preOneMonthAgo.setMonth(preOneMonthAgo.getMonth() - 1);

    const oneMonthAgo = preOneMonthAgo.toISOString();
    const currentDate = new Date().toISOString();

    const URLQueryParams = new URLSearchParams({
        from: oneMonthAgo,
        to: currentDate,
        tz: 'Europe/Moscow',
        filter: '{}',
        projectId: PROJECT_ID,
        environment: "production",
    });

    const response = await fetch(`${VERCEL_URL}/path?${URLQueryParams}`, {
        headers: {
            "Authorization": `Bearer ${TOKEN}`
        }
    });

    const data = await response.json();
    let total = 0;
    data.data.forEach((item) => {
        total += item.total;
    });
    return total;
}


export default function handler(req, res) {
    getVercelStats(TOKEN).then(data => res.status(200).json({ data }));
}