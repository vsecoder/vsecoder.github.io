import Diagon from "diagonjs";


export default function handler(req, res) {
    let { text } = req.query;
    text = text.replace(/\\n/g, "\n");
    Diagon.init().then(diagon => {
        res.status(200).json({ answer: diagon.translate.frame(text, { style: "Unicode" }) });
    });
}
