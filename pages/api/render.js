import Diagon from "diagonjs";

export default async function handler(req, res) {
    const { markdown } = req.body;
    let input = markdown;
    const diagon = await Diagon.init({wasmUrl: 'https://cdn.jsdelivr.net/npm/diagonjs@1.6.1/dist/diagon.js-1.1.wasm'});

    input = input.replace(/```diagon\/math\s+([\s\S]*?)```/g, (match, code) => {
        return diagon.translate.math(code.trim(), { style: "unicode" });
    });

    input = input.replace(/```diagon\/table\s+([\s\S]*?)```/g, (match, code) => {
        return diagon.translate.table(code.trim(), { style: "unicode with double header" });
    });

    input = input.replace(/```diagon\/frame\s+([\s\S]*?)```/g, (match, code) => {
        return diagon.translate.frame(code.trim(), { style: "unicode" });
    });

    input = input.replace(/```diagon\/graph\s+([\s\S]*?)```/g, (match, code) => {
        return diagon.translate.graphDAG(code.trim());
    });

    input = input.replace(/```diagon\/tree\s+([\s\S]*?)```/g, (match, code) => {
        return diagon.translate.tree(code.trim(), { style: "unicode 2" });
    });

    res.status(200).json({ markdown: input });
}
