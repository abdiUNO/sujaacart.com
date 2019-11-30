const fs = require('fs');
const path = require('path');

const blacklist = ['_app', 'posts/[slug]'];

getPathsObject = (_dir, keepExt) => {
  const fileObj = {};

  const walkSync = dir => {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      // Construct whole file-path & retrieve file's stats
      const filePath = `${dir}${file}`;
      const fileStat = fs.statSync(filePath);

      if (fileStat.isDirectory()) {
        // Recurse one folder deeper
        walkSync(`${filePath}/`);
      } else {
        // Construct this file's pathname excluding the "pages" folder & its extension
        const cleanFileName = filePath
          .substr(0, filePath.lastIndexOf('.'))
          .replace('pages/', '')
          .replace('public/', '');

        // Add this file to `fileObj`
        if (!blacklist.includes(cleanFileName)) {
          fileObj[`/${cleanFileName}`] = {
            page: `/${cleanFileName}`,
            lastModified: fileStat.mtime,
            file: file.substr(0, file.lastIndexOf('.')),
            extension: path.extname(file)
          };
        }
      }
    });
  };

  // Start recursion to fill `fileObj`
  walkSync(_dir);

  return fileObj;
};

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const pathsObj = getPathsObject('pages/');
const imageObj = getPathsObject('public/img/', true);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"> 
${Object.keys(pathsObj)
  .map(
    path =>
      ` 
    <url>
      <loc>https://sujaacart.com${path}</loc>
      <lastmod>${formatDate(new Date(pathsObj[path].lastModified))}</lastmod>
    </url>`
  )
  .join('')}
${Object.keys(imageObj)
  .map(
    path => `
    <image:image>
        <image:loc>https://sujaacart.com${path}${imageObj[path].extension}</image:loc>
        <image:title>Art by Sujaac Art | ${imageObj[path].file}</image:title>
    </image:image>
`
  )
  .join('')}  
</urlset>`;

fs.writeFileSync('out/sitemap.xml', sitemapXml);
