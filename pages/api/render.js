import Diagon from "diagonjs";

export default async function handler(req, res) {
    const { markdown } = req.body;
    let input = markdown;
    const diagon = await Diagon.init('https://cdn.jsdelivr.net/npm/diagonjs@1.6.1/dist/diagon.js-1.1.wasm');

    input = input.replace(/```diagon\/math\s+([\s\S]*?)```/g, (match, code) => {
        return diagon.translate.math(code.trim(), { style: "Unicode" });
    });

    input = input.replace(/```diagon\/table\s+([\s\S]*?)```/g, (match, code) => {
        return diagon.translate.table(code.trim(), { style: "unicode with double header" });
    });

    input = input.replace(/```diagon\/frame\s+([\s\S]*?)```/g, (match, code) => {
        return diagon.translate.frame(code.trim(), { style: "Unicode" });
    });

    res.status(200).json({ markdown: input });
}
