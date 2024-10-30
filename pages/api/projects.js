import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const markdownDir = path.join(process.cwd(), 'public', 'projects');

    res.status(200).json({ projects: fs.readdirSync(markdownDir) });
}
