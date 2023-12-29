import getRandomFace from '../../utils/face.js';

const getFace = async () => {
    const face = getRandomFace();
    return face;
}


export default function handler(req, res) {
    getFace().then(data => res.status(200).json({ data }));
}