export const api={
  DIRECTORY:"http://172.19.4.23/api/FileManager",
  DOWNLOAD:"http://172.19.4.23/api/FileManager"
}
window.oldPath=api.DIRECTORY;
export const getDirectories=async (cb,path=false)=>{
  let url=(path && window.oldPath.includes("?path"))?window.oldPath+'/'+path:path?window.oldPath+"?path="+path:api.DIRECTORY;
  window.oldPath=url;
  let a= await fetch(url,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
       'Accept': 'application/json'
    }
  }).then((res)=>{
  return res.json()
  });
  cb(a)
}

export const downloadFile=async (file)=>{
  let url=api.DOWNLOAD+"?url="+file;
  window.open(url,'_self')
}

export const getSiteDirectories= async (url,cb)=>{
  window.oldPath=url;
  let a= await fetch(url,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
       'Accept': 'application/json'
    }
  }).then((res)=>{
  return res.json()
  });
  cb(a)
}

export const getSearchResult= async (seachString,cb)=>{
  let url=window.oldPath.includes("?path")?window.oldPath+"&search="+seachString:window.oldPath+"?search="+seachString;
  let searchUrl =seachString.length==0?window.oldPath:url;
  let a= await fetch(searchUrl,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
       'Accept': 'application/json'
    }
  }).then((res)=>{
  return res.json()
  });
  cb(a)
}
