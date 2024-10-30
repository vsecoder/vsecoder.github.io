import Diagon from "diagonjs";

export default async function handler(req, res) {
    const { markdown } = req.body;
    let input = markdown;

    const diagon = await Diagon.init({ wasmUrl: 'https://cdn.jsdelivr.net/npm/diagonjs@1.6.1/dist/diagon.js-1.1.wasm' });

    const diagonTransforms = {
        math: {
            regex: /```diagon\/math\s+([\s\S]*?)```/g,
            method: diagon.translate.math,
            options: { style: "unicode" }
        },
        table: {
            regex: /```diagon\/table\s+([\s\S]*?)```/g,
            method: diagon.translate.table,
            options: { style: "unicode with double header" }
        },
        frame: {
            regex: /```diagon\/frame\s+([\s\S]*?)```/g,
            method: diagon.translate.frame,
            options: { style: "unicode" }
        },
        graph: {
            regex: /```diagon\/graph\s+([\s\S]*?)```/g,
            method: diagon.translate.graphDAG,
            options: null
        },
        tree: {
            regex: /```diagon\/tree\s+([\s\S]*?)```/g,
            method: diagon.translate.tree,
            options: { style: "unicode 2" }
        }
    };

    for (const [key, { regex, method, options }] of Object.entries(diagonTransforms)) {
        input = input.replace(regex, (match, code) => {
            const result = options ? method(code.trim(), options) : method(code.trim());
            return `\`\`\`\n${result}\n\`\`\``;
        });
    }

    res.status(200).json({ markdown: input });
}