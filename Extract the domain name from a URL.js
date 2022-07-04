// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
    if (url.includes('https://')) url=url.slice(url.indexOf('https://')+8)
    if (url.includes('http://')) url=url.slice(url.indexOf('http://')+7)
    if (url.includes('www.')) url=url.slice(url.indexOf('www.')+4)
   
    return url.split('.')[0]
  
  }


