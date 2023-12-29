import fs from 'fs';

const file = fs.readFileSync('./utils/faces.json', 'utf8');

const face = JSON.parse(file);

export default function getRandomFace() {
    return face[Math.floor(Math.random() * face.length)];
}