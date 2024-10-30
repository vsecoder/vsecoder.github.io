import Diagon from "diagonjs";

export default async function handler(req, res) {
    const { markdown } = req.body;
    let input = markdown;
    const diagon = await Diagon.init();

    input = input.replace(/```diagon\/math\s+([\s\S]*?)```/g, (match, code) => {
        const output = diagon.translate.math(code.trim(), { style: "Unicode" });
        return `\`\`\`math\n${output}\n\`\`\``;
    });

    input = input.replace(/```diagon\/table\s+([\s\S]*?)```/g, (match, code) => {
        const output = diagon.translate.table(code.trim(), { style: "ascii with header 2" });
        return `\`\`\`table\n${output}\n\`\`\``;
    });

    input = input.replace(/```diagon\/frame\s+([\s\S]*?)```/g, (match, code) => {
        const output = diagon.translate.frame(code.trim(), { style: "Unicode" });
        return `\`\`\`frame\n${output}\n\`\`\``;
    });

    res.status(200).json({ markdown: input });
}
