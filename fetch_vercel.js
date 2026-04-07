const fs = require('fs');
const path = require('path');

const TOKEN = process.argv[2];
const PROJECT_NAME = 'darkmatterv1';
const HEADERS = { 'Authorization': `Bearer ${TOKEN}` };

function flattenTree(items, currentPath = '') {
    let result = [];
    for (const item of items) {
        if (item.type === 'directory') {
            result = result.concat(flattenTree(item.children, path.join(currentPath, item.name)));
        } else if (item.type === 'file') {
            result.push({ ...item, filePath: path.join(currentPath, item.name) });
        }
    }
    return result;
}

async function downloadFile(deploymentId, file) {
    let localPath = file.filePath;
    if (localPath.startsWith('src/') || localPath.startsWith('src\\')) {
        localPath = localPath.substring(4);
    }
    
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    const dlRes = await fetch(`https://api.vercel.com/v7/deployments/${deploymentId}/files/${file.uid}`, { headers: HEADERS });
    if (dlRes.status === 200) {
        let buffer;
        const text = await dlRes.text();
        try {
            const json = JSON.parse(text);
            if (json.data) {
                // Vercel V7 returns base64
                buffer = Buffer.from(json.data, 'base64');
            } else {
                buffer = Buffer.from(text);
            }
        } catch(err) {
            buffer = Buffer.from(text);
        }
        fs.writeFileSync(localPath, buffer);
        console.log(`Downloaded properly: ${localPath}`);
    } else {
        const errText = await dlRes.text();
        console.error(`Failed to download ${localPath}: ${dlRes.status} ${errText}`);
    }
}

async function main() {
    const res = await fetch(`https://api.vercel.com/v6/deployments?app=${PROJECT_NAME}&target=production`, { headers: HEADERS });
    const data = await res.json();
    const deploymentId = data.deployments[0].uid;

    const filesRes = await fetch(`https://api.vercel.com/v6/deployments/${deploymentId}/files`, { headers: HEADERS });
    const filesData = await filesRes.json();
    const allFiles = flattenTree(filesData);

    const BATCH_SIZE = 10;
    for (let i = 0; i < allFiles.length; i += BATCH_SIZE) {
        const batch = allFiles.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map(f => downloadFile(deploymentId, f)));
    }
    
    console.log('All files downloaded successfully!');
}

main().catch(console.error);
