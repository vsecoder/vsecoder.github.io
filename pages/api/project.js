import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { filename } = req.query;
    const markdownDir = path.join(process.cwd(), 'public', 'projects');

    const filePath = path.join(markdownDir, `${filename}.md`);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ markdown: 'File not found' });
    }

    let fileContent = fs.readFileSync(filePath, 'utf8');

    res.status(200).json({ markdown: fileContent });
}
