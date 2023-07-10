const VERCEL_URL = "https://vercel.com/api/web/insights/stats";
const PROJECT_ID = 'project_id';

const getVercelStats = async (TOKEN) => {
    const preOneMonthAgo = new Date();

    preOneMonthAgo.setMonth(preOneMonthAgo.getMonth() - 1);

    const [oneMonthAgo] = preOneMonthAgo.toISOString().split("T");
    const [currentDate] = new Date().toISOString().split("T");

    const URLQueryParams = new URLSearchParams({
        from: oneMonthAgo,
        to: currentDate,
        projectId: PROJECT_ID,
        environment: "production",
    });

    const response = await fetch(`${VERCEL_URL}/path?${URLQueryParams}`, {
        headers: {
            "Authorization": `Bearer ${TOKEN}`
        }
    });

    const data = await response.json();
    console.log(data);
    const summary = data.data.reduce((acc, item) => {
        return acc + item.summary;
    }, 0);
    return summary;
}


export { getVercelStats }