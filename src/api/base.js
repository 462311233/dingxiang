//接口地址

const base = {
  //域名
  host: 'http://api.tianapi.com',
  //国内疫情路径
  covInfo: '/ncov/index?key=02e5d66193b75d88947a81ebd987264c',
  //域名
  cnHost: '',
  //国内疫情路径
  chinaData: '/g2/getOnsInfo?name=disease_h5',
  wHost:
    'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoGlobalStatis,FAutoContinentStatis,FAutoGlobalDailyList,FAutoCountryConfirmAdd',
  img: 'http://iwenwiki.com/wapicovid19/ncovimg.php',
  citys:
    'http://iwenwiki.com/wapicovid19/query.php?key=171e165a7d991c5f6ecd5194c54778ef',
  travel:
    'http://iwenwiki.com/wapicovid19/citys.php?key=171e165a7d991c5f6ecd5194c54778ef',
  cityCode: '/foo/aj/getCityCode'
}

export default base

// 'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoGlobalStatis,FAutoContinentStatis,FAutoGlobalDailyList,FAutoCountryConfirmAdd',
