export const Capital = {
  template: `<div>
                <div>首都： {{cityName}}</div>
                <div>人口： {{population}} 万</div>
                <div>面积： {{area}} 平方公里</div>
             </div>`,
  props: ['cityName', 'population', 'area']
}

export const Destination = {
  template: `<div>
                <div>目地的城市：{{$route.params.city}}</div>
             </div>`
}
